import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./Components/Main/Main";
import StyleTransfer from "./Components/StyleTransfer/StyleTransfer";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/" component={App} />
        <Route path="/sources" component={Footer} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/themagic" component={StyleTransfer} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();

// <HashRouter>
//       <Switch>
//         <Route exact path="/" component={App} />
//       </Switch>
//     </HashRouter>
