import React, { useState } from "react";
// import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const useStyles = makeStyles(theme => ({
  root: {
    margin:20,
    paddingTop: 100,
  },
    "@media (max-width: 600px)": {
     root:{
      margin:0,
     }
    }
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
      <Container maxWidth="lg">
        <Intro />
        <Divider variant="middle" />
        <About />
        <Divider variant="middle" />

        <Projects />
        <Divider variant="middle" />

        <Contact />
      </Container>
    </div>
  );
}
