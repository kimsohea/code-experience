const Nav = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: "Intro", label: "Intro" },
    { id: "About Me", label: "About Me" },
    { id: "Site Lists", label: "Site Lists" },
    { id: "My Project", label: "My Project" },
  ];

  return (
    <header className="header">
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
