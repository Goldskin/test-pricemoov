import React, { Component } from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css"
import priceCard from "./containers/price-card";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/prices" />
          <Route exact path="/prices/:agency?/:category?" component={priceCard} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
