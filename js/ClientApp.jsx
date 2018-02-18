import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const App = () => (
  <BrowserRouter>
    <div>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>;
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
