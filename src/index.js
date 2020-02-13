import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components";
import questions from "./mocks/questions";

const Settings = {
  MAX_ERRORS_COUNT: 3
};

ReactDOM.render(
    <App maxErrorsCount={Settings.MAX_ERRORS_COUNT} questions={questions} />,
    document.querySelector(`#root`)
);
