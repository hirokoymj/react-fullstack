import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Homepage, SinglePeople } from "../components/Homepage";
import { NotFoundPage } from "../components/NotFoundPage";

const IntroPage = () => {
  return <h1>Intro Page</h1>;
};

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={IntroPage} exact={true} />
        <Route path="/home" component={Homepage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
