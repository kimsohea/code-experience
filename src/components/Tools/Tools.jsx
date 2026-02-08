import BubbleMenu from "@/components/lib/BubbleMenu";

const Tools = ({ secRef, isAct }) => {
  const items = [
    {
      label: "home",
      href: "#",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "#",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "#",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "blog",
      href: "#",
      ariaLabel: "Blog",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "contact",
      href: "#",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  return (
    <section id="Tools" className={isAct ? "tool active" : "tool"} ref={secRef}>
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={items}
        isAct={isAct}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
    </section>
  );
};

export default Tools;
