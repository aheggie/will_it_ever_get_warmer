import { createContext, useEffect, useState } from "react";

const EN_LOCATIONS_URL = //eslint-disable-line no-unused-vars
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_en.geojson";

//   not using this for now
const FR_LOCATIONS_URL = //eslint-disable-line no-unused-vars
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_fr.geojson";

const MTL_GEOCODE =
  "https://api.openweathermap.org/geo/1.0/zip?zip=H2T,CA&appid=130f654faf949256e51b5b6577a2855b";

export const LocationsContext = createContext();

const LocationsDataProvider = ({ children }) => {
  const [locations, setLocations] = useState({});
  console.log(MTL_GEOCODE);
  useEffect(() => {
    fetch(MTL_GEOCODE)
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
