import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  MAX_ERRORS_COUNT: 3
};

ReactDOM.render(
    <App maxErrorsCount={Settings.MAX_ERRORS_COUNT} />,
    document.querySelector(`#root`)
);
