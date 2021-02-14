import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import formatCurrency from "../../utils/formatCurrency";
import Tag from "./Tag";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "10px",
      padding: "10px",
      borderBottom: "1px solid #bbb",
      "&:hover": {
        backgroundColor: "#EBEBEB",
        transition: "all ease 0.5s",
        borderRadius: "7px",
        cursor: "pointer",
        "z-index": 100,
      },
    },
    title: {
      fontSize: "1.2em",
      fontWeight: "normal",
      margin: "0",
    },
    details: {
      fontSize: "1em",
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
    tags: {
      marginTop: "5px",
    },
    footer: {
      width: "100%",
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
    selectButton: {
      color: "#FFFFFF",
      marginLeft: "10px",
      backgroundColor: "#35CD99",
      "&:hover": {
        backgroundColor: "#35CD99",
        borderColor: "#0062cc",
        boxShadow: "none",
      },
    },
    status: {
      fontSize: "12px",
      marginBottom: "5px",
      backgroundColor: "#35CD99",
      width: "fit-content",
      padding: "5px",
      textAlign: "center",
      borderRadius: "10px",
    },
  })
);

const Errand = ({ errand }) => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      onClick={() => history.push(`${location.pathname}/errand/${errand._id}`)}
    >
      <Grid container direction="row" justify="space-between">
        <p className={classes.title}>{errand.name}</p>
        {errand.price && <p className={classes.title}>{"$" + errand.price}</p>}
      </Grid>

      <Grid container direction="row" justify="space-between">
        {errand.expiryTime && (
          <p className={classes.details}>
            {new Date(errand.expiryTime).toLocaleTimeString()}
          </p>
        )}

        {errand.startTime && (
          <p className={classes.details}>
            {`${new Date(errand.startTime).toLocaleTimeString()} - ${new Date(
              errand.endTime
            ).toLocaleTimeString()}`}
          </p>
        )}
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        style={{ marginBottom: "10px" }}
      >
        <p className={classes.details}>
          {errand.address
            ? errand.address.title.substring(0, 25) + "..."
            : "Virtual"}{" "}
        </p>
        <div className={classes.status}>{errand.status.replace("_", " ")}</div>
      </Grid>

      <Typography variant="body1" color="textPrimary">
        {errand.description}
      </Typography>

      <Grid container direction="row" className={classes.tags}>
        {errand.tags.map((tag, index) => (
          <Tag value={tag} color={index % 2 === 0 ? "#C4C4C4" : "#F8AFAF"} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Errand;
