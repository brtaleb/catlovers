import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./containers/Home";
import {getBreedsAction} from "./store/actions/breedsActions";
import {connect} from "react-redux";
import BreedPage from "./containers/BreedPage";
import Favorites from "./containers/Favorites";

const App = ({getBreedsAction, data}) => {

  useEffect(() => {
    getBreedsAction();
  }, [getBreedsAction]);

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/breed/:id">
            <BreedPage breeds={data && data.breeds}/>
          </Route>
          <Route path="/favorites">
            <Favorites breeds={data && data.breeds} />
          </Route>
          <Route path="/">
            <Home breeds={data && data.breeds}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return state.breedsStore;
}

const mapDispatchToProps = {
  getBreedsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
