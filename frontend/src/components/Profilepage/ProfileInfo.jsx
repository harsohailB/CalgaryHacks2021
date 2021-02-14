import React, { useContext, useState } from "react";
import { LOGIN } from "../../contexts/types";
import { UserContext } from "../../contexts/UserContext";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "100vw",
      height: "90vh",
      maxHeight: "88vh",
      marginTop: "10px",
    },
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const ProfileInfo = ({ pinfo }) => {
  const classes = useStyles();
  const [user, dispatchToUser] = useContext(UserContext);

  // State Management
  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
    name: "",
    age: "",
    description: "",
  });

  const hasErrors = () => {
    return (
      formUser.username.length === 0 ||
      formUser.password.length === 0 ||
      formUser.name.length === 0 ||
      formUser.age.length === 0 ||
      formUser.description.length === 0
    );
  };

  const onFormChange = (event) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (!hasErrors()) {
      const res = await axios.put("/api/user", {
        userId: user._id,
        ...formUser,
      });

      dispatchToUser({ type: LOGIN, payload: res.data });
    }
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Box m={5} pt={2}></Box>
      <center>
        <Typography variant="h3" color="textPrimary">
          Profile
        </Typography>
      </center>
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          paddingTop={10}
          onSubmit={submitForm}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formUser.username}
                onChange={onFormChange}
                error={formUser.username.length === 0}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onFormChange}
                error={formUser.password.length === 0}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                onChange={onFormChange}
                error={formUser.name.length === 0}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="age"
                label="Age"
                type="number"
                id="age"
                autoComplete="current-age"
                onChange={onFormChange}
                error={formUser.age.length === 0}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                id="description"
                autoComplete="current-description"
                onChange={onFormChange}
                error={formUser.description.length === 0}
              />
            </Grid>
          </Grid>

          <Box m={1} pt={2}></Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Profile
          </Button>
          <Box m={1} pt={1}></Box>
        </form>
      </div>
    </Grid>
  );
};

export default ProfileInfo;
