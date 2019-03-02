import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "./state/store"
import App from "./views/App"
import "./index.css"
import { Grid } from "@material-ui/core";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <Grid
      className="container"
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <App />
    </Grid>
  </ReduxProvider>,
  document.getElementById("root")
)
