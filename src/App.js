import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import Details from "./Details";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
