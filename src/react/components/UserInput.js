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
    margin: theme.spacing(1),
  },
 
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
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
          label="Outlined"
          margin="normal"
          variant="outlined"
        />
          <Button className={classes.button}>Default</Button>
      </div>
    </form>
  );
}