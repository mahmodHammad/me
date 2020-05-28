import React, { useEffect } from "react";
// import Sidebar from "./Sidebar/Sidebar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { goToAnchor } from "react-scrollable-anchor";

import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100
  },
  "@media (max-width: 600px)": {
    root: {
      margin: 0
    }
  }
}));
export default function Home(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.location.state !== undefined) {
      const target = props.location.state.scrollTo;
      goToAnchor(target);
    }
  });

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Intro />
        <Skills />
        <Projects />
      </Container>
      <Contact />
    </div>
  );
}
