import { useContext } from "react";
import Sentences from "./Sentences";
import { WeatherAPIContext } from "./WeatherAPIProvider";

const ReturnView = () => {
  const { weather, location } = useContext(WeatherAPIContext);
  const { currentHigh, futureHigh } = weather;

  const tempDiff = futureHigh - currentHigh;

  const suffix = tempDiff > 3 ? "warmer" : tempDiff > -2 ? "cold" : "colder";

  document.getElementById("root").classList.add(`root--${suffix}`);
  return (
    <>
      <p className="oneword">{suffix !== "warmer" ? "No." : "Yes."}</p>
      <Sentences suffix={suffix} />
      <div className="weatherboxes">
        <div className="weatherboxes__box">
          <p className="weatherboxes__location">{location}</p>
          <p className="weatherboxes__date">February 26, 2022</p>
          <p className="weatherboxes__temperature">{currentHigh}</p>
        </div>
        <div className="weatherboxes__box">
          <p className="weatherboxes__location">{location}</p>
          <p className="weatherboxes__date">March 5, 2022</p>
          <p className="weatherboxes__temperature">{futureHigh}</p>
        </div>
      </div>
    </>
  );
};

export default ReturnView;
