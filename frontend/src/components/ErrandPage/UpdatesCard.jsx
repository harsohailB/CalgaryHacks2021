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
    name: "Quester",
    text: "Starting Task",
    time: new Date(),
  },
  {
    name: "Quester",
    text: "Completed Task",
    time: new Date(),
  },
];

const UpdatesCard = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
    >
      <Typography variant="h6" color="textPrimary" className={classes.title}>
        Updates
      </Typography>

      {sampleUpdates.map((update) => (
        <Update update={update} />
      ))}
    </Grid>
  );
};

export default UpdatesCard;
