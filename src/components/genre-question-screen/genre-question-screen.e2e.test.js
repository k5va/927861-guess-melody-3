import {GenreQuestionScreen} from "@components";
import {generateId} from "@utils";

const ON_ANSWER_CALL_COUNT = 1;
const USER_ANSWER_NUMBER = 0;

const question = {
  id: generateId(),
  type: `genre`,
  genre: `rock`,
  answers: [{
    id: generateId(),
    src: `one`,
    genre: `rock`,
  }, {
    id: generateId(),
    src: `two`,
    genre: `blues`,
  }, {
    id: generateId(),
    src: `three`,
    genre: `jazz`,
  }, {
    id: generateId(),
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

  const screen = mount(
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
