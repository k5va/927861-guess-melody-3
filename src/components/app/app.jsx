import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";

const App = ({maxErrorsCount}) => {
  const handleWelcomeButtonClick = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen maxErrorsCount={maxErrorsCount} onWelcomeButtonClick={handleWelcomeButtonClick} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  maxErrorsCount: PropTypes.number.isRequired
};

export default App;
