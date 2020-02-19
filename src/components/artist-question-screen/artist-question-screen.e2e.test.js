import {ArtistQuestionScreen} from "@components";
import {generateId} from "@utils";

const ON_ANSWER_CALL_COUNT = 1;
const USER_ANSWER_NUMBER = 0;

const question = {
  id: generateId(),
  type: `artist`,
  song: {
    artist: `artist`,
    src: `pic`,
  },
  answers: [{
    id: generateId(),
    picture: `pic one`,
    artist: `One`,
  }, {
    id: generateId(),
    picture: `pic two`,
    artist: `Two`,
  }, {
    id: generateId(),
    picture: `pic three`,
    artist: `Three`,
  }],
};

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const handleAnswer = jest.fn();
  const userAnswer = question.answers[USER_ANSWER_NUMBER];

  const screen = shallow(
      <ArtistQuestionScreen question={question} onAnswer={handleAnswer} />
  );

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(USER_ANSWER_NUMBER);

  answerOne.simulate(`change`, mockEvent);

  expect(handleAnswer).toHaveBeenCalledTimes(ON_ANSWER_CALL_COUNT);
  expect(handleAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(handleAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
