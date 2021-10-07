import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "./Header/Header";
import Resources from "./Resources/Resources";
import SingleResource from "./SingleResource/SingleResource";
import Contact from "./ContactUs/Contact";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resources" component={Resources} />
      <Route path="/resources/:id" component={SingleResource} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Router;