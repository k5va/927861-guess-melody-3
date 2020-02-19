import {GenreQuestionScreen, ArtistQuestionScreen, GameScreen} from "@components";
import {generateId} from "@utils";
import {GameType} from "@consts";

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

it(`GameScreen with GenreQuestionScreen should render correctly`, () => {
  const wrapper = renderer.create(
      <GameScreen type={GameType.GENRE}>
        <GenreQuestionScreen question={questions[0]} onAnswer={() => {}} />
      </GameScreen>,
      {
        createNodeMock: () => ({})
      }
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it(`GameScreen with ArtistQuestionScreen should render correctly`, () => {
  const wrapper = renderer.create(
      <GameScreen type={GameType.ARTIST}>
        <ArtistQuestionScreen question={questions[1]} onAnswer={() => {}} />
      </GameScreen>,
      {
        createNodeMock: () => ({})
      }
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
