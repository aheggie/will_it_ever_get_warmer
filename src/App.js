import { useState } from "react";
import MainHeading from "./MainHeading";

const App = () => {
  const [simpleMockData, setSimpleMockData] = useState({ dataReturned: false });

  const toggleMockDataReturned = () =>
    setSimpleMockData({
      ...simpleMockData,
      dataReturned: !simpleMockData.dataReturned,
    });

  return (
    <>
      <MainHeading isDataReturned={simpleMockData.dataReturned} />
      <p className="instructions">
        Enter your province and city to find out the temperature in seven days.
      </p>
      <div className="inputs">
        <input type="text" placeholder="Province" className="inputs__input" />
        <input type="text" placeholder="City" className="inputs__input" />
        <button className="inputs__btn" onClick={toggleMockDataReturned}>
          Search
        </button>
      </div>
    </>
  );
};

export default App;
