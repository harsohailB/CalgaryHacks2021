import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ErrandDescriptionCard from "./ErrandDescriptionCard";
import Map from "./Map";
import UpdatesCard from "./UpdatesCard";
import MessageCardWithInput from "./MessageCardWithInput";

const sampleErrand = {
  name: "Gift Delivery",
  price: 15,
  startDateTime: null,
  endDateTime: new Date(),
  distance: 2.65,
  description:
    "Sample description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... ",
  tags: ["Delivery", "Urgent"],
  posterName: "Poster Poster",
  address: "2839 University Drive",
};

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
    twoThirds: {
      width: "65%",
    },
  })
);

const ErrandPage = ({ id }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item className={classes.third}>
        <ErrandDescriptionCard errand={sampleErrand} />
      </Grid>

      <Grid container className={classes.twoThirds} direction="column">
        <Map />

        <Grid
          container
          direction="row"
          justify="space-around"
          style={{ width: "100%", marginTop: "10px" }}
        >
          <UpdatesCard />

          <MessageCardWithInput />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ErrandPage;
