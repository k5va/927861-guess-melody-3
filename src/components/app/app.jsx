import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

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
