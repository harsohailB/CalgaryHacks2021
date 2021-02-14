import React, { useContext, useEffect, useState } from "react";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ErrandsCard from "../QuesterHomePage/ErrandsCard";
//import Message from "../ErrandPage/Message"
import Message from "../shared/MessagesCardWithoutInput";
import {
  getAcceptedErrandsForPoster,
  getAvailableErrandsForPoster,
  getCompletedErrandsForPoster,
  getInProgressErrandsForPoster,
} from "../../actions/errands";
import { useQuery } from "react-query";
import { UserContext } from "../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    height: "90vh",
    maxHeight: "90vh",
    marginTop: "10px",
  },
  mid: {
    width: "46%",
  },
  leftThird: {
    width: "32%",
  },
  rightThird: {
    width: "30%",
    height: "90%",
  },
}));

const PosterHomePage = () => {
  const classes = useStyles();

  const [user] = useContext(UserContext);
  const [
    acceptedInProgressCompletedErrands,
    setAcceptedInProgressCompletedErrands,
  ] = useState([]);

  // Queries
  const {
    data: availableErrands,
    isLoading: availableErrandsLoading,
    isSuccess: availableErrandsSuccess,
    refetch: availableErrandsRefetch,
  } = useQuery(["available_errands_quester"], () =>
    getAvailableErrandsForPoster(user._id)
  );

  const {
    data: acceptedErrands,
    isLoading: acceptedErrandsLoading,
    isSuccess: acceptedErrandsSuccess,
    refetch: acceptedErrandsRefetch,
  } = useQuery(["accepted_errands_quester", user._id], () =>
    getAcceptedErrandsForPoster(user._id)
  );

  const {
    data: inProgressErrands,
    isLoading: inProgressErrandsLoading,
    isSuccess: inProgressErrandsSuccess,
    refetch: inProgressErrandsRefetch,
  } = useQuery(["inProgress_errands_quester", user._id], () =>
    getInProgressErrandsForPoster(user._id)
  );

  const {
    data: completedErrands,
    isLoading: completedErrandsLoading,
    isSuccess: completedErrandsSuccess,
    refetch: completedErrandsRefetch,
  } = useQuery(["completed_errands_quester", user._id], () =>
    getCompletedErrandsForPoster(user._id)
  );

  useEffect(() => {
    let tempErrands = [];
    if (acceptedErrandsSuccess) {
      tempErrands = [...tempErrands, ...acceptedErrands];
    }
    if (inProgressErrandsSuccess) {
      console.log(inProgressErrands);
      tempErrands = [...tempErrands, ...inProgressErrands];
    }
    if (completedErrandsSuccess) {
      tempErrands = [...tempErrands, ...completedErrands];
    }

    setAcceptedInProgressCompletedErrands(tempErrands);
  }, [acceptedErrands, inProgressErrands, completedErrands]);

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item className={classes.leftThird}>
        {acceptedErrandsLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <ErrandsCard
            title="Accepted Errands"
            errands={acceptedInProgressCompletedErrands}
          />
        )}
      </Grid>
      <Grid item className={classes.leftThird}>
        {availableErrandsLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <ErrandsCard title="Posted Errands" errands={availableErrands} />
        )}
      </Grid>
      <Grid item className={classes.rightThird}>
        <Message></Message>
      </Grid>
    </Grid>
  );
};

export default PosterHomePage;
