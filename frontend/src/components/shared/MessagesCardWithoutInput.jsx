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
      display: "flex",
    },
    messages: {
      overflowY: "scroll",
      flex: "1 1",
    },
    title: {
      marginBottom: "20px",
    },
  })
);

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useContext(UserContext);

  console.log({ user: user._id });

  useEffect(() => {
    if (user._id) {
      axios
        .get("/api/messages/all", { params: { userId: user._id } })
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

      <div className={classes.messages}>
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </div>
    </Grid>
  );
};

export default MessagesCardWithoutInput;
