import useLunState from "@/hooks/useLunState";

const TopText = () => {
  const { date, name } = useLunState();
  return (
    <p className="top_txt">
      {date === 0 || name === "" ? (
        <>음력일을 불러오는 중입니다.</>
      ) : (
        <>
          오늘은 음력 {date}일로 {name}이 뜹니다.
        </>
      )}
    </p>
  );
};

export default TopText;
