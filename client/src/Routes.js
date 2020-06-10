import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Phones from "./components/Phones/Phones";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Phones />} />
        <Route exact path="/:phoneId" render={() => <PhoneDetails />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
