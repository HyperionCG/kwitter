import React from "react";
import { withAsyncAction } from "../HOCs";
import MessageCard from "./MessageCard";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <MessageCard
            username={message.username}
            text={message.text}
            createdAt={message.createdAt}
          />
        );
      })
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
