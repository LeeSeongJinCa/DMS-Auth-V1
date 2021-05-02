import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const Main = lazy(() => import("./components/main/Main"));
const Err = lazy(() => import("./components/login/Error"));
const Login = lazy(() => import("./components/login/Login"));
const Agreement = lazy(() => import("./components/login/Agreement"));
const DashBoard = lazy(() => import("./components/dashboard/Dashboard"));
const RedirectCode = lazy(
  () => import("./components/redirectCode/redirectCode")
);

const App: FC<{}> = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/error" component={Err} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/redirect-code" component={RedirectCode} />
          <Route exact path="/privacy-policy-agreement" component={Agreement} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
