import ArtistQuestionScreen from "./artist-question-screen";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://api.adorable.io/avatars/128/3`,
    artist: `Jim Beam`,
  }],
};

it(`ArtistQuestionScreen should render correctly`, () => {
  const renderedTree = renderer.create(
      <ArtistQuestionScreen question={question} onAnswer={() => {}} />
  ).toJSON();
  expect(renderedTree).toMatchSnapshot();
});
