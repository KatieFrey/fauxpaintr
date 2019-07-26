import React, { Component } from "react";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import cssStyles from "./App.module.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={cssStyles.app}>
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
