import { useContext, useState } from "react";
import MainHeading from "./MainHeading";
import ReturnView from "./ReturnView";
import SplashElements from "./SplashElements";
import { WeatherAPIContext } from "./WeatherAPIProvider";

const weatherConditions = (suffix, current, sevenDays) => ({
  suffix,
  current,
  sevenDays,
});

const weatherConditionsArray = [
  weatherConditions("cold", -7, -6),
  weatherConditions("colder", -7, -11),
  weatherConditions("warmer", -7, 1),
];

const randomWeatherConditions = () =>
  weatherConditionsArray[
    Math.floor(Math.random() * weatherConditionsArray.length)
  ];

const App = () => {
  const { location } = useContext(WeatherAPIContext);
  console.log(location);
  const [simpleMockData, setSimpleMockData] = useState({ dataReturned: false });

  const currentWeatherConditions = randomWeatherConditions();
  const toggleMockDataReturned = () =>
    setSimpleMockData({
      ...simpleMockData,
      dataReturned: !simpleMockData.dataReturned,
    });

  // this removes the classes for the temperature background coloring
  // incase we get back here by some weird means
  //   i did see this bug in development so this should catch it
  const root = document.getElementById("root");
  root.classList.remove(...root.classList);

  return (
    <>
      <MainHeading isDataReturned={simpleMockData.dataReturned} />
      {simpleMockData.dataReturned ? (
        <ReturnView
          toggleMockDataReturned={toggleMockDataReturned}
          weatherConditions={currentWeatherConditions}
        />
      ) : (
        <SplashElements toggleMockDataReturned={toggleMockDataReturned} />
      )}
    </>
  );
};

export default App;
