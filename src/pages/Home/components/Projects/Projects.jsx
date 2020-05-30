import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import fackProjects from "../../../../config/Projects";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 80,
    paddingTop: 20
  },
  header: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.txt.title
  },
  body: {
    fontSize: "1.2rem",
    color: theme.palette.txt.body,
    marginTop: 5,
    textAlign: "center",
    marginBottom: 30
  },
  hide: { display: "none" },
  "@media (max-width: 600px)": {
    body: {
      fontSize: "1rem"
    },
    hide: {
      display: "inline"
    },
    lastcardItem: {
      marginTop: 30
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div id="projects" className={classes.root}>
      <Typography variant="h1" gutterBottom className={classes.header}>
        My Recent Work
      </Typography>
      <Typography className={classes.body}>
        Here are a few design projects I've worked on recently.
        <span className={classes.hide}>
          <br />
        </span>
        Want to see more?{" "}
        <Link href="mailto:ma7mod.7ammad@gmail.com" color="secondary">
          Email me
        </Link>
      </Typography>

      <Grid justify="center" container spacing={2}>
        {fackProjects.map(e => (
          <ProjectCard key={e.id} info={e} />
        ))}
      </Grid>
    </div>
  );
}
