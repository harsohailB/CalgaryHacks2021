import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, props) =>
  createStyles({
    root: {
      borderRadius: "20px",
      padding: "7px",
      margin: "5px",
    },
    tagValue: {
      fontSize: "10px",
      margin: "0",
    },
  })
);

const Tag = ({ value, color }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      direction="column"
      className={classes.root}
      style={{ backgroundColor: color }}
    >
      <p className={classes.tagValue}>{value}</p>
    </Grid>
  );
};

export default Tag;
