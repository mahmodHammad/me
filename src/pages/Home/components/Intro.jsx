// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import avatar from "../Assets/avatar.svg";
const img =
  "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/p720x720/70592083_2381858148598278_978283899513733120_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=bqVWERSGLKwAX_1Pe9q&_nc_ht=scontent-hbe1-1.xx&_nc_tp=6&oh=fd87024cdbed82773b569ec449655838&oe=5EDEAF5F";
const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    paddingTop: 100,
    paddingBottom: 150
    //  border: "solid 1px red"
  },
  header: { fontSize: "3.8rem", marginTop: 40, color: theme.palette.txt.title },
  body: { fontSize: "1.8rem", color: theme.palette.txt.body },
  intro: { paddingRight: 30 },
  button: {
    marginTop: 40,
    borderRadius: 50,
    color: "#fff",
    padding: "14px 32px",
    fontSize: "1.2rem"
  },
  img: {
    height: 400,
    width: 300,
    borderRadius: 3
  },
  imgCover: {
    // marginTop: 30,
    width: 322,
    height: 400,
    // background: "#222",
    padding: 10,
    textAlign: "center",
    margin: "auto",
    borderRadius: 4,
    transition: "ease-in-out 0.2s",
    "&:hover": {
      padding: 0
    }
  },
  "@media (max-width: 600px)": {
    header: {
      fontSize: "2.4rem"
    },
    body: {
      fontSize: "1.3rem"
    },
    button: {
      padding: "8px 22px",
      fontSize: "0.8rem"
    }
  },
  "@media (max-width:  960px)": {
    root: {
      padding: 20
    },
    header: {
      fontSize: "2.8rem",
      marginTop: 10
    },
    body: {
      fontSize: "1.3rem"
    },
    button: {
      padding: "10px 24px",
      fontSize: "1rem",
      marginBottom: 60
    },
    intro: { paddingRight: 0 }
  },

  "@media (max-width: 1280px)": {
    exsp: {
      display: "none"
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.intro} item xs={12} md={8}>
        <Typography
          className={classes.header}
          variant="h1"
          component="h1"
          gutterBottom
        >
          Hey, i'm Mahmoud
        </Typography>
        <Typography className={classes.body} variant="h6" component="h2">
          <b>Full-stack web developer / Javascript Lover</b>.{" "}
          <span className={classes.exsp}>
            <br />
          </span>
          I create cutom websites to help businesses do better online
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="large"
          component="a"
          href="#projects"
        >
          My projects
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className={classes.imgCover}>
          <img className={classes.img} src={avatar} alt="Mahmoud Hammad" />
        </div>
      </Grid>
    </Grid>
  );
}
