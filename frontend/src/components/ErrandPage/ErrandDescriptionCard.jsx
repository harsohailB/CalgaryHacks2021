import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Avatar } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import MapIcon from "@material-ui/icons/Map";
import Tag from "../shared/Tag";
import formatCurrency from "../../utils/formatCurrency";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "7px",
      padding: "20px",
      backgroundColor: theme.palette.background.default,
    },
    header: {
      marginBottom: "15px",
    },
    title: {
      fontSize: "1.2em",
      fontWeight: "normal",
      margin: "0",
      marginBottom: "20px",
    },
    details: {
      fontSize: "1em",
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
    detailIcon: {
      marginRight: "10px",
      width: "30px",
      height: "30px",
    },
    detailField: {
      marginTop: "5px",
      marginBottom: "5px",
    },
    tags: {
      marginTop: "5px",
    },
    footer: {
      width: "100%",
    },
    acceptButton: {
      margin: "10px",
      backgroundColor: "#35CD99",
      "&:hover": {
        backgroundColor: "#35CD99",
        borderColor: "#0062cc",
        boxShadow: "none",
      },
    },
    declineButton: {
      margin: "10px",
      backgroundColor: "#FA6584",
      "&:hover": {
        backgroundColor: "#FA6584",
        borderColor: "#0062cc",
        boxShadow: "none",
      },
    },
  })
);

const ErrandDescriptionCard = ({ errand }) => {
  const classes = useStyles();
  const placeholderPic =
    "https://i2.wp.com/sclondon.ca/wp-content/uploads/2019/10/female-placeholder.jpg?ssl=1";

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      justify="space-between"
    >
      <Grid container>
        <Grid container direction="row" justify="space-between">
          <Typography variant="h6" color="textPrimary">
            {errand.name}
          </Typography>
          {errand.price && (
            <Typography variant="h6" color="textPrimary">
              {formatCurrency(errand.price)}
            </Typography>
          )}
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          className={classes.header}
        >
          {errand.endTime && (
            <p className={classes.details}>{errand.endTime.toLocaleString()}</p>
          )}
          <p className={classes.details}>
            {errand.distance ? errand.distance + " km" : "Virtual"}
          </p>
        </Grid>

        <Typography variant="p" color="textPrimary">
          {errand.description}
        </Typography>

        <Grid container style={{ marginTop: "20px" }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.detailField}
          >
            <Avatar
              alt={errand.posterName}
              src={placeholderPic}
              className={classes.detailIcon}
            />
            <p className={classes.details}>{errand.poster.name}</p>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.detailField}
          >
            <MapIcon className={classes.detailIcon} color="secondary" />
            <p className={classes.details}>{errand.address}</p>
          </Grid>
        </Grid>

        <Grid container direction="row" className={classes.tags}>
          {errand.tags.map((tag, index) => (
            <Tag
              value={tag.text}
              color={index % 2 === 0 ? "#C4C4C4" : "#F8AFAF"}
            />
          ))}
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
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

export default ErrandDescriptionCard;
