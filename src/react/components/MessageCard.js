import React from "react";

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "white",
          border: "1px solid black",
          padding: "1em",
          borderRadius: "10px",
          margin: "2em"
        }}
      >
        <h4>{this.props.username}</h4>
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
        <p>{new Date(this.props.createdAt).toTimeString()}</p>
      </div>
    );
  }
}

export default MessageCard;
