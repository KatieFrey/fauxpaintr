import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import cssStyles from "./Main.module.css";
import { Link } from "react-router-dom";
import { Typography, Card } from "@material-ui/core";

const styles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary.backgroundColor,
    //background: "linear-gradient(45deg, #b71c1c 30%, #5d4037 90%)",
    fontSize: 16,
    fontWeight: "bolder"
  },
  text: {
    color: theme.palette.secondary.main
  },
  mainCard: {
    backgroundColor: "#000000"
  }
}));

const Main = () => {
  const classes = styles();

  return (
    <div className={cssStyles.main}>
      <div>
        <Card className={cssStyles.mainCard}>
          Wish you could paint like that? Well now you can! Sorta . . .{" "}
          <Link to="/themagic" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={classes.button}
              size="large"
              fullWidth
            >
              <Typography className={classes.text} variant="h6" component="h6">
                Try Us Out
              </Typography>
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;
