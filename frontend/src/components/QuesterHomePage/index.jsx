import React, { useContext } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ErrandsCard from "./ErrandsCard";
import MessagesCardWithoutInput from "../shared/MessagesCardWithoutInput";
import { useQuery } from "react-query";
import { UserContext } from "../../contexts/UserContext";
import {
  getAcceptedErrandsForQuester,
  getAvailableErrandsForQuester,
} from "../../actions/errands";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "100vw",
      height: "90vh",
      maxHeight: "88vh",
      marginTop: "10px",
      minHeight: "100%",
    },
    third: {
      width: "32%",
    },
    half: {
      height: "50%",
      width: "100%",
    },
  })
);

const QuesterHomePage = () => {
  const classes = useStyles();

  const [user] = useContext(UserContext);

  // State Management

  // Queries
  const {
    data: availableErrands,
    isLoading: availableErrandsLoading,
    isSuccess: availableErrandsSuccess,
    refetch: availableErrandsRefetch,
  } = useQuery(["available_errands_quester"], () =>
    getAvailableErrandsForQuester(user.id)
  );

  const {
    data: acceptedErrands,
    isLoading: acceptedErrandsLoading,
    isSuccess: acceptedErrandsSuccess,
    refetch: acceptedErrandsRefetch,
  } = useQuery(["accepted_errands_quester"], () =>
    getAcceptedErrandsForQuester(user.id)
  );

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item className={classes.third}>
        {acceptedErrandsLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <ErrandsCard title="To Do Errands" errands={acceptedErrands} />
        )}
      </Grid>
      <Grid item className={classes.third}>
        {availableErrandsLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <ErrandsCard title="Available Errands" errands={availableErrands} />
        )}
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        padding="20px"
        className={classes.third}
      >
        <Grid item className={classes.half}>
          <ErrandsCard title="Pending Errands" errands={[]} />
        </Grid>
        <Grid item className={classes.half}>
          <MessagesCardWithoutInput />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuesterHomePage;
