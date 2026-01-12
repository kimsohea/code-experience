import SplitText from "@/components/lib/SplitText";
import TopText from "./TopText";
import HomeBnr from "./HomeBnr";

const Home = ({ secRef, isAct }) => {
  return (
    <section id="Intro" className={isAct ? "home active" : "home"} ref={secRef}>
      {/* <TopText />
      <HomeBnr />
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
      </ul> */}
    </section>
  );
};

export default Home;
