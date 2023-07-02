import React from "react";
import { Route, Switch } from "react-router-dom";
import Nrc from "./Components/Details/Nrc";
import Stupas from "./Components/Details/Stupas";
import NotFound from "./NotFound";
import DetailsWrapper from "./Components/Common/DetailsWrapper";
import Dwb from "./Components/Details/Dwb";

function Details() {
  return (
    <DetailsWrapper>
      <Switch>
        <Route path={`/nrc`} exact>
          <Nrc />
        </Route>
        <Route path={`/stupas`} exact>
          <Stupas />
        </Route>
        <Route path={`/dwbc`} exact>
          <Dwb />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </DetailsWrapper>
  );
}

export default Details;
