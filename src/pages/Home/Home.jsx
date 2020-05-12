import React from "react";
// import Sidebar from "./Sidebar/Sidebar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Intro from "./components/Intro";
import Skills from "./components/Skillss";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const useStyles = makeStyles(theme => ({
  root: {
    margin: 20,
    paddingTop: 100
  },
  "@media (max-width: 600px)": {
    root: {
      margin: 0
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
        {/* <Divider variant="middle" /> */}
        <Skills />
        {/* <Divider variant="middle" /> */}
        <Projects />
        {/* <Divider variant="middle" /> */}
        <Contact />
      </Container>
    </div>
  );
}
