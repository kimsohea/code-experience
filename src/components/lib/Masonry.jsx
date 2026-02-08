import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () => queries.forEach((q) => matchMedia(q).removeEventListener("change", handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

const Masonry = ({
  items,
  isAct,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  aniFrom = "bottom",
  exitDir = "down",
  hoverSFlg = true,
  hoverScale = 0.95,
  focusBlr = true,
  hoverClr = false,
  popFn = () => {},
}) => {
  const columns = useMedia(["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"], [3, 3, 2, 1], 1);

  const [contRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitPos = (item) => {
    const contR = contRef.current?.getBoundingClientRect();
    if (!contR) return { x: item.x, y: item.y };

    let dir = aniFrom;

    if (aniFrom === "random") {
      const dirArr = ["top", "bottom", "left", "right"];
      dir = dirArr[Math.floor(Math.random() * dirArr.length)];
    }

    switch (dir) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: contR.width / 2 - item.w / 2,
          y: contR.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];

    const colH = new Array(columns).fill(0);
    const colW = width / columns;

    return items.map((child) => {
      const col = colH.indexOf(Math.min(...colH));
      const x = colW * col;
      const height = child.height / 2;
      const y = colH[col];

      colH[col] += height;

      return { ...child, x, y, w: colW, h: height };
    });
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (!imagesReady) return;
    const winWid = window.innerWidth;

    grid.forEach((item, idx) => {
      const sel = `[data-key="${item.id}"]`;
      const base = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (isAct) {
        const { x, y } = getInitPos(item);
        gsap.fromTo(
          sel,
          {
            opacity: 0,
            ...base,
            x,
            y,
            ...(focusBlr && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...base,
            ...(focusBlr && { filter: "blur(0px)" }),
            duration,
            ease,
            delay: idx * stagger,
            overwrite: "auto",
          },
        );
      } else if (winWid > 758) {
        const outY = exitDir === "down" ? -window.innerHeight - 200 : window.innerHeight + 200;

        gsap.to(sel, {
          y: outY,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady, isAct]);

  const enterFn = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (hoverSFlg) gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: "power2.out" });

    if (hoverClr) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const leaveFn = (e, item) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (hoverSFlg) gsap.to(selector, { scale: 1, duration: 0.3, ease: "power2.out" });

    if (hoverClr) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div ref={contRef} className="list_m">
      {grid.map((item, idx) => (
        <div key={item.id} data-key={item.id} className="item-m-wrapper" onMouseEnter={(e) => enterFn(e, item)} onMouseLeave={(e) => leaveFn(e, item)}>
          <button key={`${item.id}_${idx}`} className="item-m-img" onClick={() => popFn(idx)}>
            {hoverClr && <div className="color-overlay" />}
            <img src={item.imgSrc} alt={`${item.title} 사이트 이미지`} />
            <img src={item.imgSrcMo} alt={`${item.title} 사이트 이미지`} className="img_mo" />
            <span className={item.type}>{item.type}</span>
            <p>{item.title}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
