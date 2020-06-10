import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 60,
    paddingBottom: 0,
    marginTop: 140,
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
    padding: 12,
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
        <ContactForm />
      </Container>
        <ContactMethods />
    </div>
  );
}
