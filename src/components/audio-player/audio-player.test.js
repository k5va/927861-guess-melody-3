import {AudioPlayer} from "@components";

const PLAYER_SRC = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

it(`AudioPlayer should render correctly`, () => {
  const wrapper = renderer.create(
      <AudioPlayer isPlaying={true} src={PLAYER_SRC} onPlayButtonClick={() => {}} />,
      {
        createNodeMock: () => ({})
      }
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
