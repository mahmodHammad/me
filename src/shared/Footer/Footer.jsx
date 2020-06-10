// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.footer.bg,
    color: theme.palette.footer.txt
  },
  cc: {
    padding: 15,
    background: theme.palette.footer.cc
  },
  title: {
    padding: 7,
    color: "#bfbfbf",
    fontSize: "0.9rem"
  },
  "@media (max-width: 600px)": {
    title: {
      fontSize: "0.7rem"
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cc}>
        <Typography
          align="center"
          variant="body1"
          className={classes.title}
          gutterBottom
        >
          © 2020 Mahmoud Hammad, All rights reserved.
        </Typography>
      </div>
    </div>
  );
}
