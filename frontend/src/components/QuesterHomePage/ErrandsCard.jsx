import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Errand from "../shared/Errand";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "98%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
      padding: "20px",
      backgroundColor: theme.palette.background.default,
    },
    title: {
      marginBottom: "20px",
    },
    detail: {
      fontSize: "1em",
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
  })
);

const ErrandsCard = ({ title, errands }) => {
  const classes = useStyles();

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

      {errands.length > 0 ? (
        <Grid item>
          {errands.map((errand) => (
            <Errand errand={errand} />
          ))}
        </Grid>
      ) : (
        <p className={classes.detail}>No Errands</p>
      )}
    </Grid>
  );
};

export default ErrandsCard;
