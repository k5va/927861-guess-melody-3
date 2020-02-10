import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const MAX_ERRORS_COUNT = 3;

it(`App should render correctly`, () => {
  const renderedTree = renderer.create(<App maxErrorsCount={MAX_ERRORS_COUNT} />).toJSON();
  expect(renderedTree).toMatchSnapshot();
});
