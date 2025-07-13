import { useState, useRef, useEffect, useMemo } from "react";

import useLunState from "@/hooks/useLunState";

import "@/assets/styles/App.scss";

import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import Profile from "@/components/Profile";
import SiteList from "@/components/SiteList";

function App() {
  const [activeSection, setActiveSection] = useState("Intro");
  const { getDate } = useLunState();

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

  // 클릭 핸들러도 수정
  const handleSectionClick = (sectionId) => {
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef && sectionId !== activeSection) {
      // 이미 활성화된 섹션이면 스킵
      sectionRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  // 스크롤 위치에 따라 활성 섹션 감지
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200;

          // 현재 활성 섹션만 체크하여 불필요한 계산 최소화
          let newActiveSection = activeSection;

          for (const section of sections) {
            const sectionRef = sectionRefs.current[section.id];
            if (sectionRef) {
              const offsetTop = sectionRef.offsetTop;
              const offsetBottom = offsetTop + sectionRef.offsetHeight;

              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                newActiveSection = section.id;
                break; // 찾으면 즉시 중단
              }
            }
          }

          // 실제로 변경되었을 때만 상태 업데이트
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // passive 옵션으로 성능 최적화
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  return (
    <>
      <Nav activeSection={activeSection} onSectionClick={handleSectionClick} />
      <Home sectionRef={(el) => (sectionRefs.current["Intro"] = el)} isActive={activeSection === "Intro"} />
      <Profile sectionRef={(el) => (sectionRefs.current["About Me"] = el)} isActive={activeSection === "About Me"} />
      <SiteList
        sectionRef={(el) => (sectionRefs.current["Site Lists"] = el)}
        isActive={activeSection === "Site Lists"}
      />
    </>
  );
}

export default App;
