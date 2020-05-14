// logo to the left
// projects to the right -> click navigate to home then prjects
// contact to the right -> click navigate to the home then contact
import React from "react";
// import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import IconButton from "@material-ui/core/IconButton";

import Dropdwon from "./components/Dropdown";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import LogoDark from "./logo-dark.png";
import LogoLight from "./logo-light.png";
const useStyles = makeStyles(theme => ({
  logoContainer: {
    flexGrow: 1,
    justifyContent: "left"
  },
  logo: { height: 58, margin: 3 },
  nav: { background: theme.palette.navbar.default },
  study: {
    padding: "2px 10px",
    margin: 2,
    marginLeft: 5
    // fontSize: "0.7rem",
  },
  themeicon: { marginLeft: 4 }
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

export default function Navbar({ props, themeChange ,isLight}) {
  const classes = useStyles();
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar color="transparent" className={classes.nav}>
          <Toolbar className={classes.nav}>
            <div className={classes.logoContainer}>
              
              <IconButton color="inherit" component={Link} to="/" size="large">
                {isLight?  <img className={classes.logo} src={LogoLight} alt="Mahmoud Hammad" />:<img className={classes.logo} src={LogoDark} alt="Mahmoud Hammad" />}
              
              </IconButton>
            </div>

            <Hidden smDown={true}>
              <Button
                size="large"
                className={classes.study}
                color="primary"
                component="a"
                href="/#contact"
              >
                contact
              </Button>
              <Button
                size="large"
                className={classes.study}
                variant="outlined"
                color="secondary"
                component="a"
                // href={`/${process.env.PUBLIC_URL}/#projects`}
                href={`/#projects`}
              >
                My Projects
              </Button>
            </Hidden>

            <IconButton
              className={classes.themeicon}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={themeChange}
            >
              <Brightness4Icon color="primary" />
            </IconButton>

            <Hidden mdUp={true}>
              <Dropdwon />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
