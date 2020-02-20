import {AudioPlayer} from "@components";

const PLAYER_SRC = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

const mockEvent = {
  preventDefault() {}
};

it(`Click on play button should change it to pause and reverse`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = mount(
      <AudioPlayer isPlaying={true} src={PLAYER_SRC} onPlayButtonClick={handlePlayButtonClick} />
  );
  wrapper.instance()._audioRef.current.oncanplaythrough();
  let playButton = wrapper.find(`.track__button`);

  playButton.simulate(`click`, mockEvent);
  expect(playButton.hasClass(`track__button--pause`)).toBe(true);
  expect(wrapper.state().isPlaying).toBe(false);
  expect(wrapper.state().isLoading).toBe(false);

  playButton = wrapper.find(`.track__button`);
  playButton.simulate(`click`, mockEvent);
  expect(wrapper.state().isPlaying).toBe(true);
  expect(playButton.hasClass(`track__button--play`)).toBe(true);
});
