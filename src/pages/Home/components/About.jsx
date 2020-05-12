// picture&details

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20
  },
  header:{
    fontWeight:"bold"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        align="center"
        variant="h6"
        component="h2"
        gutterBottom
        color="primary"
        className={classes.header}
      >
        Hi, i'am Mamoud. Nice to meet you.
      </Typography>

      <Typography
        align="center"
        variant="body1"
        gutterBottom
        color="primary"
      >
        About Me
      </Typography>
    </div>
  );
}
