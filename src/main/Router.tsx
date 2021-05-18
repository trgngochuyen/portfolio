import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";

const Router = () => (
  <Switch>
    <Route path="/" component={Home} />
    {/* <Route path="/layout2" component={UserDetailsPage} /> */}
  </Switch>
);

export default Router;
