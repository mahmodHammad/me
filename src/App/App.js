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
// #FFC107 light
export default class App extends Component {
  state = {
    cutumeTheme: {
      primary: {
        main: "#333"
      },
      secondary: {
        light: "#FFC409 ",
        main: "#F89500",
        contrastText: "#000"
      },
      background: {
        default: "#fafafa"
      },
      txt: {
        title: "#333",
        body: "#666"
      },
      navbar: { default: "#fff" },
      footer: { bg: "#171717", txt: "#FFC107 " },
      success: {
        main: "#43ff54"
      },
      error: {
        main: "#f44336"
      }
    }
  };
  theme = createMuiTheme({
    palette: this.state.cutumeTheme
  });

  // XXX will be deprecated XXX
  // changeThemeOnce = (main, sec, value) => {
  //   let oldTheme = { ...this.state.cutumeTheme };
  //   oldTheme[main][sec] = value;
  //   this.setState({ cutumeTheme: oldTheme });

  //   this.theme = createMuiTheme({
  //     palette: this.state.cutumeTheme
  //   });
  // };

  // changeTheme = (
  //   main = this.state.cutumeTheme.primary.main,
  //   sec = this.state.cutumeTheme.secondary.main,
  //   bg = this.state.cutumeTheme.background.default
  // ) => {
  //   let oldTheme = { ...this.state.cutumeTheme };
  //   oldTheme.primary.main = main;
  //   oldTheme.secondary.main = sec;
  //   oldTheme.background.default = bg;
  //   this.setState({ cutumeTheme: oldTheme });

  //   this.theme = createMuiTheme({
  //     palette: this.state.cutumeTheme
  //   });
  // };

  clearLocalStorage = () => {
    window.localStorage.clear();
  };

  componentDidMount() {
    let gettodo = window.localStorage.getItem("todo");
    if (gettodo) {
      let todo = JSON.parse(gettodo);
      this.setState({ todo });
    }
    configureAnchors({ scrollDuration: 0 });
  }

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
              <Navbar />

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
