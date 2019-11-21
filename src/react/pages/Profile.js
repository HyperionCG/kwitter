import React from "react";
import { Menu, UserCard, UserInput, PostCard } from "../components";
import { userIsAuthenticated } from "../HOCs";
import Grid from '@material-ui/core/Grid';


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
            <PostCard />
            <PostCard />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
