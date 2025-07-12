import ScrollReveal from "@/components/lib/ScrollReveal";

const Profile = ({ sectionRef, isActive }) => {
  const textArr = [
    "시경(詩經) 주송(周頌) 경지(敬之)에서 유래한 사자성어로",
    "‘날마다 달마다 성장한다’는 뜻을 가집니다,",
    "학문이 갈수록 빠르게 발전함을 이른다는 이야기로 해석되기도 합니다.",
    "이처럼 현재 만들어진 프레임워크, 라이브러리, 툴을 비롯한",
    "기술 스택들과 앞으로 새롭게 생길 기술들을",
    "나날이 습득해 나가자는 마음가짐으로 성장하는 프론트엔더입니다.",
  ];

  const text = textArr.join("\n");

  return (
    <section className={isActive ? "profile active" : "profile"} ref={sectionRef}>
      <figure className="ani_icon">
        <figure className="sun"></figure>
      </figure>
      <ul className="char">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="82" height="110" viewBox="0 0 82 110">
            <path d="M2 1V110" />
            <path d="M2 2H80L79.2571 109" />
            <path d="M2 50H79" />
            <path d="M2 100H79" />
          </svg>
          <p>날 일</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="121" height="123" viewBox="0 0 121 123">
            <path d="M33 1V23" />
            <path d="M2 23H63" />
            <path d="M11 38L11 70" />
            <path d="M11 39H55V70" />
            <path d="M11 69H55" />
            <path d="M33 69C33 83 33 110.4 33 114C33 120 29.96 120 27.68 120C27.072 120 18.8133 120 14 120" />
            <path d="M15 81C13.5556 88.2973 6.33333 103.622 2 108" />
            <path d="M48 80C50.619 84 56.2857 93.8 58 101" />
            <path d="M63 41H119" />
            <path d="M87.8181 1C90.0405 85.2236 71.5203 103.857 53 121" />
            <path d="M90 51C90 69.3011 90 106.942 90 111.097C90 116.29 92.9744 120 95.9487 120C98.9231 120 108.59 120 112.308 120C116.026 120 119 117.032 119 113.323C119 110.355 119 101.204 119 96.2581" />
            <path d="M97 8C101.813 11.9111 112.352 21.7867 116 30" />
          </svg>
          <p>나아갈 취</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="113" viewBox="0 0 102 113">
            <path d="M25.7672 0.5C25.7672 42.1216 30.1379 84.9865 1 111" />
            <path d="M26 2H100C100 34.3516 100 99.9507 100 103.534C100 108.014 97.0101 111 93.2727 111C90.2828 111 75.5825 111 68.6061 111" />
            <path d="M27 34H100" />
            <path d="M24 68H100" />
          </svg>
          <p>달 월</p>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="122" height="120" viewBox="0 0 122 120">
            <path d="M10 6V41H36" />
            <path d="M36 0V120" />
            <path d="M2 70H36" />
            <path d="M12 70C12 81.1364 11.2308 104.894 2 119" />
            <path d="M85 1C78.2909 9.31707 60.6982 27.161 44 32" />
            <path d="M76 11H115C109 26.6716 86.2 52.0448 46 61" />
            <path d="M69 18C75.6857 21.6538 90.84 31.7385 95 37" />
            <path d="M54 28C59.5 32.25 72 42.4 78 49" />
            <path d="M43 69H122" />
            <path d="M102 48C102 67.1135 102 107.872 102 112.043C102 116.213 100.452 118 95.8065 118C92.0903 118 82.3871 118 78 118" />
            <path d="M57 81C61 84.9506 70.2 94.4815 75 101" />
          </svg>
          <p>장수 장</p>
        </li>
      </ul>
      <ScrollReveal>{text}</ScrollReveal>
    </section>
  );
};

export default Profile;
