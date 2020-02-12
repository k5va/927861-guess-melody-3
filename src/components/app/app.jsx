import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

const App = ({maxErrorsCount, questions}) => {
  const handleWelcomeButtonClick = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen maxErrorsCount={maxErrorsCount} onWelcomeButtonClick={handleWelcomeButtonClick} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen onAnswer={() => {}} question={questions[1]} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen onAnswer={() => {}} question={questions[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
