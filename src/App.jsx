import { useState, useRef, useEffect } from "react";

import useLunState from "@/hooks/useLunState";

import "@/assets/styles/App.scss";

import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import Profile from "@/components/Profile";
import SiteList from "@/components/SiteList";

function App() {
  const [activeSection, setActiveSection] = useState("Intro");
  const { getDate } = useLunState();

  const sectionRefs = useRef({});

  const handleSectionClick = (sectionId) => {
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef && sectionId !== activeSection) {
      sectionRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0, 0.2, 1],
        rootMargin: "-20% 0px -20% 0px", // 상하 20% 마진
      }
    );

    const sections = [{ id: "Intro" }, { id: "About_Me" }, { id: "Site_Lists" }, { id: "My_Project" }];
    sections.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <>
      <Nav activeSection={activeSection} onSectionClick={handleSectionClick} />
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
