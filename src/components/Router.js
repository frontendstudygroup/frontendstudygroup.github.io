import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import ContactUs from "./ContactUs/ContactUs";
import Header from "./Header/Header";
import Resources from "./Resources/Resources";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/contact" component={ContactUs} />
    </Switch>
  </BrowserRouter>
);

export default Router;