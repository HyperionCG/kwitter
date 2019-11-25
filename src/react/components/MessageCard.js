import React from "react";

// const fakeMessage = {
//   id: 938,
//   text: "This is my second message!",
//   username: "testuser",
//   createdAt: "2019-11-18T16:07:42.936Z",
//   likes: []
// };

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
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
