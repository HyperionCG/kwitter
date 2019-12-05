import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { withAsyncAction } from "../HOCs";
import "./userInput.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  }
  // button: {
  //   margin: theme.spacing(1)
  // }

  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 500,
  //   background: "white"
  // }
}));

class UserInput extends React.Component {
  state = {
    text: ""
  };

  handlePost = event => {
    event.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form
        className={useStyles.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handlePost}
      >
        <div className="userInputDiv">
          <TextField
            id="outlined-basic"
            className="userInputBox"
            label="Type Here"
            margin="normal"
            variant="outlined"
            input
            type="text"
            name="text"
            autoFocus
            required
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(UserInput);
