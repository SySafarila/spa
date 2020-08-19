import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        {/*  */}
        <Switch>
          <Route path="/login" component={Home} />
          <Route path="/" exact>
            <h1>Root</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
