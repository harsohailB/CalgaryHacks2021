import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ErrandsCard from "./ErrandsCard";
import MessageCardWithoutInput from "../shared/MessageCardWithoutInput";

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
      minHeight: "100%",
    },
    half: {
      height: "50%",
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
      <Grid
        container
        direction="column"
        justify="space-around"
        padding="20px"
        className={classes.third}
      >
        <Grid item className={classes.half}>
          <ErrandsCard title="Pending Errands" />
        </Grid>
        <Grid item className={classes.half}>
          <MessageCardWithoutInput />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuesterHomePage;
