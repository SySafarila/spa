import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        {/*  */}
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
