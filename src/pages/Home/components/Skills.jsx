// picture&details

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import frontend from "./designer.svg";
import backend from "./frontend.svg";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    marginTop: 20
  },
  header: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    color: theme.palette.txt.title
  },
  body: {
    color: theme.palette.txt.body,
    marginTop: 5
  },
  paper: {
    borderRadius: 10
  },
  cardItem: {
    textAlign: "center",
    padding: "50px 50px"
  },
  item: {
    margin: "30px auto",

  },
  logo: {
    marginBottom: 33
  },
  secHeader: {
    marginTop: 30
  },
  lastcardItem: { borderLeft: "solid 1px #ddd" },
  "@media (max-width: 600px)": {
    root: {
      marginTop: 80
    },
    lastcardItem: {
      marginTop: 30
    }
  },
  "@media (max-width: 960px)": {
    lastcardItem: { borderLeft: "none", borderTop: "solid 1px #ddd" }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Grid className={classes.item} container>
          <Grid className={classes.cardItem} item xs={12} md={6}>
            <img className={classes.logo} src={frontend} alt="frontend" />
            <Typography gutterBottom variant="h1" className={classes.header}>
              Front-end Developer
            </Typography>
            <Typography gutterBottom variant="body1" className={classes.body}>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              className={classes.secHeader}
              color="secondary"
            >
              Languages I speak:
            </Typography>
            <Typography variant="body1" className={classes.body}>
              HTML5, CSS3, Sass, JavaScript, ES6
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              className={classes.secHeader}
              color="secondary"
            >
              FrameWorks, and Libraries:
            </Typography>
            <Typography variant="body1" className={classes.body}>
              React, Redux, Material-UI, Bootstrap4, jQuery
            </Typography>
          </Grid>

          {/* -------------------------------------------------------------- */}
          
          <Grid
            className={`${classes.cardItem} ${classes.lastcardItem} `}
            item
            xs={12}
            md={6}
          >
            <img className={classes.logo} src={backend} alt="backend" />
            <Typography gutterBottom variant="h1" className={classes.header}>
              Back-end Developer
            </Typography>
            <Typography gutterBottom variant="body1" className={classes.body}>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              className={classes.secHeader}
              color="secondary"
            >
              Languages I speak:
            </Typography>
            <Typography variant="body1" className={classes.body}>
              JavaScript (Node.js)
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              className={classes.secHeader}
              color="secondary"
            >
              FrameWorks, and Libraries:
            </Typography>
            <Typography variant="body1" className={classes.body}>
              Express.js, MongoDb, Firebase
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
