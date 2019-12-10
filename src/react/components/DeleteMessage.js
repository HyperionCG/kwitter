import React from "react";
import { withAsyncAction, connect } from "../HOCs";
import "./deleteButton.css";

class DeleteMessage extends React.Component {
  handleDeleteMessage = event => {
    const confrimed = window.confirm("Delete Message?");

    if (confrimed) {
      this.props.deleteMessage(this.props.messageId);
    }
  };

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <button className="deleteButton" onClick={this.handleDeleteMessage}>
          Delete
        </button>
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
  withAsyncAction("messages", "deleteMessage")(DeleteMessage)
);
