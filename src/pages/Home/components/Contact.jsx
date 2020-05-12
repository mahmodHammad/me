// picture&details

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
    <div id="contact"className={classes.root}>

    </div>
  );
}
