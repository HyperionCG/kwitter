import React from "react";
import { withAsyncAction, connect } from "../HOCs";

class UploadProfileImg extends React.Component {
  handleUploadProfileImg = event => {
    event.preventDefault();
    var formData = new FormData(event.target);
    this.props.uploadProfileImg(formData);
  };

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <form onSubmit={this.handleUploadProfileImg}>
          <input type="file" name="picture" />
          <input type="submit" value="Upload Picture" />
        </form>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "uploadProfileImg")(UploadProfileImg)
);
