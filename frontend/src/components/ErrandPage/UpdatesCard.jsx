import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Avatar } from "@material-ui/core";
import Update from "./Update";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "48%",
      height: "100%",
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

const sampleUpdates = [
  {
    name: "Errander",
    text: "Starting Task",
    time: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    name: "Errander",
    text: "Completed Task",
    time: new Date(),
  },
];

const UpdatesCard = ({ errand }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="h6" color="textPrimary" className={classes.title}>
        Updates
      </Typography>
      <Update update={sampleUpdates[0]} />
      {errand.status === "COMPLETED" && <Update update={sampleUpdates[1]} />}
    </Grid>
  );
};

export default UpdatesCard;
