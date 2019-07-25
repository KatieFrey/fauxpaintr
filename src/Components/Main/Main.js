import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import cssStyles from "./Main.modules.css";
//import { Route, Router } from "react-router";
import { Link } from "react-router-dom";

const styles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
    background: "linear-gradient(45deg, #b71c1c 30%, #5d4037 90%)",
    fontSize: 16,
    fontWeight: "bolder"
  }
}));

const Main = () => {
  const classes = styles();

  return (
    <div>
      <div>
        <div className={cssStyles.main} />
        <div className={cssStyles.pparent}>
          <p>
            Wish you could paint like that? Well now you can! Sorta . . .{" "}
            <Link to="/themagic">
              <Button
                variant="contained"
                className={classes.button}
                size="large"
                fullWidth
              >
                Try Us Out
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;
