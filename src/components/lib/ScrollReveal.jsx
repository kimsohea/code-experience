import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "center bottom",
  wordAnimationEnd = "center bottom",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : children?.props?.children ?? "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word === "\n") return <br key={index} />;
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "power1.out",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top center" - 200,
          end: rotationEnd,
          scrub: 2,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "power1.out",
        opacity: 1,
        stagger: 10,
        delay: 4,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top center" - 200,
          end: wordAnimationEnd,
          scrub: 1,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 10,
          delay: 4,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top center" - 200,
            end: wordAnimationEnd,
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>
        {splitText.map((word, idx) => (word === "\n" ? <br key={idx} /> : word))}
      </p>
    </h2>
  );
};

export default ScrollReveal;
