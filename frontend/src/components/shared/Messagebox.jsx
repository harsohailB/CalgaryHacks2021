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
      padding: "10px",
    },
    textmes: {
      padding: "10px",
    },
  })
);

const Messagebox = ({ message, errand }) => {
  const classes = useStyles();
  const name =
    message.author === errand.poster.id
      ? errand.poster.name
      : errand.quester.name;

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
        <Avatar alt={name} src={"placeholder"} className={classes.detailIcon} />
        <Typography variant="body1" color="textPrimary">
          {name}
        </Typography>
      </Grid>
      <Typography variant="body2" color="black" className={classes.textmes}>
        {message.text}
      </Typography>

      <Grid item>
        <p className={classes.time}>{message.time.toLocaleString()}</p>
      </Grid>
    </Grid>
  );
};

export default Messagebox;
