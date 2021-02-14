import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import MessageBox from "./Message";
import useMessages from "./useMessages";

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

const sampleMessage = [
  {
    name: "Mike Smith",
    text: "KFC the final",
    time: new Date(),
  },
  {
    name: "Yani",
    text: "Memes",
    time: new Date(),
  },
];

const MessagesInputWithInput = ({ errand }) => {
  const classes = useStyles();
  const { messages, onSend } = useMessages(errand);
  const recentMessages = messages.slice(messages.length - 6, messages.length);
  const [textField, setTextField] = useState("");

  const handleChange = (event) => {
    setTextField(event.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="space-between"
    >
      <Typography variant="h6" color="textPrimary" className={classes.title}>
        Messages
      </Typography>

      {recentMessages.map((message) => (
        <MessageBox message={message} errand={errand} />
      ))}

      <TextField label="Type to chat..."></TextField>
    </Grid>
  );
};

export default MessagesInputWithInput;
