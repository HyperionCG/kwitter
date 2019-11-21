import React from "react";
import { LoginForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./pagesCSS/login.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <div id="login">
          <LoginForm />
          <p>Don't have an account? Register here</p>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
