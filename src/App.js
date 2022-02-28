import { useState } from "react";
import MainHeading from "./MainHeading";
import ReturnView from "./ReturnView";
import SplashElements from "./SplashElements";

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
      {simpleMockData.dataReturned ? (
        <ReturnView toggleMockDataReturned={toggleMockDataReturned} />
      ) : (
        <SplashElements toggleMockDataReturned={toggleMockDataReturned} />
      )}
    </>
  );
};

export default App;
