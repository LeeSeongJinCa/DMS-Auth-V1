import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const Main = lazy(() => import("./components/main/Main"));
const Login = lazy(() => import("./components/login/Login"));
const Agreement = lazy(() => import("./components/login/Agreement"));

const App: FC<{}> = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/privacy-policy-agreement" component={Agreement} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
