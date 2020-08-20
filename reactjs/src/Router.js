import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ContextProvider } from "./contexts/Context";
import Profile from "./pages/Profile";

function Router() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div>
          <Nav />
          {/*  */}
          <Switch>
            <Route path="/profile" component={Profile} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default Router;
