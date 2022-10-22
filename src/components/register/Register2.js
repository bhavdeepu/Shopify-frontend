import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../main/Header';
import Footer from '../main/Footer';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container:{
    padding : theme.spacing(20),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    minHeight: 60,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  text:{
    padding:5,
  },
  text1:{
    width: '50%',
  },
  div:{
  }
}));


export default function SimpleContainer2() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <React.Fragment>

      <Container maxWidth="md" className={classes.container}>
          <DialogTitle id="form-dialog-title" className={classes.paper}>Add an address so you can get paid</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.paper}>
              This will be used as your deafult business address.
            </DialogContentText>
            <DialogContentText className={classes.paper}>
              You can always change this later.
            </DialogContentText>

            <div className={classes.div}>
            <TextField className={classes.text1} id="outlined" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" className={classes.text1} label="Last Name" variant="outlined" />
            <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="Address" variant="outlined" />

            <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="Apartment, suit, etc." variant="outlined" />
            <TextField id="outlined-basic" className={classes.text} fullWidth='true' label="City" variant="outlined" />

            <TextField className={classes.text1} id="outlined" label="Phone" variant="outlined" />
            <TextField id="outlined-basic" className={classes.text1} label="Website(optional)" variant="outlined" />


            </div>

            
          <FormControl required component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="This Store is a resigter business" />}
                label="This Store is a resigter business"/>
            </FormGroup>
          </FormControl>


          </DialogContent>
          <DialogActions>
            <Button  color="primary">
              Go to store
            </Button>
          </DialogActions>
      </Container>

    </React.Fragment>
  );
}