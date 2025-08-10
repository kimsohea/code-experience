import useLunState from "@/hooks/useLunState";

import MoonShape from "@/components/MoonShape";

const Nav = ({ actSec, secClick }) => {
  const { idx } = useLunState();
  const sections = [
    { id: "Intro", label: "Intro" },
    { id: "About_Me", label: "About Me" },
    { id: "Site_Lists", label: "Site Lists" },
    { id: "My_Project", label: "My Project" },
  ];

  return (
    <header className="header">
      <h1>日就月將</h1>
      <MoonShape className={`type0${idx}`} />
      <nav className="navi">
        <ul className="nav_ul">
          {sections.map((sec) => (
            <li key={sec.id}>
              <button onClick={() => secClick(sec.id)} className={`${actSec === sec.id ? "active" : ""}`}>
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
