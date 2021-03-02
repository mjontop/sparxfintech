import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
