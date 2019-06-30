import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";

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
