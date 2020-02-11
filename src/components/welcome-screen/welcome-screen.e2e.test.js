import {shallow} from "enzyme";
import WelcomeScreen from "./welcome-screen";

const MAX_ERRORS_COUNT = 3;

it(`Should welcome button be pressed`, () => {
  const welcomeButtonClickHandler = jest.fn();
  const welcomeScreen = shallow(
      <WelcomeScreen maxErrorsCount={MAX_ERRORS_COUNT} onWelcomeButtonClick={welcomeButtonClickHandler} />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();
  expect(welcomeButtonClickHandler.mock.calls.length).toBe(1);
});
