import {GameType} from "@consts";
import {withActivePlayer} from "@hocs";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }

  render() {
    const {question, renderPlayer} = this.props;
    const {answers, genre} = question;
    const {answers: userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => this._handleFormSubmit(evt)}
        >
          {answers.map((answer, index) => (
            <div className="track" key={answer.id}>
              {renderPlayer(index, answer.src)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer"
                  value={`answer-${index}`} id={`answer-${index}`}
                  checked={userAnswers[index]}
                  onChange={(evt) => this._handleAnswerChange(evt.target.value, index)}
                />
                <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
              </div>
            </div>
          ))}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }

  _handleAnswerChange(isChecked, index) {
    const {answers: userAnswers} = this.state;
    this.setState({
      answers: [...userAnswers.slice(0, index), isChecked, ...userAnswers.slice(index + 1)]
    });
  }

  _handleFormSubmit(evt) {
    const {onAnswer, question} = this.props;
    evt.preventDefault();
    onAnswer(question, this.state.answers);
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default withActivePlayer(GenreQuestionScreen);
