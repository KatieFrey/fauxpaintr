import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import StylePic from "./Components/StylePic/StylePic";
import UploadPic from "./Components/UploadPic/UploadPic";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Main />
        </main>
        <section className="flex-container">
          <div className="style-pic">
            <StylePic />
          </div>
          <div className="upload-pic">
            <UploadPic />
          </div>
        </section>
        <footer>{/* <Footer /> */}</footer>
      </div>
    );
  }
}

export default App;
