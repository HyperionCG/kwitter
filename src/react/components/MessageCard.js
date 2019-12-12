import React from "react";
import { DeleteMessage, Link, ToggleLikeButton } from ".";
import "./MessageCard.css";

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
        <img
          width="50"
          height="60"
          alt="user"
          src={`https://kwitter-api-benjmm.herokuapp.com/users/${this.props.username}/picture`}
        />
        <Link to={`/profile/${this.props.username}`}>
          <h4>{this.props.username}</h4>
        </Link>{" "}
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
        <p>{new Date(this.props.createdAt).toTimeString()}</p>
        <p>{this.props.likes.length} Likes</p>
        <ToggleLikeButton messageId={this.props.id} likes={this.props.likes} />
        <DeleteMessage
          username={this.props.username}
          messageId={this.props.id}
        />
      </div>
    );
  }
}

export default MessageCard;
