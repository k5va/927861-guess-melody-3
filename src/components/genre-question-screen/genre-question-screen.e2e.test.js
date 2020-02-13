import {shallow} from "enzyme";
import GenreQuestionScreen from "./genre-question-screen";

const ON_ANSWER_CALL_COUNT = 1;
const USER_ANSWER_NUMBER = 0;

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `one`,
    genre: `rock`,
  }, {
    src: `two`,
    genre: `blues`,
  }, {
    src: `three`,
    genre: `jazz`,
  }, {
    src: `four`,
    genre: `rock`,
  }]
};

const mockEvent = {
  preventDefault() {},
  target: {
    value: true
  }
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const handleAnswer = jest.fn();
  const userAnswer = [true, false, false, false];

  const screen = shallow(
      <GenreQuestionScreen question={question} onAnswer={handleAnswer} />
  );

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(USER_ANSWER_NUMBER);

  const form = screen.find(`.game__tracks`);

  answerOne.simulate(`change`, mockEvent);
  form.simulate(`submit`, mockEvent);

  expect(handleAnswer).toHaveBeenCalledTimes(ON_ANSWER_CALL_COUNT);
  expect(handleAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(handleAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
