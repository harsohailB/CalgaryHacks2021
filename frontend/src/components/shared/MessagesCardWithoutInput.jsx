import React, { useState, useEffect, useContext } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import Message from "./Message";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
      padding: "20px",
      backgroundColor: theme.palette.background.default,
      maxHeight: "50%",
      overflowY: "scroll",
    },
    title: {
      marginBottom: "20px",
    },
  })
);

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (user._id) {
      axios
        .get("/api/messages/all", { userId: user._id })
        .then((res) => setMessages(res.data));
    }
  }, [user._id]);

  return { messages };
};

const MessagesCardWithoutInput = () => {
  const classes = useStyles();
  const { messages } = useMessages();

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

      {messages.map((message) => (
        <Message message={message} />
      ))}
    </Grid>
  );
};

export default MessagesCardWithoutInput;
