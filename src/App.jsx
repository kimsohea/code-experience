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

  const handleClick = (secId) => {
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
    if (actSec !== "Site_Lists") return;
    if (isAuto) return;
    const target = secRefs.current["Site_Lists"];
    if (!target) return;
    setIsAuto(true);
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    const timer = setTimeout(() => setIsAuto(false), 200); // smooth scroll 평균 시간 
    return () => clearTimeout(timer);
  }, [actSec]);

  useEffect(() => {
    if (isScrl) return;
    const siteListEl = secRefs.current["Site_Lists"];
    if (!siteListEl) return;
    const siteObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) setActSec("Site_Lists");
    }, { threshold: 0.1 });

    siteObserver.observe(siteListEl);
    return () => siteObserver.disconnect();
  }, [isScrl]);

  useEffect(() => {
    if (isScrl) return;

    const obsrv = new IntersectionObserver(
      (ent) => {
        ent.forEach((etr) => {
          const isItrs = etr.isIntersecting
          const itrsRat = etr.intersectionRatio;
          const tarId = etr.target.id;
          if (isItrs && itrsRat > 0.4) setActSec(tarId)
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );

    Object.values(secRefs.current).forEach((el) => {
      if (el) obsrv.observe(el);
    });

    return () => obsrv.disconnect();
  }, [isScrl]);

  return (
    <>
      <Nav actSec={actSec} secClick={handleClick} />
      <Home sectionRef={(el) => (secRefs.current["Intro"] = el)} isActive={actSec === "Intro"} />
      <Profile sectionRef={(el) => (secRefs.current["About_Me"] = el)} isActive={actSec === "About_Me"} />
      <SiteList
        sectionRef={(el) => (secRefs.current["Site_Lists"] = el)}
        isActive={actSec === "Site_Lists"}
      />
      <Resume sectionRef={(el) => (secRefs.current["Resume"] = el)} isActive={actSec === "Resume"} />
    </>
  );
}

export default App;
