import { useState, useRef, useEffect, useMemo } from "react";

import "@/assets/styles/App.scss";

import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import Profile from "@/components/Profile";

function App() {
  const [activeSection, setActiveSection] = useState("Intro");

  // 각 섹션의 ref를 저장
  const sectionRefs = useRef({});

  const sections = useMemo(
    () => [
      { id: "Intro", label: "Intro" },
      { id: "About Me", label: "About Me" },
      { id: "Site Lists", label: "Site Lists" },
      { id: "My Project", label: "My Project" },
    ],
    []
  );

  // 네비게이션 버튼 클릭 핸들러
  const handleSectionClick = (sectionId) => {
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef) {
      sectionRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  // 스크롤 위치에 따라 활성 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionRef = sectionRefs.current[section.id];
        if (sectionRef) {
          const offsetTop = sectionRef.offsetTop;
          const offsetBottom = offsetTop + sectionRef.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      <Nav activeSection={activeSection} onSectionClick={handleSectionClick} />
      <Home sectionRef={(el) => (sectionRefs.current["Intro"] = el)} isActive={activeSection === "Intro"} />
      <Profile sectionRef={(el) => (sectionRefs.current["About Me"] = el)} isActive={activeSection === "About Me"} />
    </>
  );
}

export default App;
