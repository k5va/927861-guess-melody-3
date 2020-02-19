import {GenreQuestionScreen} from "@components";
import {generateId} from "@utils";

const question = {
  id: generateId(),
  type: `genre`,
  genre: `rock`,
  answers: [{
    id: generateId(),
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    id: generateId(),
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    id: generateId(),
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    id: generateId(),
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

it(`GenreQuestionScreen should render correctly`, () => {
  const renderedTree = renderer.create(
      <GenreQuestionScreen question={question} onAnswer={() => {}} />,
      {
        createNodeMock: () => ({})
      }
  ).toJSON();
  expect(renderedTree).toMatchSnapshot();
});
