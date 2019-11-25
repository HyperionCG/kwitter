import React from "react";
// import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <p>MessageCard goes here</p>
          // <MessageCard
          //   username={message.username}
          //   text={message.text}
          //   createdAt={message.createdAt}
          // />
        );
      })
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
