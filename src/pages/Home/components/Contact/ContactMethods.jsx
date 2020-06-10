// intro h1 , h2 ,may have a background
// SHOULD be sutnning!!!

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Mail from "../../../../Icons/Mail";
import GH from "../../../../Icons/GH";
import FB from "../../../../Icons/FB";
import Twitter from "../../../../Icons/Twiter";
import LI from "../../../../Icons/LI";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:50,
    background: theme.palette.footer.bg,
    color: theme.palette.footer.txt
  },
  icons: {
    color: theme.palette.footer.txt,
    fontSize:28,
    margin: "0 16px",
    "&:hover": {
      color: "#fff"
    }
  },
  li: {
    "&:hover": {
      color: "#0e76a8"
    }
  },
  fb: {
    "&:hover": {
      color: "#6267f2"
    }
  },
  tw: {
    "&:hover": {
      color: "#00acee"
    }
  },
  connect: {
    padding: 20,
    textAlign: "center"
  },
  title: {
    padding: 7,
    color: "#bfbfbf",
    fontSize: "0.9rem"
  },
  "@media (max-width: 600px)": {
    title: {
      fontSize: "0.7rem"
    },
    icons: {
      margin: "0 7px",
      fontSize:25
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.connect}>
        <IconButton component="a" href="mailto:ma7mod.7ammad@gmail.com">
          <Mail className={classes.icons} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/mahmoud-h-776145128/"
          target="_blank"
        >
          <LI className={`${classes.icons} ${classes.li}`} />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/mahmodHammad"
          target="_blank"
        >
          <GH className={classes.icons} />
        </IconButton>
        <IconButton
          component="a"
          href="#"
          target="_blank"
        >
          <FB className={`${classes.icons} ${classes.fb}`} />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/hodaman2012"
          target="_blank"
        >
          <Twitter className={`${classes.icons} ${classes.tw}`} />
        </IconButton>
      </div>
    </div>
  );
}
