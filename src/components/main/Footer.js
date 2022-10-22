import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.secondary,
    width: "100%",
    position: "relative"
  },
  link: {
    // color: "white",
    fontFamily: "Roboto",
    fontSize: ".85rem",
    textDecoration: "none"
  },
  heading: {
    color: theme.palette.common.main,
    fontFamily: "Roboto",
    fontSize: ".85rem",
    textDecoration: "none"
  },
  }));


export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>

    <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
            <Grid item className={classes.heading}>
            <h2> For Customers</h2>
            </Grid>
            <Grid item className={classes.link}>
            <h4> Orders </h4>
            </Grid>
            <Grid item className={classes.link}>
            <h4> Addresses </h4>
            </Grid>
            <Grid item className={classes.link}>
            <h4> Account details</h4>
            </Grid>

          </Grid>

        </Grid>
        <Grid item xs={6} sm={3}>
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
            <Grid item className={classes.heading}>
            <h2> Quick Links</h2>
            </Grid>
            <Grid item className={classes.link}>
            <h4> About Us </h4>
            </Grid>
            <Grid item className={classes.link}>
            <h4> Contact Us </h4>
            </Grid>
            <Grid item className={classes.link}>
            <h4> Shop </h4>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
            <Grid item className={classes.heading}>
            <h2> Follow Us</h2>
            </Grid>
            

          </Grid>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
            <Grid item className={classes.heading}>
            <h2> Contact Info</h2>
            </Grid>
            <Grid item>
            <h4> <center>Address:<br/>teen pani haldwni nainital uttarakhand </center></h4>
            </Grid>
            <Grid item>
            <h4> mobile: 8218351347 </h4>
            </Grid>
            <Grid item>
            <h4> Email: info@merashehar.com</h4>
            </Grid>

          </Grid>
        </Grid>
    </Grid>
    </footer>
    )

  }