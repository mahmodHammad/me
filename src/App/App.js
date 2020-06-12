import React, { Component } from "react";
import "./App.css";
// installed components ---------------------
import { configureAnchors } from "react-scrollable-anchor";
// Mui Components -------------------------------
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./../shared/Navbar/Navbar";
import Footer from "./../shared/Footer/Footer";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Project";
import { dark, light } from "../config/Themes";
// #FFC107 light
const defaultMode = {
  primary: {
    main: "#eee"
  },
  secondary: {
    light: "#FFC409 ",
    main: "#FFa409",
    contrastText: "#000"
  },
  background: {
    default: "#333"
  },
  txt: {
    title: "#fff",
    body: "#d9d9d9"
  },
  navbar: { default: "#111" },
  footer: { bg: "#171717", txt: "#ccc", cc: "#090909" },
  card: { bg: "#111" },
  contact: { bg: "#111", methods: "#202020", icons: "#FFC107" },
  div: { default: "#666" }
};

export default class App extends Component {
  state = {
    cutumeTheme: defaultMode,
    isLightMode: 1
  };
  theme = createMuiTheme({
    palette: this.state.cutumeTheme
  });

  changeTheme = firstTime => {
    const islight = this.state.isLightMode;
    let oldTheme = { ...this.state.cutumeTheme };

    if (islight) {
      dark(oldTheme);
    } else {
      light(oldTheme);
    }

    this.setState({ cutumeTheme: oldTheme });

    this.theme = createMuiTheme({
      palette: this.state.cutumeTheme
    });

    // prevent rerting the mode for the first time
    this.setState({ isLightMode: !islight });
    if (firstTime !== 1) {
      window.localStorage.setItem("mode", !islight);
    }
  };

  clearLocalStorage = () => {
    window.localStorage.clear();
  };

  componentDidMount() {
    let getmode = window.localStorage.getItem("mode");
    if (getmode) {
      let isLightMode = JSON.parse(getmode);
      this.setState({ isLightMode: !isLightMode });
      this.changeTheme(1);

      console.log(!isLightMode, "isLightMode");
      console.log(this.state.isLightMode, "state.isLightMode");
    } else {
      // dark mode by default
      window.localStorage.setItem("mode", 0);
    }
    this.changeTheme(1);
    configureAnchors({ scrollDuration: 0 });
  }

  render() {
    const { theme } = this;
    return (
      <div
        className="App"
        style={{
          background: theme.palette.background.default,
          minHeight: "100vh"
        }}
      >
        <MuiThemeProvider theme={theme}>
          {/* <MuiThemeProvider> */}
          <CssBaseline />
          <div
            className="App"
            style={{ background: theme.palette.background.default }}
          >
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Navbar
                themeChange={this.changeTheme}
                isLight={this.state.isLightMode}
              />

              <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/Project/:id" component={Projects} />
              </Switch>
              <Footer />
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
