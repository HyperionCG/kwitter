import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing(1)
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

// export default function UserInput() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="outlined-basic"
//           className={classes.textField}
//           label="Outlined"
//           margin="normal"
//           variant="outlined"
//         />
//           <Button className={classes.button}>Default</Button>
//       </div>
//     </form>
//   );
// }

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userID: "testuser1",
      value: ""
    };
  }

  handleCreateMessage = event => {
    if (event.key === "Enter" && this.state.value !== "") {
      const newMessages = this.state.messages.slice();
      newMessages.push({
        message: {
          id: Math.floor(Math.random() * 10000000),
          text: this.state.value,
          username: "testuser1",
          createdAt: "2019-11-22T04:51:34.273Z",
          likes: []
        }
      });

      this.setState({ messages: newMessages, value: "" });
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form className={useStyles.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-basic"
            className={useStyles.textField}
            label="Outlined"
            margin="normal"
            variant="outlined"
            onKeyDown={this.handleCreateMessage}
            onChange={this.handleChange}
          />
          <Button
            onClick={this.handleCreateMessage}
            onChange={this.handleChange}
            className={useStyles.button}
          >
            Default
          </Button>
        </div>
      </form>
    );
  }
}

export default UserInput;
