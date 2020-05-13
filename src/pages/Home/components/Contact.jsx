// picture&details

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,

    marginTop: 120,
    background: "#d5d5d555"
  },
  header: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.txt.title
  },
  body: {
    color: theme.palette.txt.body,
    marginTop: 5,
    textAlign: "center",
    marginBottom: 30
  },
  inputContainer: {
    padding: 20
  },
  buttonContainer: { textAlign: "center", marginTop: 20 },
  button: {
    color: theme.palette.secondary.main,
    background: "#fff",
    "&:hover": {
      color: "#fff",
      background: theme.palette.secondary.main
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom className={classes.header}>
          Contact Info
        </Typography>
        <form action="#">
          <Grid justify="center" container>
            <Grid className={classes.inputContainer} item xs={12} md={6}>
              <TextField fullWidth label="name" placeholder="enter your name" />
            </Grid>
            <Grid className={classes.inputContainer} item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                placeholder="enter your E-Mail"
              />
            </Grid>
            <Grid className={classes.inputContainer} item xs={12}>
              <TextField
                fullWidth
                multiline={true}
                rows={4}
                label="Message"
                placeholder="enter your Message"
              />
            </Grid>
            <Grid className={classes.buttonContainer} item xs={5} lg={3} md={4}>
              <Button
                fullWidth
                color="secondary"
                className={classes.button}
                variant="outlined"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
