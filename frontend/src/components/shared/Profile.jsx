import React from "react";
import { Avatar, Grid, Typography, Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: "10px",
      paddingBottom: "10px",
      borderBottom: "1px solid #bbb",
    },
    title: {
      fontSize: "1.2em",
      fontWeight: "normal",
      margin: "0",
    },
    acceptButton: {
      marginLeft: "10px",
      backgroundColor: "#35CD99",
      "&:hover": {
        backgroundColor: "#35CD99",
        borderColor: "#0062cc",
        boxShadow: "none",
      },
    },
    declineButton: {
      marginLeft: "10px",
      backgroundColor: "#FA6584",
      "&:hover": {
        backgroundColor: "#FA6584",
        borderColor: "#0062cc",
        boxShadow: "none",
      },
    },
  })
);

const Profile = ({ profile }) => {
  const classes = useStyles();

  const pic =
    "https://i2.wp.com/sclondon.ca/wp-content/uploads/2019/10/female-placeholder.jpg?ssl=1";

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container direction="column">
        <Avatar src={pic} className={classes.detailIcon} />
        <p className={classes.title}>{profile.name}</p>
        <Typography variant="body1" color="textPrimary">
          {profile.description}
        </Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justify="flex-end"
        className={classes.footer}
      >
        <Button
          variant="contained"
          className={classes.declineButton}
          startIcon={<ClearIcon />}
        >
          Decline
        </Button>
        <Button
          variant="contained"
          className={classes.acceptButton}
          startIcon={<CheckIcon />}
        >
          Accept
        </Button>
      </Grid>
    </Grid>
  );
};

export default Profile;
