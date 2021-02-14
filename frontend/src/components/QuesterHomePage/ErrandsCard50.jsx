import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Errand from "../shared/Errand";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "48%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
      padding: "20px",
      backgroundColor: theme.palette.background.default,
    },
    title: {
      marginBottom: "20px",
    },
  })
);

const ErrandsCard = ({ title, questerSelect}) => {
  const classes = useStyles();
  const available = title === "Available Errands";

  const sampleErrands = [
    {
      name: "Gift Delivery",
      price: 15,
      startDateTime: null,
      endDateTime: new Date(),
      distance: 2.65,
      description: "Delivery my valentines gift to my BF plz",
      tags: ["Delivery", "Urgent"],
    },
    {
      name: "Math 275 Tutoring",
      price: 10,
      startDateTime: new Date(),
      endDateTime: new Date(),
      distance: null,
      description: "Be my elsabrouty",
      tags: ["Delivery", "Urgent", "Tutoring"],
    },
  ];

  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="h6" color="textPrimary" className={classes.title}>
        {title}
      </Typography>

      {sampleErrands.map((errand) => (
        <Errand errand={errand} available={available} questerSelect={questerSelect}/>
      ))}
    </Grid>
  );
};

export default ErrandsCard;
