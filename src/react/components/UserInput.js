import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing(3),
  },
 
  textField: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
    width: 500,
  },
}));

export default function UserInput() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          className={classes.textField}
          label="What's on your mind?"
          margin="normal"
          variant="outlined"
        />
          <Button variant= "contained" className={classes.button}>Post</Button>
      </div>
    </form>
  );
}