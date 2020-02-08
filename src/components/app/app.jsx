import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = ({maxErrorsCount}) => {
  return (
    <WelcomeScreen maxErrorsCount={maxErrorsCount} />
  );
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired
};

export default App;
