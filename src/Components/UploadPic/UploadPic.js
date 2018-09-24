import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

class UploadPic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h1>Choose a picture</h1>
        <div>
          <br />
          <br />
          {this.props.contentPic ? (
            <img
              src={`./images/${this.props.contentPic}.jpg`}
              alt="content one"
              id="inputImg"
            />
          ) : (
            <div>
              <h1>"What picture would you like to style?"</h1>
            </div>
          )}
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <FormControl>
            <Select
              className="select-bar"
              value={this.props.contentPic}
              name="contentPic"
              onChange={this.props.handleChange}
            >
              <MenuItem value={"habibi"}>Habibi</MenuItem>
              <MenuItem value={"patagonia"}>Patagonia</MenuItem>
              <MenuItem value={"monalisa"}>Mona Lisa</MenuItem>
              <MenuItem value={"corgi"}>Corgi</MenuItem>
              <MenuItem value={"corgi_2"}>Corgi 2</MenuItem>
              <MenuItem value={"girlwithpearl"}>Girl With Pearl</MenuItem>
              <MenuItem value={"lower_manhattan"}>Lower Manhattan</MenuItem>
              <MenuItem value={"silly_cat"}>Silly Cat</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default UploadPic;
