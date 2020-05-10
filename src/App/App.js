import React, { Component } from "react";
import "./App.css";
// installed components ---------------------
import { configureAnchors } from "react-scrollable-anchor";
// Mui Components -------------------------------
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class App extends Component {

  // theme = createMuiTheme({
  //   palette: this.state.cutumeTheme
  // });

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
    return (
      // <MuiThemeProvider theme={theme}>
      <MuiThemeProvider>
        <CssBaseline />
        hello world
        {/* <div
          className="App"
          style={{ background: theme.palette.background.default }}
        >
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar
            />

            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Communities
                    {...props}
                  />
                  )}
                  />
              <Route exact path="/feedback" component={Feedback} />
              
            </Switch>

          </BrowserRouter>
        </div> */}
      </MuiThemeProvider>
    );
  }
}
