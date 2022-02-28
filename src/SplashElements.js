// this component needs a better name
const SplashElements = ({ toggleMockDataReturned }) => (
  <>
    <p className="instructions">
      Enter your province and city to find out the temperature in seven days.
    </p>
    <div className="inputs">
      <input type="text" placeholder="Province" className="inputs__input" />
      <input type="text" placeholder="City" className="inputs__input" />
      <button
        className="inputs__btn"
        onClick={toggleMockDataReturned}
        onBlur={toggleMockDataReturned}
      >
        Search
      </button>
    </div>
  </>
);

export default SplashElements;
