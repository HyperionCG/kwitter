import React from "react";
import {
  Menu,
  UserCard,
  UserInput,
  MessageList,
  MessageCard
} from "../components";
import { userIsAuthenticated } from "../HOCs";
import Grid from "@material-ui/core/Grid";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <Grid container spacing={2}>
          <UserCard />
          <Grid>
            <UserInput />
            {/* MessageList goes here */}
            <MessageCard
              username="username1"
              text="text of message 1"
              createdAt="2019-11-18T16:07:42.936Z"
            />
            <MessageCard
              username="username2"
              text="text of message 2"
              createdAt="2019-11-18T16:07:42.936Z"
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
