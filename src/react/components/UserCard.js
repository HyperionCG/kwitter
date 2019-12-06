import React from "react";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";

// const fakeUser = {
//   pictureLocation: null, // URI to download the picture
//   username: "testuser",
//   displayName: "Taylor Hurt",
//   about: "",
//   googleId: null,
//   createdAt: "2019-11-18T15:10:16.100Z",
//   updatedAt: "2019-11-18T15:10:16.100Z"
// };

class UserCard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.username !== prevProps.username) {
      this.props.getUser(this.props.username);
    }
  }

  render() {
    if (this.props.result === null) {
      return <Spinner name="circle" color="blue" />;
    }

    const user = this.props.result.user;

    return (
      <div
        style={{
          background: "white",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1em",
          margin: "2em",
          maxWidth: "20em"
        }}
      >
        <img
          style={{ maxWidth: "20em" }}
          src={
            // user.pictureLocation
            "https://icecreamconvos.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-17-at-10.35.26-AM-700x590.png"
            // ? "https://kwitter-api.herokuapp.com" + user.pictureLocation
            // : "http://simpleicon.com/wp-content/uploads/user1.svg"
          }
          alt={"a thing"}
        />
        <h3>{user.displayName}</h3>
        <p>{user.username}</p>

        {user.about ? (
          <p>{user.about}</p>
        ) : (
          <p style={{ color: "grey" }}>This is your bio information.</p>
        )}

        <p>Created: {new Date(user.createdAt).toDateString()}</p>
        <p>Last Updated: {new Date(user.updatedAt).toDateString()}</p>
      </div>
    );
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  getUser
*/
export default withAsyncAction("users", "getUser")(UserCard);
