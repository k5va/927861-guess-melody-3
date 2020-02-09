import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

const MAX_ERRORS_COUNT = 3;

it(`WelcomeScreen should render correctly`, () => {
  const renderedTree = renderer.create(<WelcomeScreen maxErrorsCount={MAX_ERRORS_COUNT} />).toJSON();
  expect(renderedTree).toMatchSnapshot();
});
