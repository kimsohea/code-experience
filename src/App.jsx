import { useState, useRef, useEffect } from "react";

import useLunState from "@/hooks/useLunState";

import "@/assets/styles/App.scss";

import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import Profile from "@/components/Profile";
import SiteList from "@/components/SiteList";

function App() {
  const [activeSection, setActiveSection] = useState("Intro");
  const [isScrl, setIsScrl] = useState(false);
  const { getDate } = useLunState();

  const sectionRefs = useRef({});

  const handleClick = (sectionId) => {
    if (isScrl) return;
    const sectionRef = sectionRefs.current[sectionId];
    setActiveSection(sectionId);
    setIsScrl(true);
    if (sectionRef && sectionId !== activeSection) {
      sectionRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => setIsScrl(false), 600);
    } else setIsScrl(false);
  };

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    if (isScrl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) setActiveSection(entry.target.id);
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const sections = [{ id: "Intro" }, { id: "About_Me" }, { id: "Site_Lists" }, { id: "My_Project" }];
    sections.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrl, activeSection]);

  return (
    <>
      <Nav actSec={activeSection} secClick={handleClick} />
      <Home sectionRef={(el) => (sectionRefs.current["Intro"] = el)} isActive={activeSection === "Intro"} />
      <Profile sectionRef={(el) => (sectionRefs.current["About_Me"] = el)} isActive={activeSection === "About_Me"} />
      <SiteList
        sectionRef={(el) => (sectionRefs.current["Site_Lists"] = el)}
        isActive={activeSection === "Site_Lists"}
      />
    </>
  );
}

export default App;
