import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

import carPicture from "../../assets/images/LandingPage/car.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "100vw",
      maxHeight: "100vh",
      padding: "3%",
    },
    instructions: {
      margin: "70px",
    },
    carPic: {
      position: "absolute",
      right: "0",
      bottom: "0",
      margin: "50px",
    },
  })
);

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h4" color="textPrimary">
          Get your work done by someone else.
        </Typography>
      </Grid>

      <Grid item className={classes.instructions}>
        <Grid container direction="column">
          <Typography variant="h5" color="textPrimary">
            Post your task.
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Choose your worker.
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Forget about it.
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Get notified when its done.
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <img src={carPicture} className={classes.carPic}></img>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
