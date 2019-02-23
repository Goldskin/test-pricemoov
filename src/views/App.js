import React, { Component } from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css"
import priceCard from "./containers/price-card";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/agencies" />
          <Route exact path="/agencies/:agency?" component={priceCard} />
          <Route path="/agencies/:agency/category?/:category?" component={priceCard} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
