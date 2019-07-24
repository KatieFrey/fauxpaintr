import React, { Component } from "react";
import StylePic from "../StylePic/StylePic";
import UploadPic from "../UploadPic/UploadPic";

class StyleTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylePic: "",
      contentPic: "",
      result: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const model = `models/${this.state.stylePic}`;

    //Acquire the id
    const inputImg = document.getElementById("inputImg");
    const style = await window.ml5.styleTransfer(model);
    const result = await style.transfer(inputImg);
    this.setState({ result: result.src });
  };

  render() {
    return (
      <div>
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
          <br />
          <br />
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

export default StyleTransfer;
