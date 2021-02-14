import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "5px",
      marginBottom: "5px",
    },
    detailIcon: {
      marginRight: "10px",
      width: "40px",
      height: "40px",
    },
    time: {
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
    textbox: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderradius: "20px",
    },
  })
);

const Message = ({ message }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ width: "50%" }}
      >
        <Avatar
          alt={message.name}
          src={"placeholder"}
          className={classes.detailIcon}
        />
        <Typography variant="p" color="textPrimary">
          {message.text}
        </Typography>
      </Grid>

      <Grid item>
        <p className={classes.time}>{message.time.toLocaleString()}</p>
      </Grid>
    </Grid>
  );
};

export default Message;
