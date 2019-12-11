import React from "react";
import { Link } from ".";
import { withAsyncAction } from "../HOCs";
import "./UserList.css";

class UserList extends React.Component {
  state = {
    filteredUsers: []
  };
  componentDidMount() {
    this.props.getUsers();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.result !== this.props.result) {
      this.setState({ filteredUsers: this.props.result.users });
    }
  }

  handleFilterUsers = event => {
    const filterValue = event.target.value;
    const newFilteredUsers = this.props.result.users.filter(user => {
      if (user.username.includes(filterValue)) {
        return true;
      }
      return false;
    });
    this.setState({ filteredUsers: newFilteredUsers });
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          onChange={this.handleFilterUsers}
        />
        {this.props.result &&
          this.state.filteredUsers.map(user => {
            return (
              <div className="user-result-box">
                <img
                  width="20"
                  height="30"
                  alt="."
                  src={`https://kwitter-api.herokuapp.com/users/${user.username}/picture`}
                />
                <Link to={`/profile/${user.username}`}>
                  <p>{user.username}</p>
                </Link>
              </div>
            );
          })}
        ;
      </>
    );
  }
}

export default withAsyncAction("users", "getUsers")(UserList);
