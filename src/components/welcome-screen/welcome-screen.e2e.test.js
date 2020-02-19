import WelcomeScreen from "./welcome-screen";

const MAX_ERRORS_COUNT = 3;

it(`Should welcome button be pressed`, () => {
  const handleWelcomeButtonClick = jest.fn();
  const welcomeScreen = shallow(
      <WelcomeScreen maxErrorsCount={MAX_ERRORS_COUNT} onWelcomeButtonClick={handleWelcomeButtonClick} />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();
  expect(handleWelcomeButtonClick.mock.calls.length).toBe(1);
});
