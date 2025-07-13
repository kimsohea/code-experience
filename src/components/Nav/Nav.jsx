import useLunState from "@/hooks/useLunState";

import MoonShape from "@/components/MoonShape";

const Nav = ({ activeSection, onSectionClick }) => {
  const { idx } = useLunState();
  const sections = [
    { id: "Intro", label: "Intro" },
    { id: "About Me", label: "About Me" },
    { id: "Site Lists", label: "Site Lists" },
    { id: "My Project", label: "My Project" },
  ];

  return (
    <header className="header">
      <h1>日就月將</h1>
      <MoonShape className={`type0${idx}`} />
      <nav className="navi">
        <ul className="flex ">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`${activeSection === section.id ? "active" : ""}`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
