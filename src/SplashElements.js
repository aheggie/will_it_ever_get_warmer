import { useContext, useState } from "react";
import { WeatherAPIContext } from "./WeatherAPIProvider";

const validatePostalCode = (postCode) => postCode.length >= 3;

// this component needs a better name
const SplashElements = ({ toggleMockDataReturned }) => {
  const [postalCode, setPostalCode] = useState("");
  const { getWeatherData } = useContext(WeatherAPIContext);
  return (
    <>
      <p className="instructions">
        Enter your POSTAL CODE to find out the temperature in seven days.
      </p>
      <div className="inputs">
        {/* <input type="text" placeholder="Province" className="inputs__input" />
      <input type="text" placeholder="City" className="inputs__input" /> */}
        <input
          // how to autofocus :
          // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
          // autofocus is maybe acceptable for accessibility when there is a single clear element :
          // https://ux.stackexchange.com/questions/60026/when-is-it-appropriate-to-add-the-html5-autofocus-attribute-to-a-page
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="text"
          placeholder="POSTAL CODE"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="inputs__input"
        />
        <button
          disabled={!validatePostalCode(postalCode)}
          className="inputs__btn"
          onClick={() => getWeatherData(postalCode)}
          onBlur={() => getWeatherData(postalCode)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SplashElements;
