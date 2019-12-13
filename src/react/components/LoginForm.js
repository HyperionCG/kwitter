import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
// import "./LoginForm.css";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
  
  paper: {
    margin: '250 px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    // height: "100 px",
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
}
};

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error, classes } = this.props;
    return (
      
        <div>
           <CssBaseline />
           {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      
      <div className={styles.paper}>
      

        <form className={styles.form} onSubmit={this.handleLogin}>
          {/* <label htmlFor="username">Username</label> */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="text"
            name="username"
            id="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="password"
            type="password"
            name="password"
            id="password"
            required
            onChange={this.handleChange}
          />
          <Button 
          className={styles.submit} 
          type="submit" 
          disabled={loading}
          fullWidth
          variant="contained"
          color="primary"
          >
            Login
          </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
        </div>
      
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
