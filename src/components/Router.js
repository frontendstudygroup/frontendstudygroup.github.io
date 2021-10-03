import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Resources from "./Resources/Resources";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resources" component={Resources} />
    </Switch>
  </BrowserRouter>
);

export default Router;