// Contains a grid of your projects
// When click on the project it opens project details page with project details
// The project part in the section contains image and name

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  card: {
    marginTop: 50
  }
}));

export default function Navbar() {
  const Asu =
    "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/96695043_531701087500481_5245105226851024896_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=07TKjuEYXuoAX-OcZef&_nc_ht=scontent-hbe1-1.xx&oh=f72fc2f8f50aef39db11d295c74eff44&oe=5EE192D4";
  const mooc =
    "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/96537174_2557479474474357_2643162825744187392_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=iWeHK8APHhMAX-Bfz49&_nc_ht=scontent-hbe1-1.xx&oh=1f65cfe5721b242a048a8ff702ce5051&oe=5EE2786B";
  const classes = useStyles();
  return (
    <div id="projects" className={classes.root}>
      <Typography gutterBottom variant="h4" color="primary">
        My Recent Work
      </Typography>
      <Typography variant="h6" color="primary">
        Here are a few design projects I've worked on recently. Want to see
        more?
        <Link href="#" color="secondary">
          Email me
        </Link>
      </Typography>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="240"
                image={mooc}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  MoocHub
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Link
              </Button>
              <Button size="small" color="primary">
                Github
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
