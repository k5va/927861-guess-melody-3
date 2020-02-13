import WelcomeScreen from "./welcome-screen";

const MAX_ERRORS_COUNT = 3;
const handleWelcomeButtonClick = () => {};

it(`WelcomeScreen should render correctly`, () => {
  const renderedTree = renderer
    .create(
        <WelcomeScreen maxErrorsCount={MAX_ERRORS_COUNT} onWelcomeButtonClick={handleWelcomeButtonClick} />)
    .toJSON();
  expect(renderedTree).toMatchSnapshot();
});
