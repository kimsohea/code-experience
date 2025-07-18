import useLunState from "@/hooks/useLunState";

import MoonShape from "@/components/MoonShape";

const HomeBnr = () => {
  const { name, enName, desc, idx } = useLunState();

  return (
    <div className="moon_info">
      <MoonShape className={`type0${idx}`} />
      <strong className="moon_name">{name}</strong>
      <strong className="moon_name en">{enName}</strong>
      <span className="moon_desc">{desc}</span>
    </div>
  );
};

export default HomeBnr;
