import { useContext } from "react";
import Sentences from "./Sentences";
import { WeatherAPIContext } from "./WeatherAPIProvider";

const dateDisplayString = (dateObj) => {
  // const weekday = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateObj.getDay()]
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][dateObj.getMonth()];
  const monthDay = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${month} ${monthDay}, ${year}`;
};

const ReturnView = () => {
  const { weather, location } = useContext(WeatherAPIContext);
  const { currentHigh, futureHigh } = weather;

  const tempDiff = futureHigh - currentHigh;

  const suffix = tempDiff > 3 ? "warmer" : tempDiff > -2 ? "cold" : "colder";

  const today = new Date();
  const sevenDays = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  document.getElementById("root").classList.add(`root--${suffix}`);
  return (
    <>
      <p className="oneword">{suffix !== "warmer" ? "No." : "Yes."}</p>
      <Sentences suffix={suffix} />
      <div className="weatherboxes">
        <div className="weatherboxes__box">
          <p className="weatherboxes__location">{location}</p>
          <p className="weatherboxes__date">{dateDisplayString(today)}</p>
          <p className="weatherboxes__temperature">{currentHigh}</p>
        </div>
        <div className="weatherboxes__box">
          <p className="weatherboxes__location">{location}</p>
          <p className="weatherboxes__date">{dateDisplayString(sevenDays)}</p>
          <p className="weatherboxes__temperature">{futureHigh}</p>
        </div>
      </div>
    </>
  );
};

export default ReturnView;
