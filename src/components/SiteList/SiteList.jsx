import React, { useState, useMemo, useEffect } from "react";

import { vueSite, reactSite, javascriptSite, jquerySite } from "@/constants/sitelist";

import Masonry from "@/components/lib/Masonry";

const VueIco = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Vue.js</title>
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
  </svg>
);

const ReactIco = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>React</title>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
);

const JSIco = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>JavaScript</title>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

const JQIco = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>jQuery</title>
    <path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" />
  </svg>
);

const SiteList = ({ secRef, isAct, exitDir }) => {
  const [activeThumb, setActiveThumb] = useState("vue");
  const [siteIdx, setSiteIdx] = useState(0);
  const [infoFlg, setInfoFlg] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  const siteInfo = useMemo(() => {
    const siteList = { vueSite, reactSite, javascriptSite, jquerySite };
    const site = siteList[`${activeThumb}Site`];
    return infoFlg ? site[siteIdx] : {};
  }, [activeThumb, siteIdx, infoFlg]);

  const typeList = [
    { tit: "vue", comp: <VueIco /> },
    { tit: "react", comp: <ReactIco /> },
    { tit: "javascript", comp: <JSIco /> },
    { tit: "jquery", comp: <JQIco /> },
  ];

  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 420,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 540,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
  ];

  const handleSite = (idx) => {
    setSiteIdx(idx);
    setInfoFlg(true);
  };

  useEffect(() => {
    const handleResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="Works" className={isAct ? "site_list active" : "site_list"} ref={secRef}>
      {/* <h3>참여 프로젝트 (단체 + 개인)</h3> */}
      <ul className="site_flt">
        {typeList.map(({ tit, comp }, idx) => (
          <li key={`site_${idx}`} className={activeThumb === tit ? `active ${tit}` : tit}>
            <button onClick={() => setActiveThumb(tit)}>{comp}</button>
          </li>
        ))}
      </ul>
      <article className="site_list_wrap">
        <Masonry
          items={items}
          isAct={isAct}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          aniFrom="bottom"
          exitDir={exitDir}
          hoverSFlg={true}
          hoverScale={0.95}
          focusBlr={true}
          hoverClr={true}
        />
        {/* <ul className="site_type">
          <li className={activeThumb === "vue" ? "active" : ""}>
            <button className="vue" onClick={() => setActiveThumb("vue")}>
              <VueIco />
            </button>
            <span>Vue.js</span>
          </li>
          <li className={activeThumb === "react" ? "active" : ""}>
            <button className="react" onClick={() => setActiveThumb("react")}>
              <ReactIco />
            </button>
            <span>React.js</span>
          </li>
          <li className={activeThumb === "javascript" ? "active" : ""}>
            <button className="javascript" onClick={() => setActiveThumb("javascript")}>
              <JSIco />
            </button>
            <span>{winWidth > 400 ? "JavaScript" : "JS"}</span>
          </li>
          <li className={activeThumb === "jquery" ? "active" : ""}>
            <button className="jquery" onClick={() => setActiveThumb("jquery")}>
              <JQIco />
            </button>
            <span>jquery</span>
          </li>
        </ul>
        <ul className={activeThumb === "vue" ? "site_thumb vue active" : "site_thumb vue"}>
          {vueSite?.map((item, idx) => (
            <li key={`vue_site_${idx}`}>
              <button onClick={() => handleSite(idx)}>
                <img src={item.imgSrc} alt={`${item.title} 사이트 이미지`} />
                <img src={item.imgSrcMo} alt={`${item.title} 사이트 이미지`} className="img_mo" />
                <p>{item.title}</p>
              </button>
            </li>
          ))}
        </ul>
        <ul className={activeThumb === "react" ? "site_thumb react active" : "site_thumb react"}>
          {reactSite?.map((item, idx) => (
            <li key={`react_site_${idx}`}>
              <button onClick={() => handleSite(idx)}>
                <img src={item.imgSrc} alt={`${item.title} 사이트 이미지`} />
                <img src={item.imgSrcMo} alt={`${item.title} 사이트 이미지`} className="img_mo" />
                <p>{item.title}</p>
              </button>
            </li>
          ))}
        </ul>
        <ul className={activeThumb === "javascript" ? "site_thumb javascript active" : "site_thumb javascript"}>
          {javascriptSite?.map((item, idx) => (
            <li key={`javascript_site_${idx}`}>
              <button onClick={() => handleSite(idx)}>
                <img src={item.imgSrc} alt={`${item.title} 사이트 이미지`} />
                <img src={item.imgSrcMo} alt={`${item.title} 사이트 이미지`} className="img_mo" />
                <p>{item.title}</p>
              </button>
            </li>
          ))}
        </ul>
        <ul className={activeThumb === "jquery" ? "site_thumb jquery active" : "site_thumb jquery"}>
          {jquerySite?.map((item, idx) => (
            <li key={`jquery_site_${idx}`}>
              <button onClick={() => handleSite(idx)}>
                <img src={item.imgSrc} alt={`${item.title} 사이트 이미지`} />
                <img src={item.imgSrcMo} alt={`${item.title} 사이트 이미지`} className="img_mo" />
                <p>{item.title}</p>
              </button>
            </li>
          ))}
        </ul>
        <div className={infoFlg ? "site_pop open" : "site_pop"}>
          <button className="btn_close" onClick={() => setInfoFlg(false)}>
            팝업 닫기
          </button>
          <figure className="info_img">
            <img src={siteInfo.imgSrc} alt={siteInfo.title} />
          </figure>
          <div className="text_box">
            <h4 className="info_tit">{siteInfo.title}</h4>
            <strong className="skill">사용 툴: {siteInfo.skill}</strong>
            <p className="desc">
              {siteInfo.desc?.split(/\r\n|\r|\n|\/n/).map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < siteInfo.desc.split(/\r\n|\r|\n|\/n/).length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <a href={siteInfo.pcUrl}>{siteInfo.pcTxt}</a>
            {siteInfo.moUrl && siteInfo.moTxt && <a href={siteInfo.moUrl}>{siteInfo.moTxt}</a>}
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default SiteList;
