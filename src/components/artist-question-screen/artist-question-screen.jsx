import {GameType} from "@consts";
import {withActivePlayer} from "@hocs";

const PLAYER_ID = 0;

const ArtistQuestionScreen = (props) => {
  const {onAnswer, question, renderPlayer} = props;
  const {answers, song} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(PLAYER_ID, song.src)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, index) => (
          <div className="artist" key={answer.id}>
            <input className="artist__input visually-hidden" type="radio"
              name="answer" value={`artist-${index}`} id={`artist-${index}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}
            />
            <label className="artist__name" htmlFor={`artist-${index}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist} />
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default withActivePlayer(ArtistQuestionScreen);
