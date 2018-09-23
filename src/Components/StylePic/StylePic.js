import React from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
import { connect } from "react-redux";
import { fetchSingleBook } from "../../reducer/pictureReducer";
import "./StylePic.css";

class StylePic extends React.Component {
  constructor() {
    super();
    this.state = {
      picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const picture = this.props.picture;
    console.log("Picture Object: ", picture);
    this.props.getPic(picture.id);
  }

  render() {
    return (
      <div className="card">
        <h1>Choose a style</h1>
        <NativeSelect className="select-bar" onChange={this.handleChange}>
          <option name="vincent" value="vincent">
            Vincent Van Gogh
          </option>
          <option name="picasso" value="picasso">
            Picasso
          </option>
          <option name="rembrandt" value="rembrandt">
            Rembrandt
          </option>
          <option name="monet" value="monet">
            Monet
          </option>
        </NativeSelect>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    picture: state.singlePic
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPic: pictureId => dispatch(fetchSingleBook(pictureId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylePic);
