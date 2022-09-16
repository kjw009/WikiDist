// Import react modules
import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// Import functional components
import Pages from "./Pages";
import Hello from "./Hello";
import Passfort from "./Passfort";

function App() {
  return (
    <Switch>
      <Route exact path="/pages" component={withRouter(Pages)} />
      <Route exact path="/page/hello" component={withRouter(Hello)} />
      <Route exact path="/page/passfort" component={withRouter(Passfort)} />
      <Redirect exact to="/pages" />
    </Switch>
  );
}

export default App;
