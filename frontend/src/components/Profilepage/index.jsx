import React from "react";
import ProfileInfo from "./ProfileInfo"
import { Box, Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ProfileListing from "./ProfileListing"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        height: "98%",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
        padding: "20px",
        backgroundColor: theme.palette.background.default,
    },
    half: {
      width: "49%",
    },
    paper: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
  })
);

const sampleinfo = 
    {
      name: "Mike Smith",
      address: "Uni",
      email: "Mikesmith@dfa.ca",
      Age: "343",
      Rating: "3.3/5",
    }
  ;

const ProfileHomePage = () => {
    const classes = useStyles();
  
    return (
        <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
        <Grid
        container
        direction="row"
        alignItems="left"
        style={{ width: "50%" }}
      >
        <Grid item className={classes.half}>
            <Typography variant="h6" color="textPrimary" className={classes.title} style={{ padding:"25px" }}>
                Profile
            </Typography>
            <ProfileListing pinfo={sampleinfo} />
            </Grid>
        </Grid>
        <Grid item className={classes.half}>
            <ProfileInfo></ProfileInfo>
        </Grid>
    </Grid>
    );
  };

export default ProfileHomePage;
