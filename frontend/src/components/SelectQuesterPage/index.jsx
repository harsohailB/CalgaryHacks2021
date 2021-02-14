import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        maxWidth: "100vw",
        height: "90vh",
        maxHeight: "88vh",
        marginTop: "10px",
      },
    central: {
      width: "40%",
    }
  })
);

const SelectQuesterPage = () => {
    const classes = useStyles();

    return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item className={classes.central}>
        <ProfileCard title="Pending Errands" />
      </Grid>
    </Grid>
    );
};

export default SelectQuesterPage;