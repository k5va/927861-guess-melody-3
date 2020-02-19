import {AudioPlayer} from "@components";

const ActivePlayer = {
  DEFAULT: 0,
  UNSET: -1
};

const withActivePlayer = (Component) => {
  class WithActivePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: ActivePlayer.DEFAULT
      };
    }

    render() {
      const {activePlayer} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(id, src) => (
            <AudioPlayer
              isPlaying={id === activePlayer}
              src={src}
              onPlayButtonClick={() => (
                this.setState({activePlayer: activePlayer === id ? ActivePlayer.UNSET : id})
              )}
            />
          )}
        />
      );
    }

  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
