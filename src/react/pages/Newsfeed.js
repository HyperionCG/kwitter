import React from "react";
import { UserInput, Menu, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Newsfeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Newsfeed</h2>
        <UserInput />
        <MessageList />
      </>
    );
  }
}

//test comment

export default userIsAuthenticated(Newsfeed);
