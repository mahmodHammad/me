// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Typography
        align="center"
        variant="h3"
        component="h1"
        gutterBottom
        color="primary"
      >
        Full-stack web developer
      </Typography>
      <Typography align="center" variant="h6" component="h2" color="primary">
        I design and code beautifully simple things, and I love what I do.
      </Typography>
    </div>
  );
}
