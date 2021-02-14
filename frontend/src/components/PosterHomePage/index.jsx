import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ErrandsCard from "../QuesterHomePage/ErrandsCard";
//import Message from "../ErrandPage/Message"
import Message from "../shared/MessagesCardWithoutInput";

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
  rightThird: {
    width: "30%",
    height: "90%",
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
      <Grid item className={classes.rightThird}>
        <Message></Message>
      </Grid>
    </Grid>
  );
};

export default PosterHomePage;
