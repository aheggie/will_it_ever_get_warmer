import { useContext } from "react";
import MainHeading from "./MainHeading";
import ReturnView from "./ReturnView";
import SplashElements from "./SplashElements";
import { WeatherAPIContext } from "./WeatherAPIProvider";

const weatherConditions = (suffix, current, sevenDays) => ({
  suffix,
  current,
  sevenDays,
});

// const weatherConditionsArray = [
//   weatherConditions("cold", -7, -6),
//   weatherConditions("colder", -7, -11),
//   weatherConditions("warmer", -7, 1),
// ];

// const randomWeatherConditions = () =>
//   weatherConditionsArray[
//     Math.floor(Math.random() * weatherConditionsArray.length)
//   ];

const App = () => {
  const { location, loadingState, weather } = useContext(WeatherAPIContext);
  console.log(location);
  // const [simpleMockData, setSimpleMockData] = useState({ dataReturned: false });

  const currentWeatherConditions = weatherConditions(
    "cold",
    weather.currentHigh,
    weather.futureHigh
  );
  // const toggleMockDataReturned = () =>
  //   setSimpleMockData({
  //     ...simpleMockData,
  //     dataReturned: !simpleMockData.dataReturned,
  //   });

  const dataReturned = loadingState === "dataloaded";

  // this removes the classes for the temperature background coloring
  // incase we get back here by some weird means
  //   i did see this bug in development so this should catch it
  const root = document.getElementById("root");
  root.classList.remove(...root.classList);

  return (
    <>
      <MainHeading isDataReturned={dataReturned} />
      {dataReturned ? (
        <ReturnView weatherConditions={currentWeatherConditions} />
      ) : (
        <SplashElements />
      )}
    </>
  );
};

export default App;
