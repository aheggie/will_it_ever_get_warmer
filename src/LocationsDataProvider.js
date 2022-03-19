import { createContext, useEffect, useState } from "react";

const EN_LOCATIONS_URL =
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_en.geojson";

//   not using this for now
const FR_LOCATIONS_URL = //eslint-disable-line no-unused-vars
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_fr.geojson";

export const LocationsContext = createContext();

const LocationsDataProvider = ({ children }) => {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    fetch(EN_LOCATIONS_URL)
      .then((res) => res.json())
      .then(setLocations);
  }, [setLocations]);

  return (
    <LocationsContext.Provider value={locations}>
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsDataProvider;
