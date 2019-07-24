import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#BDBDBD",
      main: "#212121",
      dark: "#9e9e9e",
      contrastText: "#E0E0E0"
    },
    secondary: {
      main: "#ECEFF1"
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </HashRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
