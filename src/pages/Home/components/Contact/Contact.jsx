import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ContactForm from "./ContactForm"
const submitURL =
  "https://script.google.com/macros/s/AKfycbwjbT_B94deK2f766IkAEpp2XIkPf83ld1GQ05QNVu_gWCVBMCG/exec";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    marginTop: 120,
    background: theme.palette.contact.bg
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
    marginBottom: 10,
    fontSize: "1.2rem"
  },
  "@media (max-width:  600px)": {
    body: {
      fontSize: "1rem"
    }
  },
  "@media (max-width:  730px)": {
    hide: {
      display: "none"
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom className={classes.header}>
          Get in touch
        </Typography>
        <Typography variant="h2" gutterBottom className={classes.body}>
          I am interested in freelance opportunities, espacially ambitious or
          large projects.
          <span className={classes.hide}>
            <br />
          </span>{" "}
          However, if you have other request or question. don't hesitate to
          contact me.
        </Typography>

       <ContactForm/>
      </Container>
    </div>
  );
}
