import popImg from "@/assets/img/pop_img.png";
import popImgMo from "@/assets/img/pop.svg";
import obozImg from "@/assets/img/oboz_img.png";
import obozImgMo from "@/assets/img/oboz.svg";
import marmotImg from "@/assets/img/marmot_img.png";
import marmotImgMo from "@/assets/img/marmot.svg";
import wearImg from "@/assets/img/wearlounge_img.png";
import wearImgMo from "@/assets/img/wearlounge.svg";
import wlabImg from "@/assets/img/wlab_img.png";
import wlabImgMo from "@/assets/img/wlab.svg";
import aykasaImg from "@/assets/img/aykasa_img.png";
import aykasaImgMo from "@/assets/img/aykasa.svg";
import wetooImg from "@/assets/img/wetoo_img.png";
import wetooImgMo from "@/assets/img/wetoo.svg";
import aladinImg from "@/assets/img/aladin_mockup.png";
import aladinImgMo from "@/assets/img/aladin.svg";
import class01 from "@/assets/img/class01.png";
import class02 from "@/assets/img/class02.png";
import class04 from "@/assets/img/class04.png";
import class05 from "@/assets/img/class05.png";
import class06 from "@/assets/img/class06.png";
import class07 from "@/assets/img/class07.png";
import class08 from "@/assets/img/class08.png";
import class09 from "@/assets/img/class09.png";
import class10 from "@/assets/img/class10.png";
import class11 from "@/assets/img/class11.png";
import mono from "@/assets/img/monobrain.svg";

export const vueSite = [
  {
    type: "vue",
    id: "pop",
    imgSrc: popImg,
    imgSrcMo: popImgMo,
    title: "가방팝",
    skill: "Vue.js, REST API, vuex",
    myWork: "진행요소: 메인 페이지 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, 마이페이지 구축, shop by api 연동",
    desc: "가방, 명품, 신발, 패션, 우먼, 아웃도어, 여행, 모바일테크, 캠핑 등 스타일의 모든 것을 판매하고 있는 사이트입니다. /n 메인페이지 내의 요소들을 Vue2 에서 Vue3로 업그레이드하는 작업을 진행하였으며, 기존 코드에서 javascript animate 함수로 구현했던 단락을 setInterval 과 css 애니메이션으로 내부 코드를 바꾸기도 했었고 이전의 퍼플리셔가 구현해 둔 jquery를 최대한 제거해서 javascript로 동작할 수 있도록 리뉴얼 작업을 진행했었습니다. /n Vue3로 업그레이드 중에 상태 관리 라이브러리 변경 작업도 동시에 진행했었습니다.",
    pcUrl: "https://www.gabangpop.co.kr/",
    moUrl: "https://m.gabangpop.co.kr/",
    pcTxt: "PC 사이트",
    moTxt: "모바일 사이트",
    height: 450,
  },
  {
    type: "vue",
    id: "oboz",
    imgSrc: obozImg,
    imgSrcMo: obozImgMo,
    title: "오보즈 코리아",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱 및 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, shop by api 연동",
    desc: "하이킹, 트레일 러닝 전문 브랜드 오보즈 풋웨어 코리아 공식 온라인 스토어 True to the trail 사이트입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 운영을 지속하는 중에도 추가 단락이 생기면 추가 단락을 만들어서 넣기도 하는 보수 작업도 같이 진행했었습니다. /n 기존 운영하던 사이트들에서 메인페이지와 일부 페이지를 제외한 상품 전시 페이지라던지 공지사항같은 페이지 내 아이콘 요소들을 빠르게 렌더링할 수 있도록 figma로 구현해서 사이트 구축시 더 시간이 덜 소요되도록 작업을 했었습니다.",
    pcUrl: "https://www.obozfootwear.co.kr/",
    moUrl: "https://m.obozfootwear.co.kr/",
    pcTxt: "PC 사이트",
    moTxt: "모바일 사이트",
    height: 450,
  },
  {
    type: "vue",
    id: "marmot",
    imgSrc: marmotImg,
    imgSrcMo: marmotImgMo,
    title: "마모트 코리아",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱 및 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, shop by api 연동",
    desc: "고어텍스 근본 브랜드 마모트코리아, 아웃도어 액티비티에 최적화된 의류, 가방, 모자 등 자유롭고 독창적이며 비일상을 체험할 수 있는 스타일을 제공하는 사이트입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 운영을 지속하는 중에도 추가 단락이 생기면 추가 단락을 만들어서 넣기도 하는 보수 작업도 같이 진행했었습니다. /n 사이트 내의 Find A Store 페이지 리뉴얼을 하면서 shop by api를 사용했습니다.",
    pcUrl: "https://www.marmotkorea.kr/",
    moUrl: "https://m.marmotkorea.kr/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
    height: 450,
  },
  {
    type: "vue",
    id: "wear",
    imgSrc: wearImg,
    imgSrcMo: wearImgMo,
    title: "웨어라운지",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱, shop by api 연동",
    desc: "브랜드 큐레이션 편집샵 웨어라운지 사이트 입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. pc 사이트가 가로값의 유동성을위해 css 작업 중 %로 계산해서 구현한 사이트입니다.",
    pcUrl: "https://wearlounge.com/",
    moUrl: "https://m.wearlounge.com/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
    height: 450,
  },
  {
    type: "vue",
    id: "wlab",
    imgSrc: wlabImg,
    imgSrcMo: wlabImgMo,
    title: "W-LAB",
    skill: "Vue.js, REST API, vuex, Figma",
    myWork: "진행요소: 메인 페이지 퍼블리싱, shop by api 연동, 마이페이지 구현",
    desc: "No1. 고커버/고발색 페이스메이크업과 메이크업핏을 살리는 하이브리드 스킨케어 전문 브랜드 사이트 입니다. /n 메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 이 사이트 내의 회원등급페이지 및 브랜드 스토리 페이지를 구현 했습니다.",
    pcUrl: "https://wlab.co.kr/",
    moUrl: "https://m.wlab.co.kr/",
    pcTxt: "PC 사이트 바로가기",
    moTxt: "모바일 사이트 바로가기",
    height: 450,
  },
];

export const reactSite = [
  {
    type: "react",
    id: "aykasa",
    imgSrc: aykasaImg,
    imgSrcMo: aykasaImgMo,
    title: "아이카사 코리아",
    skill: "React, TypeScript, Gulp.js",
    myWork: "진행요소: Gulp.js를 이용한 사이트 퍼블리싱 및 일부 컴포넌트 수정",
    desc: "아이카사 본사와 국내 독점 수입·판매 (Exculsive)를 맺는 공식 사이트 입니다. /n Gulp.js 를 이용해 메인페이지 요소들의 퍼블리싱을 진행했으며 React.js로 배포된 후 일부 컴포넌트들의 요소 수정을 진행했습니다.",
    pcUrl: "https://aykasa-korea.co.kr/",
    pcTxt: "사이트 바로가기",
    height: 450,
  },
  {
    type: "react",
    id: "wetoo",
    imgSrc: wetooImg,
    imgSrcMo: wetooImgMo,
    title: "NHN Wetoo",
    skill: "React, TypeScript, Gulp.js",
    myWork: "진행요소: Gulp.js를 이용한 사이트 퍼블리싱 및 Component 수정작업",
    desc: "NHN wetoo는 모든 고객들이 감각적인 개성과 각기 다른 취향을 마음껏 연출하고 표현할 수 있도록 맞춤형 라이프스타일을 공유하고 제안하는 E-Commerce 전문기업 공식 사이트 입니다. /n Gulp.js 를 이용해 메인페이지 요소들의 퍼블리싱을 진행했으며 React.js로 배포된 후 일부 컴포넌트의 수정작업을 진행했습니다.",
    pcUrl: "https://nhnwetoo.com/",
    pcTxt: "사이트 바로가기",
    height: 450,
  },
  {
    type: "react",
    id: "aladin",
    imgSrc: aladinImg,
    imgSrcMo: aladinImgMo,
    title: "알라딘 리뉴얼 페이지(개인)",
    skill: "React, TypeScript",
    myWork: "진행요소: React+TypeScript로 구현한 알라딘 반응형 사이트",
    desc: "기존 알라딘의 답답한 프레임에서 벗어나 트렌드에 맞춰 넓찍하고 단순한 모양으로 리디자인했습니다. 않은 기존 메뉴단을 병합,축소,그룹화 하면서 인터페이스를 한눈에 알아볼 수 있도록 깔끔한 변경했으며 React와 TypeScript를 이용해서 구현했으며 API를 이용해 제품이미지, 서적명과 같은 수신합니다. /n 메인페이지와 서적, 굿즈 등 서브페이지도 같이 구현 했으며 제품들마다의 상세페이지도 구현했으며 대중적인 웹 쇼핑몰에서 볼 수 있는 버튼형 리스트 및 서브메뉴 구현을 통해 심플한 모양으로 재구성했습니다",
    pcUrl: "https://kimsohea.github.io/react-deploy/",
    pcTxt: "사이트 바로가기",
    height: 450,
  },
];

export const javascriptSite = [
  {
    type: "javascript",
    imgSrc: class01,
    imgSrcMo: mono,
    title: "초등학생 영어 학습 게임(듣기형)",
    skill: "HTML, CSS, JavaScript",
    myWork: "진행요소: JavaScript로 구현한 초등학생 영어 학습 게임 (듣기형)",
    desc: " 초등학생 영어 학습을 돕기 위해 만든 작업물입니다. 정답을 맞출 때와 틀렸을때의 효과를 구현했습니다. 듣기 이전 정오답 채점 유무와 gsap을 이용해 캐릭터들의 움직임을 적용했습니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_01.html",
    pcTxt: "사이트 바로가기",
    height: 365,
  },
  {
    type: "javascript",
    imgSrc: class02,
    imgSrcMo: mono,
    title: "초등학생 영어 학습 게임(듣기형)",
    skill: "HTML, CSS, JavaScript",
    myWork: "진행요소: JavaScript로 구현한 초등학생 영어 학습 게임 (듣기형)",
    desc: " 초등학생 영어 학습을 돕기 위해 만든 작업물입니다. 정답을 맞출 때와 틀렸을때의 효과를 구현했습니다. 듣기 이전 정오답 채점 유무와 gsap을 이용해 캐릭터들의 움직임을 적용했습니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_02.html",
    pcTxt: "사이트 바로가기",
    height: 365,
  },
  {
    type: "javascript",
    imgSrc: class04,
    imgSrcMo: mono,
    title: "초등학생 영어 학습 게임(쓰기형)",
    skill: "HTML, CSS, JavaScript",
    myWork: "진행요소: JavaScript로 구현한 초등학생 영어 학습 게임 (쓰기형)",
    desc: " 초등학생 영어 학습을 돕기 위해 만든 작업물입니다. 정답을 맞출 때와 틀렸을때의 효과를 구현했습니다. 드래그앤드롭을 통해 원하는 위치에 문자를 재배열하고 그렇게 재배열한 문자의 정오답 유무를 채점합니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_04.html",
    pcTxt: "사이트 바로가기",
    height: 365,
  },
  {
    type: "javascript",
    imgSrc: class05,
    imgSrcMo: mono,
    title: "초등학생 영어 학습 게임(쓰기형)",
    skill: "HTML, CSS, JavaScript",
    myWork: "진행요소: JavaScript로 구현한 초등학생 영어 학습 게임 (쓰기형)",
    desc: " 초등학생 영어 학습을 돕기 위해 만든 작업물입니다. 정답을 맞출 때와 틀렸을때의 효과를 구현했습니다. 빈칸의 문자를 채우고 채워진 값의 정오답에 따라 다른 인터랙션을 구현했습니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_05.html",
    pcTxt: "사이트 바로가기",
    height: 365,
  },
  {
    type: "javascript",
    imgSrc: class06,
    imgSrcMo: mono,
    title: "초등학생 영어 학습 게임(쓰기형)",
    skill: "HTML, CSS, JavaScript",
    myWork: "진행요소: JavaScript로 구현한 초등학생 영어 학습 게임 (쓰기형)",
    desc: " 초등학생 영어 학습을 돕기 위해 만든 작업물입니다. 정답을 맞출 때와 틀렸을때의 효과를 구현했습니다. 채워진 값의 정오답에 따라 다른 인터랙션을 구현했습니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_06.html",
    pcTxt: "사이트 바로가기",
    height: 365,
  },
];

export const jquerySite = [
  {
    type: "jquery",
    imgSrc: class07,
    imgSrcMo: mono,
    title: "중학생 정보 학습 게임",
    skill: "HTML, CSS, JavaScript, jquery",
    myWork: "진행요소: JavaScript와 jquery로 구현한 중학생 정보 학습 게임",
    desc: "중학생 정보 학습을 돕기 위해 만든 작업물입니다. 캐릭터 순서대로 주제에 대한 이야기를 띄우며 해당 주제에 맞지 않는 캐릭터를 선택 후 주제를 맞추면 다음으로 진행되는 방식을 구현했습니다. 1번 틀리면 기회를 주고 2번 틀리면 오답 팝업을 띄워 다음 순서로 넘어갈 수 있도록 구현했습니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_11.html",
    pcTxt: "사이트 바로가기",
    height: 397,
  },
  {
    type: "jquery",
    imgSrc: class08,
    imgSrcMo: mono,
    title: "중학생 정보 학습 게임",
    skill: "HTML, CSS, JavaScript, jquery",
    myWork: "진행요소: JavaScript와 jquery로 구현한 중학생 정보 학습 게임",
    desc: "중학생 정보 학습을 돕기 위해 만든 작업물입니다. 빈칸의 자음에 맞는 단어를 쓰고 그 단어를 맞추면 다음 문제로 넘어갑니다. 한번씩 틀릴때마다 보기의 글자가 채워집니다. 글자수만큼의 찬스가 있습니다",
    pcUrl: "https://kimsohea.github.io/monobrain/template_12.html",
    pcTxt: "사이트 바로가기",
    height: 397,
  },
  {
    type: "jquery",
    imgSrc: class09,
    imgSrcMo: mono,
    title: "중학생 정보 학습 게임",
    skill: "HTML, CSS, JavaScript, jquery",
    myWork: "진행요소: JavaScript와 jquery로 구현한 중학생 정보 학습 게임",
    desc: "중학생 정보 학습을 돕기 위해 만든 작업물입니다. 십자말풀이 게임으로 좌측의 빈칸을 클릭하면 우측에 해당 단어의 힌트가 뜹니다. 하단의 키보드를 클릭해서 맞는 단어를 맞추는 게임으로 만약 실수로 단어를 눌렀을 시 풀고있던 칸을 클릭해서 빈칸으로 다시 비울수도 있습니다. 맞추면 겹쳐진 빈칸 글자가 회색으로 띄워집니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_13.html",
    pcTxt: "사이트 바로가기",
    height: 397,
  },
  {
    type: "jquery",
    imgSrc: class10,
    imgSrcMo: mono,
    title: "중학생 정보 학습 게임",
    skill: "HTML, CSS, JavaScript, jquery",
    myWork: "진행요소: JavaScript와 jquery로 구현한 중학생 정보 학습 게임",
    desc: "중학생 정보 학습을 돕기 위해 만든 작업물입니다. 드래그앤드롭으로 구현된 게임으로 빈칸에 맞는 단어를 채우는 게임입니다. 한번 틀렸을땐 회색 초성으로 힌트를 주며 두번틀렸을땐 다음으로 넘어가는 팝업을 띄웁니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_14.html",
    pcTxt: "사이트 바로가기",
    height: 397,
  },
  {
    type: "jquery",
    imgSrc: class11,
    imgSrcMo: mono,
    title: "중학생 정보 학습 게임",
    skill: "HTML, CSS, JavaScript, jquery",
    myWork: "진행요소: JavaScript와 jquery로 구현한 중학생 정보 학습 게임",
    desc: "중학생 정보 학습을 돕기 위해 만든 작업물입니다. 지도상에 있는 문제를 풀어나가는 게임으로 문제의 점수를 누적해 몇개를 맞추었는지 확인하는 기능을 넣었습니다. 문제를 틀릴 때와 맞출 때의 인터랙션을 구현했습니다.",
    pcUrl: "https://kimsohea.github.io/monobrain/template_15.html",
    pcTxt: "사이트 바로가기",
    height: 397,
  },
];
