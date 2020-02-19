import ArtistQuestionScreen from "./artist-question-screen";

const ON_ANSWER_CALL_COUNT = 1;
const USER_ANSWER_NUMBER = 0;

const question = {
  type: `artist`,
  song: {
    artist: `artist`,
    src: `pic`,
  },
  answers: [{
    picture: `pic one`,
    artist: `One`,
  }, {
    picture: `pic two`,
    artist: `Two`,
  }, {
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
