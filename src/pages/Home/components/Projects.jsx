// Contains a grid of your projects
// When click on the project it opens project details page with project details
// The project part in the section contains image and name


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
    <div id="projects" className={classes.root}>
    
    </div>
  );
}
