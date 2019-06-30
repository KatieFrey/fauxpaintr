import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./reducer/store";

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
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
