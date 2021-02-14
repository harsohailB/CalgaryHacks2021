import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import MessageBox from "./Messagebox";
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
    textbox: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderradius: "10px",
      padding: "10px 10px 5px 50px",
      display: "inline-block",
      marginTop: "15px",
      marginright: "20px",
    },
    boxtext: {
      fontFamily: "Sora",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "10px",
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

const Message = ({ errand }) => {
  const classes = useStyles();
  const { messages, onSend } = useMessages(errand);
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

      {messages.map((message) => (
        <MessageBox message={message} errand={errand} />
      ))}

      <TextField
        className={classes.textbox}
        label="Type to chat..."
        onKeyDown={(event) =>
          event.keyCode === 13 && (onSend(textField) || setTextField(""))
        }
        onChange={handleChange}
        value={textField}
      ></TextField>
    </Grid>
  );
};

export default Message;
