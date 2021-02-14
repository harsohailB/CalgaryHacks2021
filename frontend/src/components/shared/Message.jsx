import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "5px",
      marginBottom: "5px",
      padding: "10px",
      "&:hover": {
        border: "none",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        transform: "translate(-2px, -2px)",
        transition: "all ease 0.5s",
        borderRadius: "7px",
        cursor: "pointer",
        "z-index": 100,
      },
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
      padding: "10px",
    },
    detail: {
      fontSize: "1em",
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
  })
);

const Message = ({ message }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
      onClick={() => history.push("/errand/1")}
    >
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        style={{ width: "70%" }}
      >
        {message.author && (
          <Grid item>
            <Avatar
              alt={message.author.name}
              src={"placeholder"}
              className={classes.detailIcon}
            />
          </Grid>
        )}

        <Grid container direction="column" style={{ width: "80%" }}>
          <Typography variant="body1" color="textPrimary">
            {message.text}
          </Typography>
          {message.errand && (
            <Typography
              variant="body1"
              color="black"
              className={classes.detail}
            >
              {message.errand.name}
            </Typography>
          )}
        </Grid>
      </Grid>

      {message.time && (
        <Grid item>
          <p className={classes.time}>{message.time.toLocaleTimeString()}</p>
        </Grid>
      )}
    </Grid>
  );
};

export default Message;
