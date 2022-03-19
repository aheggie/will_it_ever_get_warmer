import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LocationsDataProvider from "./LocationsDataProvider";

ReactDOM.render(
  <React.StrictMode>
    <LocationsDataProvider>
      <App />
    </LocationsDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
