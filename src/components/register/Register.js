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
    margin: theme.spacing(0),
    minWidth: 500,
    minHeight: 60,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function SimpleContainer() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <React.Fragment>

      <Container maxWidth="md" className={classes.container}>
          <DialogTitle id="form-dialog-title" className={classes.paper}>Tell us a little about yourself</DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.paper}>
              We'll help you get started based on your responses
            </DialogContentText>
           
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Are you already Selling?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

              >
                <MenuItem value={10}>I'm just playing around</MenuItem>
                <MenuItem value={20}>I'm not selling products yet</MenuItem>
                <MenuItem value={30}>I'm selling, just not online</MenuItem>
                 <MenuItem value={40}>I sell with a different system</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">What is your current revenue?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"

              >
                <MenuItem value={10}>0(I'm just getting started)</MenuItem>
                <MenuItem value={20}>Up to 500$</MenuItem>
                <MenuItem value={30}>500$ to 1000$</MenuItem>
                <MenuItem value={40}>1000$ to 1500$</MenuItem>
                <MenuItem value={40}>+1500$</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Which industry will you be operating in?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                
              >
                <MenuItem value={10}>Beauty</MenuItem>
                <MenuItem value={20}>Clothing</MenuItem>
                <MenuItem value={30}>Electronics</MenuItem>
                 <MenuItem value={40}>I haven't decided yet</MenuItem>
              </Select>
            </FormControl>
            
          <FormControl required component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Are you setting up a store for a client?</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="Yes, Im a designing/developing a store for a client" />}
                label="Yes, Im a designing/developing a store for a client"/>
            </FormGroup>
          </FormControl>


          </DialogContent>
          <DialogActions>
            <Button  color="primary">
              Skip
            </Button>
            <Button  color="primary">
              Next
            </Button>
          </DialogActions>
      </Container>

    </React.Fragment>
  );
}