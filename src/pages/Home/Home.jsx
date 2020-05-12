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
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 120,
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

export default function Navbar({
  todo,
  removeFromTodo,
  communities,
  getCommunity,
  props
}) {
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
      <Divider variant="middle" />
      <About />
      <Divider variant="middle" />

      <Projects />
      <Divider variant="middle" />

      <Contact />
    </div>
  );
}
