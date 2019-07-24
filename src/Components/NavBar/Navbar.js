import React from "react";
import cssStyles from "./NavBar.modules.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import { makeStyles } from "@material-ui/core/styles";
//import { Route } from "react-router";
import { Link, Route, HashRouter } from "react-router-dom";

const styles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing.unit * 0.7,
    marginRight: theme.spacing.unit * 5,
    background: "linear-gradient(45deg, #b71c1c 30%, #5d4037 90%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // backgroundColor: theme.palette.primary.dark,
    fontSize: 14
  }
}));

const Navbar = () => {
  const classes = styles();
  console.log("classes: ", classes);
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/sources" component={Footer} />
        <Route path="/gallery" component={Gallery} />
      </div>

      <AppBar>
        <div className={cssStyles.navbar}>
          <ul className={cssStyles.listItems}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                gutterBottom="true"
              >
                Home
              </Button>
            </Link>

            <Link to="/gallery">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Past Masterpieces
              </Button>
            </Link>

            <Link to="/sources">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Sources
              </Button>
            </Link>

            {/* <li id="list-item">Home</li>
            <li id="list-item">Past Masterpieces</li> */}
          </ul>
        </div>
      </AppBar>
    </HashRouter>
  );
};

export default Navbar;
