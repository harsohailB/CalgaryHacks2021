import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Errand from "../shared/Errand";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "98%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
      padding: "20px",
      backgroundColor: theme.palette.background.default,
    },
    title: {
      marginBottom: "20px",
    },
    detail: {
      fontSize: "1em",
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
    errands: {
      maxHeight: "90%",
      overflowY: "scroll",
    },
  })
);

const ErrandsCard = ({ title, errands }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="h6" color="textPrimary" className={classes.title}>
        {title}
      </Typography>

      {errands.length > 0 ? (
        <Grid item className={classes.errands}>
          {errands.map((errand) => (
            <Errand errand={errand} />
          ))}
        </Grid>
      ) : (
        <p className={classes.detail}>No Errands</p>
      )}
    </Grid>
  );
};

export default ErrandsCard;
