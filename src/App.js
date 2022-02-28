import { useState } from "react";

const App = () => {
  const [simpleMockData] = useState(false);
  return (
    <>
      <h1
        class={`mainheading ${
          simpleMockData ? "mainheading--datareturned" : ""
        }`}
      >
        Will it ever get warmer?
      </h1>
      <p class="instructions">
        Enter your province and city to find out the temperature in seven days.
      </p>
      <div class="inputs">
        <input type="text" placeholder="Province" class="inputs__input" />
        <input type="text" placeholder="City" class="inputs__input" />
        <button class="inputs__btn">Search</button>
      </div>
    </>
  );
};

export default App;
