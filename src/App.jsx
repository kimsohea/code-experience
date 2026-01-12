import { useState, useRef, useEffect } from "react";

import useLunState from "@/hooks/useLunState";

import "@/assets/styles/App.scss";

import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import Profile from "@/components/Profile";
import SiteList from "@/components/SiteList";
import Resume from "@/components/Resume";

function App() {
  const [actSec, setActSec] = useState("Intro");
  const [isScrl, setIsScrl] = useState(false);
  const [isAuto, setIsAuto] = useState(false);
  const { getDate } = useLunState();

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

  // 프로젝트 리스트 스크롤 처리
  useEffect(() => {
    if (actSec !== "Works") return;
    if (isAuto) return;
    const target = secRefs.current["Works"];
    if (!target) return;
    setIsAuto(true);
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    const timer = setTimeout(() => setIsAuto(false), 200); // smooth scroll 평균 시간
    return () => clearTimeout(timer);
  }, [actSec]);

  // 프로젝트 리스트 스크롤 추적
  useEffect(() => {
    if (isScrl) return;
    const siteLEl = secRefs.current["Works"];
    if (!siteLEl) return;
    const siteObsr = new IntersectionObserver(
      ([etr]) => {
        const isItrs = etr.isIntersecting;
        const itrsRat = etr.intersectionRatio;
        if (isItrs && itrsRat > 0.1) setActSec("Works");
      },
      { threshold: 0.1 },
    );

    siteObsr.observe(siteLEl);
    return () => siteObsr.disconnect();
  }, [isScrl]);

  // 전체 단락 스크롤 추적
  useEffect(() => {
    if (isScrl) return;

    const obsrv = new IntersectionObserver(
      (ent) => {
        ent.forEach((etr) => {
          const isItrs = etr.isIntersecting;
          const itrsRat = etr.intersectionRatio;
          if (isItrs && itrsRat > 0.4) setActSec(etr.target.id);
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
      <SiteList secRef={(el) => (secRefs.current["Works"] = el)} isAct={actSec === "Works"} />
      <Resume secRef={(el) => (secRefs.current["Contact"] = el)} isAct={actSec === "Contact"} />
    </>
  );
}

export default App;
