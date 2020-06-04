// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import avatar from "../Assets/avatar.svg";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    paddingTop: 140,
    paddingBottom: 140
    //  border: "solid 1px red"
  },
  header: { fontSize: "3.8rem", marginTop: 40, color: theme.palette.txt.title },
  body: { fontSize: "1.8rem", color: theme.palette.txt.body },
  body2: { fontSize: "1.6rem" },

  intro: { paddingRight: 30 },
  button: {
    marginTop: 40,
    borderRadius: 50,
    color: "#fff",
    padding: "12px 34px",
    fontSize: "1.2rem",
    textShadow:"1px 1px 2px #0005"
  },
  img: {
    height: "100%",
    borderRadius: 3
  },
  imgCover: {
    // marginTop: 30,
    width: "100%",
    height: 320,
    padding: 20,
    textAlign: "center",
    margin: "20px auto",
    borderRadius: 4,
    transition: "ease-in-out 0.3s",
    "&:hover": {
      paddingTop: 0
    }
  },
  "@media (max-width:  960px)": {
    root: {
      textAlign: "center",
      padding: "30px 10px"
    },
    header: {
      fontSize: "2.8rem",
      marginTop: 10
    },
    body: {
      fontSize: "1.3rem"
    },
    body2: { fontSize: "1.2rem" },
    button: {
      padding: "10px 24px",
      fontSize: "1rem",
      marginBottom: 60
    },
    intro: { paddingRight: 0 }
  },
  "@media (max-width: 600px)": {
    imgCover:{
      marginTop:40,
      height:260,
    },
    header: {
      fontSize: "2.2rem"
    },
    body: {
      fontSize: "1.2rem"
    },
    body2: { fontSize: "1.1rem" },
    button: {
      padding: "8px 22px",
      fontSize: "0.8rem",
      marginBottom: 20,
      marginTop: 20
    },
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
          Hey, I'm Mahmoud
        </Typography>
        <Typography className={classes.body} variant="h6" component="h2">
          <b>Full-stack web developer / Javascript Lover</b>. <br />
          <span className={classes.exsp}></span>
          <span className={classes.body2}>
            I create cutom websites to help businesses do better online
          </span>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          size="large"
          component="a"
          href="#projects"
          startIcon={<AccountTreeIcon />}
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
