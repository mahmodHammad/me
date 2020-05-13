import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import AllProjects from "../../config/Projects";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import GH from "../../Icons/GH";
const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    paddingTop: 160,
    textAlign: "center"
  },
  img: {
    width: "100%",
    textAlign: "center",
    margin: "auto",
    borderRadius:5
  },
  header: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.txt.title
  },
  body: {
    color: theme.palette.txt.body,
    marginTop: 5,
    textAlign: "center",
    marginBottom: 30
  },
  logoIcon: {
    width: 50,
    height: 50,
    margin:"0 -15px -15px 0"
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    margin: 30,
    "&:hover": {
      textDecoration: "none"
    }
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

export default function Projec({ match }) {
  const classes = useStyles();
  console.log();
  const projId = match.params.id;
  const [info, setinfo] = useState({});
  useEffect(() => {
    const info = AllProjects.find(e => e.id === projId);

    console.log(info);
    setinfo(info);
  });

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        {Object.keys(info).length ? (
          <div className={classes.proj}>
            <Typography align="center" className={classes.header} variant="h1">
              {info.title}
            </Typography>
            <Typography color="secondary" align="center" variant="h6">
              {info.Technologies.map(e => e + ", ")}
            </Typography>

            {info.links.gitHub !== undefined ? (
              <IconButton
              component={Link}
              href={info.links.gitHub}
              target="_blank"
              
              >
                <GH
              className={classes.logoIcon}
                color="primary"
                  fontSize="large"
                />
              </IconButton>
            ) : (
              <span>sssssssssssssss</span>
            )}
            {info.links.gitHub !== undefined ? (
              <Button
                className={classes.button}
                component={Link}
                href={info.links.gitHub}
                target="_blank"
                fontSize="large"
                color="secondary"
                variant="contained"
                startIcon={<OpenInNewIcon/>}
              >
                View The Website
              </Button>
            ) : (
              <span></span>
            )}
            <img src={info.img} className={classes.img} alt="projImg" />
            <Typography
              align="center"
              className={classes.body}
              gutterBottom
              variant="body1"
            >
              {info.body}
            </Typography>
          </div>
        ) : (
          <h2>NO Thing to preview here!</h2>
        )}
      </Container>
    </div>
  );
}
