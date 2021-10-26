import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Header from "./Header/Header";
import Resources from "./Resources/Resources";
import Footer from "./Footer/Footer";
import SingleResource from "./SingleResource/SingleResource";
import Contact from "./ContactUs/Contact";
import About from "./About/About";
import TableView from  "./Resources/TableView";
import GitApi from "./Api/GitApi";


const Router = () => (

  <BrowserRouter>
    <Header />
    
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/resources" component={Resources} />
      <Route path="/resources/:id" component={SingleResource} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/TableView" component={TableView} />
      <Route exact path="/contributor" component={GitApi} />

    </Switch>
    <Footer/>
  </BrowserRouter>
);
export default Router;
