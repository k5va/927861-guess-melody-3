import WelcomeScreen from "../welcome-screen/welcome-screen";

const App = ({maxErrorsCount}) => {
  const handleWelcomeButtonClick = () => {};

  return (
    <WelcomeScreen maxErrorsCount={maxErrorsCount} onWelcomeButtonClick={handleWelcomeButtonClick} />
  );
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired
};

export default App;
