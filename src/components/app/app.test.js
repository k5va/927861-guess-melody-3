import {App} from "@components";
import {generateId} from "@utils";

const MAX_ERRORS_COUNT = 3;

const questions = [
  {
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
  },
  {
    id: generateId(),
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      id: generateId(),
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }, {
      id: generateId(),
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Jack Daniels`,
    }, {
      id: generateId(),
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Jim Beam`,
    }],
  }
];

it(`App should render correctly`, () => {
  const renderedTree = renderer.create(<App maxErrorsCount={MAX_ERRORS_COUNT} questions={questions}/>).toJSON();
  expect(renderedTree).toMatchSnapshot();
});
