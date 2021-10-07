import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "./Header/Header";
import Resources from "./Resources/Resources";
import Footer from "./Footer/Footer";
import Contact from "./ContactUs/Contact";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Router;