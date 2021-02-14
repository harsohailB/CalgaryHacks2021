import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField } from "@material-ui/core";
import MessageBox from "./Messagebox";

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
      marginright: "20px"
    },
    boxtext: {
      fontfamily: "Sora",
      fontstyle: "normal",
      fontweight: "normal",
      fontsize: "16px",
      lineheight: "10px",
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

const Message = () => {
  const classes = useStyles();

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

      {sampleMessage.map((message) => (
        <MessageBox message={message} />
      ))}

      <TextField
        className={classes.textbox}
        label="Type to chat..."
      >
      </TextField>
    </Grid>
  );
};

export default Message;