import React from "react";
import ReactDom from "react-dom";
import "./NavBar.css";
import AppBar from "@material-ui/core/AppBar";

class Navbar extends React.Component {
  render() {
    return (
      <AppBar>
        <div className="navbar">
          <ul className="list-items">
            <li id="list-item">Home</li>
            <li id="list-item">Past Masterpieces</li>
          </ul>
        </div>
      </AppBar>
    );
  }
}

export default Navbar;
