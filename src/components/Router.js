import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/aboutme/" component={AboutMe} />
      <Route exact path="/Contact/" component={Contact} />
      <Route exact path="/projects/" component={Projects} />
      <Route exact path="/Resume/" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
