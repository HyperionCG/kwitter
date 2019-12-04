import React from "react";

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "1em",
          borderRadius: "10px",
          margin: "2em",
          background: "white"
        }}
      >
        {this.props.userOwn && (
          <button
            style={{
              width: "5%",
              fontSize: "10px",
              background: "red"
            }}
          >
            Delete
          </button>
        )}
        <h4>{this.props.username}</h4>
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
        <p>{new Date(this.props.createdAt).toTimeString()}</p>
      </div>
    );
  }
}

export default MessageCard;
