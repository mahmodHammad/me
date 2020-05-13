import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import fackProjects from "../../../../config/Projects";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 70,
    paddingTop: 20
  },
  header: {
    fontSize: "1.8rem",
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
  hide: { display: "none" },
  "@media (max-width: 600px)": {
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
        Here are a few design projects I've worked on recently.{" "}
        <span className={classes.hide}>
          <br />
        </span>
        Want to see more?
        <Link href="#" color="secondary">
          Email me
        </Link>
      </Typography>

      <Grid justify="center" container spacing={4}>
        {fackProjects.map((e, index) => (
          <ProjectCard info={e} />
        ))}
      </Grid>
    </div>
  );
}
