
import React from "react";
import { LoginForm, Menu, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./pagesCSS/login.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2 style={{
          color: "white",
        }}>Welcome to Our Water Kwitter App
        </h2>
        <div id="login">
          <LoginForm />
          <p>
            Don't have an account?<Link to="/register"> Register here</Link>
          </p>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
