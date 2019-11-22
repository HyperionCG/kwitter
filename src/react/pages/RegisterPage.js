import React from "react";
import { RegisterForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Register Here</h2>
        <RegisterForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(RegisterPage);