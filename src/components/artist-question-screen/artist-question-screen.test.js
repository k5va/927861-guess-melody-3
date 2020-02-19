import {ArtistQuestionScreen} from "@components";
import {generateId} from "@utils";

const question = {
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
};

it(`ArtistQuestionScreen should render correctly`, () => {
  const renderedTree = renderer.create(
      <ArtistQuestionScreen question={question} onAnswer={() => { }} />,
      {
        createNodeMock: () => ({})
      }
  ).toJSON();
  expect(renderedTree).toMatchSnapshot();
});
