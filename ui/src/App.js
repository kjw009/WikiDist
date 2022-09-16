// Import react modules
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

// Import functional components
import Pages from "./Pages";
import Hello from "./Hello";
import Passfort from "./Passfort";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/pages" component={Pages} />
      <Route path="/page/hello" component={Hello} />
      <Route path="/page/passfort" component={Passfort} />
      <Redirect to="/pages" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
