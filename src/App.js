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
      <p class="instructions">
        Enter your province and city to find out the temperature in seven days.
      </p>
      <div class="inputs">
        <input type="text" placeholder="Province" class="inputs__input" />
        <input type="text" placeholder="City" class="inputs__input" />
        <button class="inputs__btn" onClick={toggleMockDataReturned}>
          Search
        </button>
      </div>
    </>
  );
};

export default App;
