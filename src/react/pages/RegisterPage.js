import React from "react";
import { RegisterForm, Menu, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Register Here</h2>
        <RegisterForm />
        <h4>
          <Link to="/">Go Back</Link>
        </h4>
      </>
    );
  }
}

export default userIsNotAuthenticated(RegisterPage);
