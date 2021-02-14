import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ErrandsCard from "./ErrandsCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "100vw",
      height: "90vh",
      maxHeight: "88vh",
      marginTop: "10px",
    },
    third: {
      width: "32%",
    },
  })
);

const QuesterHomePage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item className={classes.third}>
        <ErrandsCard title="Errands To Do" />
      </Grid>
      <Grid item className={classes.third}>
        <ErrandsCard title="Available Errands" />
      </Grid>
      <Grid item className={classes.third}>
        <ErrandsCard title="Pending Errands" />
      </Grid>
    </Grid>
  );
};

export default QuesterHomePage;
