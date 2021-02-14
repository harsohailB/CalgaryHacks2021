import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Avatar } from "@material-ui/core";

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
    textbox: {
      background: "#FFFFFF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderradius: "20px",
    },
    paddingbox: {
      padding: "15px",
      fontsize: "50px",
    },
  })
);

const ProfileListing = ({ pinfo }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="left"
      className={classes.root}
    >
      <Grid
        container
        direction="row"
        alignItems="left"
        style={{ width: "100%" }}
      >
        <Avatar
          alt={pinfo.name}
          src={"placeholder"}
          className={classes.detailIcon}
        />
        <Typography variant="h6" color="textPrimary">
          {pinfo.name}
        </Typography>
      </Grid>
      <Grid
        item
        direction="row"
        alignItems="center"
        className={classes.paddingbox}
        style={{ width: "50%", padding: "10px", fontsize: "50px" }}
      >
        {/* <Typography
          variant="h6"
          color="textPrimary"
          padding="15px"
          fontsize="50px"
        >
          Address: {pinfo.address}
        </Typography> */}
      </Grid>
      <Grid
        item
        direction="row"
        alignItems="center"
        className={classes.paddingbox}
        style={{ width: "50%", padding: "10px", fontsize: "50px" }}
      >
        {/* <Typography
          variant="h6"
          color="textPrimary"
          padding="15px"
          fontsize="50px"
        >
          Address: {pinfo.address}
        </Typography> */}
      </Grid>
      <Grid
        item
        direction="row"
        alignItems="center"
        style={{ width: "100%", padding: "10px" }}
      >
        {/* <Typography
          variant="h6"
          color="textPrimary"
          padding="15px"
          font-weight="bold"
        >
          Email: {pinfo.email}
        </Typography> */}
        <Typography
          variant="body1"
          color="textPrimary"
          padding="15px"
          font-weight="bold"
        >
          Description: {pinfo.description}
        </Typography>
      </Grid>
      <Grid
        item
        direction="row"
        alignItems="center"
        style={{ width: "50%", padding: "10px" }}
      >
        <Typography variant="h6" color="textPrimary" padding="15px">
          Age: {pinfo.age}
        </Typography>
      </Grid>
      <Grid
        item
        direction="row"
        alignItems="center"
        padding="15px"
        style={{ width: "50%", padding: "10px" }}
      >
        {/* <Typography variant="h6" color="textPrimary" padding="15px">
                Rating: {pinfo.Rating}
            </Typography> */}
      </Grid>
    </Grid>
  );
};

export default ProfileListing;
