import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ErrandsCard from "../QuesterHomePage/ErrandsCard";
import MessageCardWithoutInput from "../shared/MessageCardWithoutInput";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    height: "90vh",
    maxHeight: "88vh",
    marginTop: "10px",
  },
  mid: {
    width: "46%",
  },
  leftThird: {
    width: "32%",
  },
  rightSide: {
    width: "19%",
  },
}));

const PosterHomePage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item className={classes.leftThird}>
        <ErrandsCard title="Accepted Errands" />
      </Grid>
      <Grid item className={classes.leftThird}>
        <ErrandsCard title="Posted Errands" questerSelect={true} />
      </Grid>
      <Grid item className={classes.leftThird}>
        <MessageCardWithoutInput />
      </Grid>
    </Grid>
  );
};

export default PosterHomePage;
