import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Mail from "../../../../Icons/Mail";
import GH from "../../../../Icons/GH";
import Twitter from "../../../../Icons/Twiter";
import LI from "../../../../Icons/LI";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 90,
    paddingBottom: 10,
    marginTop: 140,
    background: theme.palette.contact.bg
  },
  iconLable: { marginLeft: 15 },
  connect: {
    background: "linear-gradient(90deg, #1f1f1f 5%, #0000 95%)",
    borderLeft: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 20,
    textAlign: "Left",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom:30
  },
  icons: {
    color: theme.palette.primary.main,
    fontSize: 29,

    margin: "12px 0",
    "&:hover": {
      color: "#fff"
    }
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
          i would like to create things with fun{" "}
          <span aria-label="smile" role="img">
            😄
          </span>{" "}
          <br /> Feel free to say hello!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={10}>
            <ContactForm />
          </Grid>
          <Hidden mdDown={true}>
          <Grid conteiner item xs={12} lg={2} className={classes.connect}>
            <Grid item xs={12}>
              <IconButton component="a" href="mailto:ma7mod.7ammad@gmail.com">
                <Mail className={classes.icons} />{" "}
                <Typography className={classes.iconLable} color="primary">
                  Email
                </Typography>
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton component="a" href="mailto:ma7mod.7ammad@gmail.com">
                <LI className={classes.icons} />{" "}
                <Typography className={classes.iconLable} color="primary">
                  LinkedIn
                </Typography>
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton component="a" href="mailto:ma7mod.7ammad@gmail.com">
                <GH className={classes.icons} />
                <Typography className={classes.iconLable} color="primary">
                  Github
                </Typography>
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton component="a" href="mailto:ma7mod.7ammad@gmail.com">
                <Twitter className={classes.icons} />
                <Typography className={classes.iconLable} color="primary">
                  Twitter
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
        </Grid>

      </Container>
      
      <Hidden lgUp={true}>
        <ContactMethods />
      </Hidden>
    </div>
  );
}
