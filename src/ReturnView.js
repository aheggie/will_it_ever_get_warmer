import Sentences from "./Sentences";

const ReturnView = ({ weatherConditions }) => {
  const { suffix, current, sevenDays } = weatherConditions;
  document.getElementById("root").classList.add(`root--${suffix}`);
  return (
    <>
      <p className="oneword">{suffix !== "warmer" ? "No." : "Yes."}</p>
      <Sentences suffix={suffix} />
      <div className="weatherboxes">
        <div className="weatherboxes__box">
          <p className="weatherboxes__location">Montreal, Quebec</p>
          <p className="weatherboxes__date">February 26, 2022</p>
          <p className="weatherboxes__temperature">{current}</p>
        </div>
        <div className="weatherboxes__box">
          <p className="weatherboxes__location">Montreal, Quebec</p>
          <p className="weatherboxes__date">March 5, 2022</p>
          <p className="weatherboxes__temperature">{sevenDays}</p>
        </div>
      </div>
    </>
  );
};

export default ReturnView;
