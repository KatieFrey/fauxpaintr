import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import StyleTransfer from "./Components/StyleTransfer/StyleTransfer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
