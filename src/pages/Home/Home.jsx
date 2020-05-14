import React from "react";
// import Sidebar from "./Sidebar/Sidebar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { goToAnchor } from "react-scrollable-anchor";

import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
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
  console.log("PPPPPPPPPPP", props);

  const handleScroll = target => {};

  if (props.location.state !== undefined) {
    const target = props.location.state.scrollTo;    
    // without this line it does not work!!!
    setTimeout(() => goToAnchor(target), 50);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Intro />
        {/* <Divider variant="middle" /> */}
        <Skills />
        {/* <Divider variant="middle" /> */}
        <Projects />
        {/* <Divider variant="middle" /> */}
      </Container>
      <Contact />
    </div>
  );
}
