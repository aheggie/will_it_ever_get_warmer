import { createContext, useState } from "react";

const EN_LOCATIONS_URL = //eslint-disable-line no-unused-vars
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_en.geojson";

//   not using this for now
const FR_LOCATIONS_URL = //eslint-disable-line no-unused-vars
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_fr.geojson";

const API_KEY = "130f654faf949256e51b5b6577a2855b";

const canadianGeocode = (canadianPostalCode, apiKey) =>
  `https://api.openweathermap.org/geo/1.0/zip?zip=${canadianPostalCode.slice(
    0,
    3
  )},CA&appid=${apiKey}`;

const weatherRequest = (latitude, longitude, apiKey) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

export const WeatherAPIContext = createContext();

const WeatherAPIProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [loadingState, setLoadingState] = useState("nodata");
  console.log(canadianGeocode("H2T", API_KEY));

  const getWeatherData = (postalCode) => {
    setLoadingState("loading");
    fetch(canadianGeocode(postalCode, API_KEY))
      .then((res) => res.json())
      .then(({ lat, lon, name }) => {
        setLocation(name);
        return fetch(weatherRequest(lat, lon, API_KEY));
      })
      .then((res) => res.json())
      .then((weatherData) => {
        setWeather({
          // might want temp max from daily[0]
          // weatherData.current.temp gives immediate current temp
          // daily[0].temp.max gives current day's max temp
          currentHigh: weatherData.daily[0].temp.max,
          futureHigh:
            // the last index of weatherData.daily is the furthest day,i.e. seventh
            weatherData.daily[weatherData.daily.length - 1].temp.max,
        });
        setLoadingState("dataloaded");
      });
  };

  return (
    <WeatherAPIContext.Provider
      value={{ location, weather, loadingState, getWeatherData }}
    >
      {children}
    </WeatherAPIContext.Provider>
  );
};

export default WeatherAPIProvider;
