// import React from "react";
// import { Spinner } from ".";
// import { withAsyncAction } from "../HOCs";
// import "./RegisterForm.css";
// import Avatar from '@material-ui/core/Avatar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';


// class RegisterForm extends React.Component {
//   state = {
//     username: "",
//     displayName: "",
//     password: ""
//   };

//   handleRegister = e => {
//     e.preventDefault();
//     this.props.register(this.state);
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//    const useStyles = makeStyles (theme => ({
//     root: {
//       height: '100vh',
//     },
//     image: {
//       backgroundImage: 'url(https://source.unsplash.com/random)';
//       backgroundRepeat: 'no-repeat';
//       backgroundColor:
//         theme.palette.type === 'dark' ? theme.palette.grey[900]  theme.palette.grey[50];
//       backgroundSize: 'cover';
//       backgroundPosition: 'center';
//     },
//     paper: {
//       margin: theme.spacing(8, 4);
//       display: 'flex';
//       flexDirection: 'column';
//       alignItems: 'center';
//     },
//     avatar: {
//       margin: theme.spacing(1);
//       backgroundColor: theme.palette.secondary.main;
//     },
//     form: {
//       width: '100%';
//       marginTop: theme.spacing(1);
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2);
//     }
//   }));

//   render() {
//     //export default function SignInSide() {
//       const classes = useStyles();
//     const { loading, error } = this.props;
//     return (
//       <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//       <React.Fragment>
//         <form id="login-form" onSubmit={this.handleRegister}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             autoFocus
//             required
//             onChange={this.handleChange}
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             required
//             onChange={this.handleChange}
//           />
//           <label htmlFor="displayName">Display Name</label>
//           <input
//             type="text"
//             name="displayName"
//             required
//             onChange={this.handleChange}
//           />
//           <button type="submit" disabled={loading}>
//             Register
//           </button>
//         </form>
//         {loading && <Spinner name="circle" color="blue" />}
//         {error && <p style={{ color: "red" }}>{error.message}</p>}
//       </React.Fragment>
//       <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//         </div>
//       </Grid>
//     </Grid>
//     );
//   }
// }

// export default withAsyncAction("users", "register")(RegisterForm);





import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./RegisterForm.css";

class RegisterForm extends React.Component {
  state = {
    username: "",
    displayName: "",
    password: ""
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleRegister}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <button
            className="registerPagebutton"
            type="submit"
            disabled={loading}
          >
            Register
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "register")(RegisterForm);
