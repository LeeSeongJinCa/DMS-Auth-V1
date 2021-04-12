import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Movie, Main } from "./components";

const App: FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/movie" component={Movie} />
      </Switch>
    </Router>
  );
};

export default App;
