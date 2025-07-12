import SplitText from "@/components/lib/SplitText";
import CurvedLoop from "@/components/lib/CurvedLoop";

const Home = ({ sectionRef, isActive }) => {
  return (
    <section className={isActive ? "home active" : "home"} ref={sectionRef}>
      <ul className="home_txt">
        <li>
          <SplitText
            text="日就月將"
            className="home_tit top"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
        </li>
        <li>
          <SplitText
            text="일취월장-하다"
            className="home_tit"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
          />
        </li>
      </ul>
      <CurvedLoop
        interactive={false}
        speed={0.5}
        curveAmount={0}
        className="deco_txt"
        marqueeText={"동사 1. 나날이 다달이 자라거나 발전하다."}
      />
      <CurvedLoop
        interactive={false}
        direction={"right"}
        speed={0.5}
        curveAmount={0}
        className="deco_txt btm"
        marqueeText={"동사 1. 나날이 다달이 자라거나 발전하다."}
      />
    </section>
  );
};

export default Home;
