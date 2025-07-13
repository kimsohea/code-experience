import { create } from "zustand";
import axios from "axios";

const useLunState = create((set, get) => ({
  // 상태값들
  date: 0,
  name: "",
  enName: "",
  desc: "",
  idx: -1,
  moonCycle: [
    {
      range: [0, 2],
      shapeName: "월삭(합삭)",
      EnName: "New Moon",
      desc: "매달 1일에 뜨며 달이 태양과 지구 사이에 위치해 전체가 어두워져 볼 수 없는 모양입니다",
    },
    {
      range: [2, 8],
      shapeName: "초승달",
      EnName: "Waxing Crecent",
      desc: "매달 3~7일에 뜨며 달이 태양과 지구 사이에 위치해 전체가 어둡게 보입니다. 주로 초저녁에 볼 수 있습니다",
    },
    {
      range: [8, 15],
      shapeName: "상현달",
      EnName: "First Quarter || Waxing Gibbous",
      desc: "매달 7~8일에 뜨며 달의 오른쪽 절반이 빛나게 보이며 왼쪽으로 빛이 커집니다.",
    },
    {
      range: [15, 16],
      shapeName: "보름달",
      EnName: "Full Moon",
      desc: "매달 15일에 뜨며 달 전체가 밝게 빛납니다.",
    },
    {
      range: [16, 24],
      shapeName: "하현달",
      EnName: "Last Quarter || Waning Gibbous",
      desc: "매달 17~23일에 뜨며 달의 왼쪽 절반이 빛나게 보이며 왼쪽으로 빛이 줄어듭니다.",
    },
    {
      range: [24, Infinity],
      shapeName: "그믐달",
      EnName: "Waning Crecent",
      desc: "매달 24~28일에 뜨며 왼쪽 부분이 조금 빛나게 보입니다. 주로 새벽이나 아침에 볼 수 있습니다.",
    },
  ],

  // API 기본 URL 설정
  getApiUrl: () => {
    return (
      import.meta.env.VITE_API_BASE_URL ||
      "https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo"
    );
  },

  // 날짜 포맷팅 헬퍼 함수
  formatDate: (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return { year, month, day };
  },

  // 달 모양 찾기 헬퍼 함수
  findMoonShape: (lunDay) => {
    const { moonCycle } = get();
    const moonShape = moonCycle.find(({ range }) => lunDay >= range[0] && lunDay < range[1]);
    return moonShape ? moonShape.shapeName : "달 모양 이름을 가져오는 데 실패했습니다.";
  },

  // 달 모양 찾기 헬퍼 함수
  findMoonEn: (lunDay) => {
    const { moonCycle } = get();
    const moonShape = moonCycle.find(({ range }) => lunDay >= range[0] && lunDay < range[1]);
    return moonShape ? moonShape.EnName : "달 모양 영어 이름을 가져오는데 실패했습니다.";
  },

  // 달 모양 찾기 헬퍼 함수
  findMoonDesc: (lunDay) => {
    const { moonCycle } = get();
    const moonShape = moonCycle.find(({ range }) => lunDay >= range[0] && lunDay < range[1]);
    return moonShape ? moonShape.desc : "달 모양 설명을 가져오는데 실패했습니다.";
  },

  // 달 모양 인덱스 찾기 헬퍼 함수
  findMoonIdx: (lunDay) => {
    const { moonCycle } = get();
    const moonShapeIndex = moonCycle.findIndex(({ range }) => lunDay >= range[0] && lunDay < range[1]);
    return moonShapeIndex !== -1 ? moonShapeIndex : -1;
  },

  // 사용자 데이터 가져오기
  getDate: async () => {
    const state = get();

    // 사용할 날짜 결정 (오늘 날짜 사용)
    const dateToUse = new Date();
    const { year, month, day } = state.formatDate(dateToUse);

    try {
      const key = import.meta.env.VITE_DATE_KEY;
      const apiUrl = state.getApiUrl();

      const response = await axios.get(apiUrl, {
        params: {
          ServiceKey: key,
          solYear: year,
          solMonth: month,
          solDay: day,
        },
        timeout: 10000,
      });

      const _data = response?.data?.response?.body?.items?.item;
      if (_data?.lunDay !== undefined) {
        const lunDay = parseInt(_data.lunDay, 10);
        const moonShape = state.findMoonShape(lunDay);
        const moonEnName = state.findMoonEn(lunDay);
        const moonDesc = state.findMoonDesc(lunDay);
        const moonIdx = state.findMoonIdx(lunDay);

        set({
          date: lunDay,
          name: moonShape,
          enName: moonEnName,
          desc: moonDesc,
          idx: moonIdx,
        });

        return { date: lunDay, name: moonShape };
      }
    } catch {
      return null;
    }
  },
}));

export default useLunState;
