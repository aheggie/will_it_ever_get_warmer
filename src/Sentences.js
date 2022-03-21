import { useContext } from "react";
import { WeatherAPIContext } from "./WeatherAPIProvider";

const makeSentences = (city) => ({
  cold: {
    firstSentence: `In seven days' time, it will be just as cold in ${city}.`,
    secondSentence: `Then it will stay cold forever. It will never get warmer again.`,
  },
  colder: {
    firstSentence: `In seven days' time, it will be even colder in ${city}.`,
    secondSentence: `Then it will get colder and colder forever. It will never get warmer again.`,
  },
  warmer: {
    firstSentence: `In seven days' time, it will be warmer in ${city}`,
    secondSentence: `Then it will stay warm forever. It will never get cold again.`,
  },
});

const Sentences = ({ suffix }) => {
  const { location } = useContext(WeatherAPIContext);
  const { firstSentence, secondSentence } = makeSentences(location)[suffix];

  return (
    <div className="sentences">
      <p className="sentences__sentence">{firstSentence}</p>
      <p className="sentences__sentence">{secondSentence}</p>
    </div>
  );
};

export default Sentences;
