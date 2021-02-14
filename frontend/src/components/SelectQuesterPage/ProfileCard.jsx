import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Profile from "../shared/Profile";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
      padding: "20px",
      backgroundColor: theme.palette.background.default,
    },
    title: {
      marginBottom: "20px",
    },
  })
);

const ProfileCard = () => {
    const classes = useStyles();

    const sampleProfiles = [
        {
          name: "Will Smith",
          age: 43,
          description: "I will act for you. lots more description about all the things that I can do and will not do for free money",
        },
        {
          name: "Derek Braun",
          age: 21,
          description: "I have no skills",
        },
      ];

    return (
        <Grid container direction="column" className={classes.root}>
          <Typography variant="h6" color="textPrimary" className={classes.title}>
            Available Questers
          </Typography>
    
          {sampleProfiles.map((profile) => (
            <Profile profile={profile} />
          ))}
        </Grid>
      );
};

export default ProfileCard;