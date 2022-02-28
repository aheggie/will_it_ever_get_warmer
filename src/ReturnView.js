const ReturnView = ({ weatherConditions }) => {
  const { suffix, current, sevenDays } = weatherConditions;
  document.getElementById("root").classList.add(`root--${suffix}`);
  return (
    <>
      <p className="oneword">{suffix !== "warmer" ? "No." : "Yes."}</p>
      <div className="sentences">
        <p className="sentences__sentence">
          In seven days' time, it will be just as cold in{" "}
          <span className="sentences__city">Montreal</span>.
        </p>
        <p className="sentences__sentence">
          Then it will stay cold forever. It will never get warmer again.
        </p>
      </div>
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
