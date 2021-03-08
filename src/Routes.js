import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
