// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Mail from "../../Icons/Mail";
import GH from "../../Icons/GH";
import FB from "../../Icons/FB";
import Twitter from "../../Icons/Twiter";
import LI from "../../Icons/LI";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.footer.bg,
    color: theme.palette.footer.txt,
    padding: 20
  },
  icons:{
    color:theme.palette.footer.txt,
    margin:"0 6px",
    "&:hover":{
      color:"#fff"
    }
  },connect:{
    textAlign:"center",
    marginBottom:10
  },
  title:{
    color:"#bfbfbf",
    fontSize:"0.9rem"
  },
  "@media (max-width: 600px)": {
    title:{
      fontSize:"0.7rem"

    }
  
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.connect} >

        <IconButton component="a" href="mailto:ma7mod.7ammad@gmail.com">
          <Mail  className={classes.icons}  />
        </IconButton>

        <IconButton component="a" href="https://www.linkedin.com/in/mahmoud-h-776145128/" target="balnk">
          <LI  className={classes.icons}  />
        </IconButton>

        <IconButton component="a" href="https://github.com/mahmodHammad" target="balnk">       
          <GH className={classes.icons} />
        </IconButton>
        <IconButton component="a" href="#" >
          <FB className={classes.icons} />
        </IconButton>
        <IconButton component="a" href="#" >
          <Twitter className={classes.icons} />
        </IconButton>
      </div>
      <Typography align="center" variant="body1" className={classes.title} gutterBottom>
        © 2020 Mahmoud Hammad. All rights reserved.
      </Typography>

    </div>
  );
}
