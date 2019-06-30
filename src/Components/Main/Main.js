import React from "react";
import Button from "@material-ui/core/Button";
import StyleTransfer from "../StyleTransfer/StyleTransfer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./Main.css";
import { Link, Route, Router, hashHistory, IndexRoute } from "react-router";

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 2,
    background: "linear-gradient(45deg, #b71c1c 30%, #5d4037 90%)",
    fontSize: 16,
    fontWeight: "bolder"
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = props;
    return (
      <Router>
        <Route path="/themagic" component={StyleTransfer} />
        <div>
          <div className="main" />
          <div className="p-parent">
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
      </Router>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
