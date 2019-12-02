import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { withAsyncAction } from "../HOCs";

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
  state = {
    text: ""
  };

  // handleCreateMessage = event => {
  //   if (event.key === "Enter" && this.state.value !== "") {
  //     event.preventDefault();
  //     const newMessages = this.state.messages.slice();
  //     newMessages.push({
  //       message: {
  //         id: Math.floor(Math.random() * 10000000),
  //         text: this.state.value,
  //         username: "testuser1",
  //         createdAt: "2019-11-22T04:51:34.273Z",
  //         likes: []
  //       }
  //     });

  //     console.log("message created");
  //     console.log(newMessages);

  //     this.setState({ messages: newMessages, value: "" });
  //   }
  // };

  handlePost = event => {
    event.preventDefault();
    this.props.postMessage(this.state);
  };

  handleChange = event => {
    //this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form
        className={useStyles.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handlePost}
      >
        <div>
          <TextField
            id="outlined-basic"
            className={useStyles.textField}
            label="Outlined"
            margin="normal"
            variant="outlined"
            // onKeyDown={this.handleCreateMessage}
            onChange={this.handleChange}
            // value={this.state.value}
          />
          <button type="submit">Submit Message</button>
        </div>
      </form>
    );
  }
}

export default /* withAsyncAction("messages", "postMessage")(*/ UserInput;
