import popImg from "@/assets/img/pop_img.png";
import obozImg from "@/assets/img/oboz_img.png";
import marmotImg from "@/assets/img/marmot_img.png";
import wearImg from "@/assets/img/wearlounge_img.png";
import wlabImg from "@/assets/img/wlab_img.png";
import aykasaImg from "@/assets/img/aykasa_img.png";
import wetooImg from "@/assets/img/wetoo_img.png";
import aladinImg from "@/assets/img/aladin_mockup.png";

export const vueSite = [
  {
    imgSrc: popImg,
    title: "가방팝",
    skill: "Vue.js, REST API, vuex",
    myWork: "진행요소: 메인 페이지 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, 마이페이지 구축, shop by api 연동",
    desc: "가방, 명품, 신발, 패션, 우먼, 아웃도어, 여행, 모바일테크, 캠핑 등 스타일의 모든 것을 판매하고 있는 사이트입니다. /n 메인페이지 내의 요소들을 Vue2 에서 Vue3로 업그레이드하는 작업을 진행하였으며, 기존 코드에서 javascript animate 함수로 구현했던 단락을 setInterval 과 css 애니메이션으로 내부 코드를 바꾸기도 했었고 이전의 퍼플리셔가 구현해 둔 jquery를 최대한 제거해서 javascript로 동작할 수 있도록 리뉴얼 작업을 진행했었습니다. /n Vue3로 업그레이드 중에 상태 관리 라이브러리 vuex를 mapGetter이 아닌 mapState로 변경하는 작업도 같이 진행했었습니다.",
    pcUrl: "https://www.gabangpop.co.kr/",
    moUrl: "https://m.gabangpop.co.kr/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
  },
  {
    imgSrc: obozImg,
    title: "오보즈 코리아",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱 및 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, shop by api 연동",
    desc: "하이킹, 트레일 러닝 전문 브랜드 오보즈 풋웨어 코리아 공식 온라인 스토어 True to the trail 사이트입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 운영을 지속하는 중에도 추가 단락이 생기면 추가 단락을 만들어서 넣기도 하는 보수 작업도 같이 진행했었습니다. /n 기존 운영하던 사이트들에서 메인페이지와 일부 페이지를 제외한 상품 전시 페이지라던지 공지사항같은 페이지 내 아이콘 요소들을 빠르게 렌더링할 수 있도록 figma로 구현해서 사이트 구축시 더 시간이 덜 소요되도록 작업을 했었습니다.",
    pcUrl: "https://www.obozfootwear.co.kr/",
    moUrl: "https://m.obozfootwear.co.kr/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
  },
  {
    imgSrc: marmotImg,
    title: "마모트 코리아",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱 및 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, shop by api 연동",
    desc: "고어텍스 근본 브랜드 마모트코리아, 아웃도어 액티비티에 최적화된 의류, 가방, 모자 등 자유롭고 독창적이며 비일상을 체험할 수 있는 스타일을 제공하는 사이트입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 운영을 지속하는 중에도 추가 단락이 생기면 추가 단락을 만들어서 넣기도 하는 보수 작업도 같이 진행했었습니다. /n 사이트 내의 Find A Store 페이지 리뉴얼을 하면서 shop by api를 사용했습니다.",
    pcUrl: "https://www.marmotkorea.kr/",
    moUrl: "https://m.marmotkorea.kr/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
  },
  {
    imgSrc: wearImg,
    title: "웨어라운지",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱, shop by api 연동",
    desc: "브랜드 큐레이션 편집샵 웨어라운지 사이트 입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. pc 사이트가 가로값의 유동성을위해 css 작업 중 %로 계산해서 구현한 사이트입니다.",
    pcUrl: "https://wearlounge.com/",
    moUrl: "https://m.wearlounge.com/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
  },
  {
    imgSrc: wlabImg,
    title: "W-LAB",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱, shop by api 연동, 마이페이지 구현",
    desc: "No1. 고커버/고발색 페이스메이크업과 메이크업핏을 살리는 하이브리드 스킨케어 전문 브랜드 사이트 입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 이 사이트 내의 회원등급페이지 및 브랜드 스토리 페이지를 구현 했습니다.",
    pcUrl: "https://wlab.co.kr/",
    moUrl: "https://m.wlab.co.kr/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
  },
];

export const reactSite = [
  {
    imgSrc: aykasaImg,
    title: "아이카사 코리아",
    skill: "React, TypeScript, Gulp.js",
    myWork: "진행요소: Gulp.js를 이용한 사이트 퍼블리싱 및 일부 컴포넌트 수정",
    desc: "아이카사 본사와 국내 독점 수입·판매 (Exculsive)를 맺는 공식 사이트 입니다. /n Gulp.js 를 이용해 메인페이지 요소들의 퍼블리싱을 진행했으며 React.js로 배포된 후 일부 컴포넌트들의 요소 수정을 진행했습니다.",
    pcUrl: "https://aykasa-korea.co.kr/",
    pcTxt: "사이트 바로가기",
  },
  {
    imgSrc: wetooImg,
    title: "NHN Wetoo",
    skill: "React, TypeScript, Gulp.js",
    myWork: "진행요소: Gulp.js를 이용한 사이트 퍼블리싱 및 Component 수정작업",
    desc: "NHN wetoo는 모든 고객들이 감각적인 개성과 각기 다른 취향을 마음껏 연출하고 표현할 수 있도록 맞춤형 라이프스타일을 공유하고 제안하는 E-Commerce 전문기업 공식 사이트 입니다. /n Gulp.js 를 이용해 메인페이지 요소들의 퍼블리싱을 진행했으며 React.js로 배포된 후 일부 컴포넌트의 수정작업을 진행했습니다.",
    pcUrl: "https://nhnwetoo.com/",
    pcTxt: "사이트 바로가기",
  },
  {
    imgSrc: aladinImg,
    title: "알라딘 리뉴얼 페이지(개인)",
    skill: "React, TypeScript",
    myWork: "진행요소: React+TypeScript로 구현한 알라딘 반응형 사이트",
    desc: "기존 알라딘의 답답한 프레임에서 벗어나 트렌드에 맞춰 넓찍하고 단순한 모양으로 리디자인했습니다. 않은 기존 메뉴단을 병합,축소,그룹화 하면서 인터페이스를 한눈에 알아볼 수 있도록 깔끔한 변경했으며 React와 TypeScript를 이용해서 구현했으며 API를 이용해 제품이미지, 서적명과 같은 수신합니다. /n 메인페이지와 서적, 굿즈 등 서브페이지도 같이 구현 했으며 제품들마다의 상세페이지도 구현했으며 대중적인 웹 쇼핑몰에서 볼 수 있는 버튼형 리스트 및 서브메뉴 구현을 통해 심플한 모양으로 재구성했습니다",
    pcUrl: "https://kimsohea.github.io/react-deploy/",
    pcTxt: "사이트 바로가기",
  },
];

export const javascriptSite = [];
