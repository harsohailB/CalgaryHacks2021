import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import Message from "./Message";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
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

const sampleMessage = [
  {
    errandName: "Gift Delivery",
    text: "Hey where are you?",
    time: new Date(),
  },
  {
    errandName: "Gift Delivery",
    text: "Just got your package",
    time: new Date(),
  },
];

const MessageCardWithoutInput = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="flex-start"
    >
      <Typography variant="h6" color="textPrimary" className={classes.title}>
        Messages
      </Typography>

      {sampleMessage.map((message) => (
        <Message message={message} />
      ))}
    </Grid>
  );
};

export default MessageCardWithoutInput;
