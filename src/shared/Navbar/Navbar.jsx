// logo to the left
// projects to the right -> click navigate to home then prjects
// contact to the right -> click navigate to the home then contact
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
  logo: {
    flexGrow: 1,
    justifyContent: "left",
    fontWeight: "bold",
  },
  nav: { background: theme.palette.navbar.default },
  study: {
    padding: "2px 10px",
    margin:2,
    marginLeft:5
    // fontSize: "0.7rem",
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

// will be deprecated XXX
let year = "Mahmoud";
let department = "Hammad";
// XXXXXXXXXXXXXXXXXXXXXX

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ props }) {
  const classes = useStyles();
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar
          disableGutters={true}
          color="transparent"
          className={classes.nav}
        >
          <Toolbar className={classes.nav}>
            <div className={classes.logo}>
              <Button color="inherit" component={Link} to="/" size="large">
                <Typography
                  align="left"
                  color="inherit"
                  className={classes.logoText}
                >
                  {year}
                </Typography>
                <Typography color="secondary" className={classes.logoText}>
                  {department}
                </Typography>
              </Button>
            </div>
            <Button
              size="large"
              className={classes.study}
              color="primary"
              component="a"
              href="#contact"
            >
            contact
            </Button>
            <Button
              size="large"
              className={classes.study}
              variant="outlined"
              color="secondary"
              component="a"
              href="#projects"
            >
              My Projects
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
