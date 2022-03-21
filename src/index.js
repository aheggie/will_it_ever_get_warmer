import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WeatherAPIProvider from "./WeatherAPIProvider";

ReactDOM.render(
  <React.StrictMode>
    <WeatherAPIProvider>
      <App />
    </WeatherAPIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
