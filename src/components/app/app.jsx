import {BrowserRouter, Route, Switch} from "react-router-dom";
import {WelcomeScreen, ArtistQuestionScreen, GenreQuestionScreen, GameScreen} from "@components";
import {GameStep, GameType} from "@consts";

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      step: GameStep.START
    };

    this._increaseState = this._increaseState.bind(this);
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <GameScreen type={GameType.ARTIST}>
              <ArtistQuestionScreen onAnswer={() => {}} question={questions[1]} />
            </GameScreen>
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen type={GameType.GENRE}>
              <GenreQuestionScreen onAnswer={() => {}} question={questions[0]} />
            </GameScreen>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderGameScreen() {
    const {maxErrorsCount, questions} = this.props;
    const {step} = this.state;

    if (step === GameStep.START || step >= questions.length) {
      return <WelcomeScreen
        maxErrorsCount={maxErrorsCount}
        onWelcomeButtonClick={() => this.setState({step: GameStep.FIRST})} />;
    }

    const question = questions[step];
    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <ArtistQuestionScreen question={question} onAnswer={this._increaseState} />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreen question={question} onAnswer={this._increaseState} />
            </GameScreen>
          );
      }
    }

    return null;
  }

  _increaseState() {
    this.setState((prevState) => ({step: prevState.step + 1}));
  }
}

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
