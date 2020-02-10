import WelcomeScreen from "../welcome-screen/welcome-screen";

const welcomeButtonHandler = () => {};

const App = ({maxErrorsCount}) => {
  return (
    <WelcomeScreen maxErrorsCount={maxErrorsCount} onWelcomeButtonClick={welcomeButtonHandler} />
  );
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired
};

export default App;
