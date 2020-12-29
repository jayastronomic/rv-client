import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
