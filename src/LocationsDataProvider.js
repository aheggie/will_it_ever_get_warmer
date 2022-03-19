import { useContext, useEffect } from "react";

const EN_LOCATIONS_URL =
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_en.geojson";

const FR_LOCATIONS_URL =
  "https://collaboration.cmc.ec.gc.ca/cmc/cmos/public_doc/msc-data/citypage-weather/site_list_fr.geojson";

const LocationsDataProvider = () => {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    fetch();
  }, [setLocations]);
};

export default LocationsDataProvider;
