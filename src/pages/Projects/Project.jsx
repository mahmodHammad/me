import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import AllProjects from "../../config/Projects";
const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    paddingTop: 120
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
      {Object.keys(info).length ? (
        <div className={classes.proj}>
          <Typography variant="h3">{info.title}</Typography>
          <Typography variant="body1">{info.body}</Typography>
          <Typography variant="body2">{info.Technologies}</Typography>
          {Object.keys(info.links).map(l=><Link href={info.links[l]} target="_blank">{l}</Link>) }
          <img src={info.img} alt="projImg"/>
        </div>
      ) : (
        <h2>NO Thing to preview here!</h2>
      )}
    </div>
  );
}
