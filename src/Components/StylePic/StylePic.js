import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import "./StylePic.css";

class StylePic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h1>Choose a style</h1>
        <div>
          <br />
          <br />
          {this.props.stylePic ? (
            <img src={`./images/${this.props.stylePic}.jpg`} alt="style one" />
          ) : (
            <div>
              <h1>"What style would you like your picture to look like?"</h1>
            </div>
          )}
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <FormControl>
            <Select
              className="select-bar"
              value={this.props.stylePic}
              name="stylePic"
              onChange={this.props.handleChange}
            >
              <MenuItem value={"wave"}>The Wave</MenuItem>
              <MenuItem value={"fuchun"}>Fuchun</MenuItem>
              <MenuItem value={"rain_princess"}>Rain Princess</MenuItem>
              <MenuItem value={"scream"}>The Scream</MenuItem>
              <MenuItem value={"udnie"}>Udnie</MenuItem>
              <MenuItem value={"wreck"}>Wreck</MenuItem>
              <MenuItem value={"zhangdaqian"}>Zhang Daquian</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">
            PROCESS
          </Button>
        </form>
      </div>
    );
  }
}

export default StylePic;
