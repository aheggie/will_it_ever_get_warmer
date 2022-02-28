const MainHeading = ({ isDataReturned }) => (
  <h1
    className={`mainheading ${
      isDataReturned ? "mainheading--datareturned" : ""
    }`}
  >
    Will it ever get warmer?
  </h1>
);

export default MainHeading;
