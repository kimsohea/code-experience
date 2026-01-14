import { useState, useRef, useEffect } from "react";

import useLunState from "@/hooks/useLunState";

import "@/assets/styles/App.scss";

import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import Profile from "@/components/Profile";
import Tools from "@/components/Tools";
import SiteList from "@/components/SiteList";
import Resume from "@/components/Resume";

function App() {
  const [actSec, setActSec] = useState("Intro");
  const [isScrl, setIsScrl] = useState(false);
  const { getDate } = useLunState();
  const [exitDir, setExitDir] = useState("down");

  const secRefs = useRef({});

  const clickFn = (secId) => {
    if (isScrl) return;
    const secRef = secRefs.current[secId];
    setActSec(secId);
    setIsScrl(true);
    if (secRef && secId !== actSec) {
      secRef.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsScrl(false), 600);
    } else setIsScrl(false);
  };

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    const worksEl = secRefs.current["Works"];
    if (!worksEl) return;

    const onScroll = () => {
      if (actSec === "Works") return;

      const y = window.scrollY;
      const top = worksEl.offsetTop;
      setExitDir(y < top ? "down" : "up");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [actSec]);

  // 전체 단락 스크롤 추적
  useEffect(() => {
    if (isScrl) return;

    const obsrv = new IntersectionObserver(
      (ent) => {
        ent.forEach((etr) => {
          if (!etr.isIntersecting || etr.intersectionRatio <= 0.4) return;
          const id = etr.target.id;
          setActSec((p) => (p === id ? p : id));
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );

    Object.values(secRefs.current).forEach((el) => {
      if (el) obsrv.observe(el);
    });

    return () => obsrv.disconnect();
  }, [isScrl]);

  return (
    <>
      <Nav actSec={actSec} secClick={clickFn} />
      <Home secRef={(el) => (secRefs.current["Intro"] = el)} isAct={actSec === "Intro"} />
      <Profile secRef={(el) => (secRefs.current["Mindset"] = el)} isAct={actSec === "Mindset"} />
      {/* <Tools secRef={(el) => (secRefs.current["Tools"] = el)} isAct={actSec === "Tools"} /> */}
      <SiteList secRef={(el) => (secRefs.current["Works"] = el)} isAct={actSec === "Works"} exitDir={exitDir} />
      <Resume secRef={(el) => (secRefs.current["Contact"] = el)} isAct={actSec === "Contact"} />
    </>
  );
}

export default App;
