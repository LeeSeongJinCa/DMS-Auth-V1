import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Main = lazy(() => import("./components/Main"));
const Movie = lazy(() => import("./components/Movie"));

import "./App.css";
// import { Movie, Main } from "./components";

const App: FC<{}> = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loadiasdasdasdasdadsadasdasdng...</div>}>
        <header>
          <Link to="/">home</Link>
          <br />
          <Link to="/movie">movie</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/movie" component={Movie} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
