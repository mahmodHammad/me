// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
      background:theme.palette.footer.default,
    padding: 20
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        align="center"
        variant="body1"
        gutterBottom
        color="secondary"
      >
       
				© 2020 Mahmoud Hammad. All rights reserved.
			 
      </Typography>
    </div>
  );
}
