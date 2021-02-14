import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

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
      fontStyle: "italic",
    },
  })
);

const Message = ({ message }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      className={classes.root}
      onClick={() =>
        history.push(`${location.pathname}/errand/${message.errand._id}`)
      }
    >
      <Grid
        container
        item
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{ width: "100%", marginBottom: "8px" }}
      >
        {message.author && (
          <>
            <Avatar
              alt={message.author.name}
              src={"placeholder"}
              className={classes.detailIcon}
            />
            {message.author.name}
          </>
        )}
        {message.time && (
          <Grid item>
            <p className={classes.time}>
              {new Date(message.time).toLocaleTimeString()}
            </p>
          </Grid>
        )}
      </Grid>
      <Typography variant="body1" color="textPrimary">
        {message.text}
      </Typography>
      {message.errand && (
        <Typography variant="body1" className={classes.detail}>
          {message.errand.name}
        </Typography>
      )}
    </Grid>
  );
};

export default Message;
