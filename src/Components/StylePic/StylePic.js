import React from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./StylePic.css";

class StylePic extends React.Component {
  constructor() {
    super();
    this.state = {
      picture: ""
    };
  }
  render() {
    return (
      <div className="card">
        <h1>Choose a style</h1>
        <NativeSelect className="select-bar">
          <option value="vincent">Vincent Van Gogh</option>
          <option value="picasso">Picasso</option>
          <option value="rembrandt">Rembrandt</option>
          <option value="monet">Monet</option>
        </NativeSelect>
      </div>
    );
  }
}

export default StylePic;
