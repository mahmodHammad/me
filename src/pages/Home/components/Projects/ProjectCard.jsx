import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  cardContainer: { textAlign: "center" },
  card: {
    marginTop: 10,
    background: theme.palette.card.bg
  },
  buttons: {
    textAlign: "center",
    margin: "auto"
  },
  button: {
    margin: "0 6px"
  },
  img: {},
  contentHeader: {
    fontWeight: "bolder"
  },
  chip: { padding: "6px 4px 6px 10px", marginLeft: 12, marginBottom: 2 }
}));

export default function Navbar({ info }) {
  const classes = useStyles();
  return (
    <Grid
      key={info.id}
      item
      className={classes.cardContainer}
      xs={12}
      sm={9}
      md={6}
      lg={4}
    >
      <Card className={classes.card}>
        <CardActionArea  onClick={()=>window.scrollTo(0, 0)} component={Link} to={`/project/${info.id}`}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.img}
            image={info.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="contentHeader"
            >
              {info.title}
              <Chip
                size="small"
                variant="outlined"
                className={classes.chip}
                color="secondary"
                icon={<CalendarTodayIcon fontSize="small" />}
                label={info.date}
                clickable={false}
              />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info.body.substring(0, 100) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions>
          <div className={classes.buttons}>
            {info.links.visit !== undefined ? (
              <Button
                className={classes.button}
                component="a"
                target="_blank"
                href={info.links.visit}
                size="small"
                color="secondary"
              >
                Visit Website
              </Button>
            ) : (
              <span></span>
            )}

            {info.links.gitHub !== undefined ? (
              <Button
                className={classes.button}
                component="a"
                target="_blank"
                href={info.links.visit}
                size="small"
                color="secondary"
              >
                Github
              </Button>
            ) : (
              <span></span>
            )}

            <Button
              onClick={() => window.scrollTo(0, 0)}
              component={Link}
              to={`/project/${info.id}`}
              className={classes.button}
              size="small"
              color="secondary"
            >
              Learn More
            </Button>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}
