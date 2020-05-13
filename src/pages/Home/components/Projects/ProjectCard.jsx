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
  cardContainer: { textAlign: "center" },
  card: {
    marginTop: 10
  }
}));

export default function Navbar({ info }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.cardContainer} xs={12} md={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={info.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {info.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Visit Website >
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
  );
}
