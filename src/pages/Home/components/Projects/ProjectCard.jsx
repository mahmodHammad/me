import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  cardContainer: { textAlign: "center" },
  card: {
    marginTop: 10
  },
  buttons: {
    textAlign: "center",
    margin: "auto"
  },
  button: {
    margin: "0 6px"
  },
  img:{
  },contentHeader:{
      fontWeight:"bolder"
  }
}));

export default function Navbar({ info }) {
  const classes = useStyles();
  return (
    <Grid item className={classes.cardContainer} xs={12} sm={9} md={6} lg={4}>
      <Card className={classes.card}>
        <CardActionArea component={Link} to={`/project/${info.id}`}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.img}
            image={info.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className="contentHeader">
              {info.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info.body}
            </Typography>
          </CardContent>
          {/* <Typography className={classes.tech}>{info.Technologies}</Typography> */}

        </CardActionArea>
          <Divider />
        <CardActions>
          <div className={classes.buttons}>
            {Object.keys(info.links).map(l => (
              <Button
                className={classes.button}
                component="a"
                target="_blank"
                href={info.links[l]}
                size="small"
                color="secondary"
              >
                {l}
              </Button>
            ))}
            <Button className={classes.button} size="small" color="secondary">
              Learn More
            </Button>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
