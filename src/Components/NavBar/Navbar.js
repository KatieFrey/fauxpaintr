import React from "react";
import cssStyles from "./NavBar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const styles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing.unit * 0.7,
    marginRight: theme.spacing.unit * 5,
    //background: "linear-gradient(45deg, #b71c1c 30%, #5d4037 90%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    backgroundColor: theme.palette.primary.backgroundColor,
    fontSize: 14
  },
  text: {
    color: theme.palette.secondary.main
  }
}));

const Navbar = () => {
  const classes = styles();
  return (
    <AppBar>
      <div className={cssStyles.navbar}>
        <ul className={cssStyles.listItems}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              gutterBottom="true"
            >
              <Typography className={classes.text} variant="h6" component="h6">
                Home
              </Typography>
            </Button>
          </Link>

          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <Typography className={classes.text} variant="h6" component="h6">
                Past Masterpieces
              </Typography>
            </Button>
          </Link>

          <Link to="/sources" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <Typography className={classes.text} variant="h6" component="h6">
                Sources
              </Typography>
            </Button>
          </Link>

          {/* <li id="list-item">Home</li>
            <li id="list-item">Past Masterpieces</li> */}
        </ul>
      </div>
    </AppBar>
  );
};

export default Navbar;
