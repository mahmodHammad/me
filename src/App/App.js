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
      footer: { bg: "#2b2b2b", txt: "#FFC107", cc: "#181818" },
      card: { bg: "#fff" },
      contact: { bg: "#f1f1f1" },
      div: { default: "#d1d1d1" }
    },
    isLightMode: true
  };
  theme = createMuiTheme({
    palette: this.state.cutumeTheme
  });

  changeTheme = () => {
    const islight = this.state.isLightMode;
    let oldTheme = { ...this.state.cutumeTheme };
    if (islight) {
      oldTheme.primary.main = "#eee";
      oldTheme.navbar.default = "#111";
      oldTheme.background.default = "#333";
      oldTheme.secondary.main = "#FFa409";
      oldTheme.card.bg = "#111";
      oldTheme.contact.bg = "#111";
      oldTheme.footer.bg = "#171717";
      oldTheme.footer.cc = "#111";
      oldTheme.txt.title = "#fff";
      oldTheme.txt.body = "#d9d9d9";
      oldTheme.div.default = "#666";
    } else {
      oldTheme.primary.main = "#333";
      oldTheme.navbar.default = "#fff";
      oldTheme.background.default = "#fafafa";
      oldTheme.secondary.main = "#F89500";
      oldTheme.card.bg = "#fff";
      oldTheme.contact.bg = "#f1f1f1";
      oldTheme.footer.bg = "#2b2b2b";
      oldTheme.footer.cc = "#111";
      oldTheme.txt.title = "#fff";
      oldTheme.txt.body = "#aaa";
      oldTheme.txt.title = "#333";
      oldTheme.txt.body = "#666";
      oldTheme.div.default = "#d1d1d1";
    }
    this.setState({ cutumeTheme: oldTheme });

    this.theme = createMuiTheme({
      palette: this.state.cutumeTheme
    });
    this.setState({ isLightMode: !this.state.isLightMode });
  };

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
