// Contains a grid of your projects
// When click on the project it opens project details page with project details
// The project part in the section contains image and name


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 120,
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
        Projects
      </Typography>
    </div>
  );
}
