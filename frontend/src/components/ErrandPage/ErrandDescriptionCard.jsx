import React, { useContext, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Avatar,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import MapIcon from "@material-ui/icons/Map";
import Tag from "../shared/Tag";
import formatCurrency from "../../utils/formatCurrency";
import { useHistory, useLocation } from "react-router-dom";
import {
  posterAcceptQuesterForErrand,
  questerApplyForErrand,
  questerMoveErrandToComplete,
  questerMoveErrandToInProgress,
} from "../../actions/errands";
import Alert from "@material-ui/lab/Alert";
import { useMutation } from "react-query";
import { UserContext } from "../../contexts/UserContext";
import EqualizerIcon from "@material-ui/icons/Equalizer";

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
      detail: {
        fontSize: "1em",
        fontWeight: "normal",
        margin: "0",
        color: theme.palette.text.secondary,
      },
    },
  })
);

const ErrandDescriptionCard = ({ errand }) => {
  const classes = useStyles();
  const placeholderPic =
    "https://i2.wp.com/sclondon.ca/wp-content/uploads/2019/10/female-placeholder.jpg?ssl=1";

  const history = useHistory();

  const [displayAlert, setDisplayAlert] = useState(false);
  const [user] = useContext(UserContext);

  // ooleans
  const isPoster = useLocation().pathname.split("/")[1] === "poster";
  const alreadyAppliedForErrand = errand.applications.some(
    (application) => application.quester._id === user._id
  );

  // Mutation
  const acceptErrandMutation = useMutation(
    ({ questerId, errandId }) => questerApplyForErrand({ questerId, errandId }),
    {
      onSuccess: () => {
        handleSuccessfulApplication();
      },
      onError: () => {
        setDisplayAlert(true);
      },
    }
  );

  const acceptErrandApplicationMutation = useMutation(
    (applicationId) => posterAcceptQuesterForErrand(applicationId),
    {
      onSuccess: () => {
        handleSuccessfulApplicationAccept();
      },
      onError: () => {
        setDisplayAlert(true);
      },
    }
  );

  const moveErrandToInProgressMutation = useMutation(
    (errandId) => questerMoveErrandToInProgress(errandId),
    {
      onSuccess: () => {
        handleSuccessfulStageErrand();
      },
      onError: () => {
        setDisplayAlert(true);
      },
    }
  );

  const moveErrandToCompleteMutation = useMutation(
    (errandId) => questerMoveErrandToComplete(errandId),
    {
      onSuccess: () => {
        handleSuccessfulCompleteErrand();
      },
      onError: () => {
        setDisplayAlert(true);
      },
    }
  );

  const acceptErrand = () => {
    acceptErrandMutation.mutate({ questerId: user._id, errandId: errand._id });
  };

  const handleSuccessfulApplication = () => {
    acceptErrandMutation.reset();
    history.push("/quester");
  };

  const handleSuccessfulApplicationAccept = () => {
    acceptErrandApplicationMutation.reset();
    history.push("/poster");
  };

  const handleSuccessfulStageErrand = () => {
    moveErrandToInProgressMutation.reset();
    history.push("/quester");
  };

  const handleSuccessfulCompleteErrand = () => {
    moveErrandToCompleteMutation.reset();
    history.push("/quester");
  };

  const renderApplications = () => {
    return errand.applications.map((application) => {
      return (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ width: "50%" }}
          >
            <Avatar
              alt={application.quester.name}
              src={"placeholder"}
              className={classes.detailIcon}
            />
            <Typography variant="p" color="textPrimary">
              {application.quester.name}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            style={{ width: "50%" }}
            justify="flex-end"
          >
            <IconButton
              onClick={() =>
                acceptErrandApplicationMutation.mutate(application._id)
              }
            >
              <CheckIcon style={{ color: "#35CD99" }} />
            </IconButton>
          </Grid>
        </Grid>
      );
    });
  };

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
          <p className={classes.details}>
            {errand.distance ? errand.distance + " km" : "Virtual"}
          </p>
        </Grid>

        <Typography variant="p" color="textPrimary">
          {errand.description}
        </Typography>

        <Grid container style={{ marginTop: "20px" }}>
          {errand.startTime && (
            <Grid container item>
              <p className={classes.details}>
                <strong>Start Time: </strong>
                {new Date(errand.startTime).toLocaleTimeString()}
              </p>
            </Grid>
          )}
          {errand.endTime && (
            <Grid container item>
              <p className={classes.details}>
                <strong>End Time: </strong>
                {new Date(errand.endTime).toLocaleTimeString()}
              </p>
            </Grid>
          )}
          {errand.expiryTime && (
            <Grid container item>
              <p className={classes.details}>
                <strong>Expiry Time: </strong>
                {new Date(errand.expiryTime).toLocaleTimeString()}
              </p>
            </Grid>
          )}

          {errand.poster && (
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.detailField}
            >
              <Avatar
                alt={errand.poster.name}
                src={placeholderPic}
                className={classes.detailIcon}
              />
              <p className={classes.details}>{errand.poster.name}</p>
            </Grid>
          )}

          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.detailField}
          >
            <MapIcon className={classes.detailIcon} color="secondary" />
            <p className={classes.details}>{errand.address || "Virtual"}</p>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.detailField}
          >
            <EqualizerIcon className={classes.detailIcon} color="secondary" />
            <p className={classes.details}>{errand.status}</p>
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

      {isPoster ? (
        <Grid container direction="column" className={classes.footer}>
          {errand.status === "AVAILABLE" && (
            <Typography variant="h6" color="textPrimary">
              Applications
            </Typography>
          )}
          {errand.status === "ACCEPTED" && (
            <Typography variant="h6" color="textPrimary">
              Accepted By
            </Typography>
          )}

          {errand.applications.length > 0 && errand.status === "AVAILABLE" && (
            <Grid container direction="column">
              {renderApplications()}
            </Grid>
          )}

          {errand.applications.length === 0 && errand.status === "AVAILABLE" && (
            <Grid container direction="column" className={classes.detail}>
              <p>You have no applications yet.</p>
            </Grid>
          )}

          {errand.status === "ACCEPTED" && (
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{ width: "50%" }}
            >
              <Avatar
                alt={errand.quester.name}
                src={"placeholder"}
                className={classes.detailIcon}
              />
              <Typography variant="p" color="textPrimary">
                {errand.quester.name}
              </Typography>
            </Grid>
          )}
        </Grid>
      ) : (
        // Quester

        <div>
          {alreadyAppliedForErrand && errand.status === "AVAILABLE" && (
            <Typography variant="h6" color="textPrimary">
              Application Submitted
            </Typography>
          )}

          {!alreadyAppliedForErrand && errand.status === "AVAILABLE" && (
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
                onClick={() => history.push("/quester")}
              >
                Decline
              </Button>
              <Button
                variant="contained"
                className={classes.acceptButton}
                startIcon={<CheckIcon />}
                onClick={acceptErrand}
              >
                Accept
              </Button>
            </Grid>
          )}

          {errand.status === "ACCEPTED" && (
            <Grid
              container
              direction="row"
              justify="center"
              className={classes.footer}
            >
              <Button
                variant="contained"
                className={classes.acceptButton}
                startIcon={<CheckIcon />}
                onClick={() =>
                  moveErrandToInProgressMutation.mutate(errand._id)
                }
              >
                Step to In Progress
              </Button>
            </Grid>
          )}

          {errand.status === "IN_PROGRESS" && (
            <Grid
              container
              direction="row"
              justify="center"
              className={classes.footer}
            >
              <Button
                variant="contained"
                className={classes.acceptButton}
                startIcon={<CheckIcon />}
                onClick={() => moveErrandToCompleteMutation.mutate(errand._id)}
              >
                Mark as Completed
              </Button>
            </Grid>
          )}
        </div>
      )}

      {/* Error Alert */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={displayAlert}
        autoHideDuration={5000}
        onClose={() => setDisplayAlert(false)}
      >
        {isPoster ? (
          <Alert variant="filled" severity="error">
            Error: Application accept failed. Try again!
          </Alert>
        ) : (
          <Alert variant="filled" severity="error">
            Error: Errand change failed. Try again!
          </Alert>
        )}
      </Snackbar>
    </Grid>
  );
};

export default ErrandDescriptionCard;
