import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 70,
    paddingTop:20
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
    marginBottom:30
  },
  hide:{display:"none"},
  "@media (max-width: 600px)": {
    hide: {
      display: "inline"
    },
    lastcardItem: {
      marginTop: 30
    }
  },
}));

export default function Navbar() {

  const fakeProjects=[{
            img: "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/96537174_2557479474474357_2643162825744187392_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=iWeHK8APHhMAX-Bfz49&_nc_ht=scontent-hbe1-1.xx&oh=1f65cfe5721b242a048a8ff702ce5051&oe=5EE2786B",
            title: "MoocHub",
            body:
              " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          },
          {img: "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/96695043_531701087500481_5245105226851024896_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=07TKjuEYXuoAX-OcZef&_nc_ht=scontent-hbe1-1.xx&oh=f72fc2f8f50aef39db11d295c74eff44&oe=5EE192D4",
          title: "MoocHub",
          body:" Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
       }
        
        ] 
          const classes = useStyles();
  return (
    <div id="projects" className={classes.root}>
    
      <Typography variant="h1" gutterBottom className={classes.header}>
        My Recent Work
      </Typography>
      <Typography className={classes.body}>
        Here are a few design projects I've worked on recently. <span className={classes.hide}> <br/> </span> Want to see
        more? {" "} 
        <Link href="#" color="secondary">
           Email me
        </Link>
      </Typography>

      <Grid justify="center"  container spacing={4}>
       {fakeProjects.map((e,index)=><ProjectCard info={e}/>)}
        
      </Grid>
    </div>
  );
}
