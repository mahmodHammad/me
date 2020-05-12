import React, { useState } from "react";
// import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20
  }
  //   "@media (max-width: 600px)": {
  //     study: {
  //       fontSize: "0.6rem",
  //       padding: "2px 6px"
  //     },
  //     logoText: { fontSize: "0.8rem" },
  //     logo:{
  //       marginLeft:-10
  //     }
  //   }
}));

export default function Navbar({}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h2" component="h1" gutterBottom color="primary">
       My Projects
      </Typography>
      <Typography align="center" variant="h2" component="h1" gutterBottom color="primary">
       My Projects
      </Typography>      <Typography align="center" variant="h2" component="h1" gutterBottom color="primary">
       My Projects
      </Typography>
    </div>
  );
}
