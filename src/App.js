import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import StylePic from "./Components/StylePic/StylePic";
import UploadPic from "./Components/UploadPic/UploadPic";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stylePic: "",
      contentPic: "",
      result: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("submitting....");
    const model = `models/${this.state.stylePic}`;
    console.log("preparing style....", model);
    const inputImg = document.getElementById("inputImg");
    console.log("capturing input image....");
    //ML5 returns a promise
    const style = await window.ml5.styleTransfer(model);
    console.log("style prepared, using the style....");
    const result = await style.transfer(inputImg);
    console.log("fast style transfer completed....");
    this.setState({ result: result.src });
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
        <section className="flex-container">
          <div className="style-pic">
            <StylePic
              stylePic={this.state.stylePic}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <div className="upload-pic">
            <UploadPic
              contentPic={this.state.contentPic}
              handleChange={this.handleChange}
            />
          </div>
          <div id="output">
            {this.state.result ? (
              <img
                src={this.state.result}
                id="outputImg"
                alt="created by fast style transfer"
              />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
