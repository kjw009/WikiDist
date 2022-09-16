// Import react modules
import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// Import functional components
import Pages from "./Pages";
import Hello from "./Hello";
import Passfort from "./Passfort";
import Hello0 from "./Hello0";
import Hello1490112640 from "./Hello1490112640.";
import Hello1490112680 from "./Hello1490112680";
import Hello1490115775 from "./Hello1490115775";
import Passfort1452854398 from "./Passfort1452854398";

function App() {
  return (
    <Switch>
      <Route exact path="/pages" component={withRouter(Pages)} />
      <Route exact path="/page/hello/latest" component={withRouter(Hello)} />
      <Route
        exact
        path="/page/passfort/latest"
        component={withRouter(Passfort)}
      />
      <Route exact path="/page/hello/0" component={withRouter(Hello0)} />
      <Route
        exact
        path="/page/hello/1490112640"
        component={withRouter(Hello1490112640)}
      />
      <Route
        exact
        path="/page/hello/1490112680"
        component={withRouter(Hello1490112680)}
      />
      <Route
        exact
        path="/page/hello/1490115775"
        component={withRouter(Hello1490115775)}
      />
      <Route
        exact
        path="/page/passfort/1452854761"
        component={withRouter(Passfort)}
      />
      <Route
        exact
        path="/page/passfort/1452854398"
        component={withRouter(Passfort1452854398)}
      />
    </Switch>
  );
}

export default App;
