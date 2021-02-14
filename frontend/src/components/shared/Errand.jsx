import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import formatCurrency from "../../utils/formatCurrency";
import Tag from "./Tag";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "10px",
      borderBottom: "1px solid #bbb",
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
    header: {
      marginBottom: "15px",
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
  })
);

const Errand = ({ errand, available, questerSelect, numApplicants }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      onClick={() => history.push("/errand/1")}
    >
      <Grid container direction="row" justify="space-between">
        <p className={classes.title}>{errand.name}</p>
        <p className={classes.title}>{formatCurrency(errand.price)}</p>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.header}
      >
        <p className={classes.details}>{errand.endDateTime.toLocaleString()}</p>
        <p className={classes.details}>{errand.distance || "Virtual"} km</p>
      </Grid>

      <Typography variant="p" color="textPrimary">
        {errand.description}
      </Typography>

      <Grid container direction="row" className={classes.tags}>
        {errand.tags.map((tag, index) => (
          <Tag value={tag} color={index % 2 === 0 ? "#C4C4C4" : "#F8AFAF"} />
        ))}
      </Grid>

      {available && (
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
      )}
      <Grid container direction="row" justify="flex-end">
        {questerSelect ? (
          <Button variant="contained" className={classes.selectButton}>
            Select Quester ({numApplicants})
          </Button>
        ) : (
          <div />
        )}
      </Grid>
    </Grid>
  );
};

export default Errand;
