import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AllProjects from "../../config/Projects";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";
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
    borderRadius: 5
  },
  header: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.txt.title
  },
  TechHeader: { fontSize: "1.4rem", letterSpacing: 1, marginTop: 7 },
  body: {
    fontSize: "1.2rem",
    color: theme.palette.txt.body,
    textAlign: "left"
  },
  techUsedHeader: { color: theme.palette.txt.title, fontSize: "1.6rem" },
  techUsed: { textAlign: "left", marginTop: 30, marginBottom: 50 },
  tech: { color: theme.palette.txt.body, fontSize: "1rem" },
  logoIcon: {
    width: 40,
    height: 40,
    color: "#222"
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    margin: "30px 20px",
    textShadow:"1px 1px 2px #0005",
    "&:hover": {
      textDecoration: "none"
    }
  },
  "@media (max-width: 600px)": {
    root: { paddingTop: 130 },
    header: {fontSize: "1.8rem"},
    TechHeader:{fontSize:"1.2rem"}
  }
}));

export default function Projec({ match }) {
  const classes = useStyles();
  console.log();
  const projId = match.params.id;
  const [info, setinfo] = useState({});
  useEffect(() => {
    const info = AllProjects.find(e => e.id === projId);
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
            <Typography
              color="secondary"
              align="center"
              variant="body1"
              className={classes.TechHeader}
            >
              {info.Technologies.map((e,index,arr) => `${e}${index===arr.length-1?"":"-"}` )}
            </Typography>

            {info.links.gitHub !== undefined ? (
              <IconButton
                component={Link}
                href={info.links.gitHub}
                target="_blank"
              >
                <GH className={classes.logoIcon} fontSize="large" />
              </IconButton>
            ) : (
              <span></span>
            )}

            <Button
              className={classes.button}
              component={Link}
              href={info.links.visit}
              target="_blank"
              fontSize="large"
              color="secondary"
              variant="contained"
              startIcon={<OpenInNewIcon />}
            >
              Visit The Website
            </Button>

            <img src={info.img} className={classes.img} alt="projImg" />
            <div className={classes.techUsed}>
              <Typography
                className={classes.techUsedHeader}
                gutterBottom
                variant="h6"
              >
                Project details:
              </Typography>
              <Typography className={classes.body} gutterBottom variant="h5">
                {info.body}
              </Typography>
            </div>
            <div className={classes.techUsed}>
              <Typography
                className={classes.techUsedHeader}
                gutterBottom
                variant="h6"
              >
                Technologies used:
              </Typography>
              <ul>
                {info.Technologies.map(t => (
                  <li key={t} className={classes.tech}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <h2>NO Thing to preview here!</h2>
        )}
      </Container>
    </div>
  );
}
