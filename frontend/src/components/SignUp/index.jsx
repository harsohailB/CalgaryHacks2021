import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const SignUp = () => {
  const classes = useStyles();

  // State Management
  const [formUser, setFormUser] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    description: "",
  });

  const hasErrors = () => {
    return (
      formUser.username.length === 0 ||
      formUser.email.length === 0 ||
      formUser.password.length === 0 ||
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

  const submitForm = (event) => {
    event.preventDefault();
    if (!hasErrors()) {
      console.log(formUser);
    }
  };

  return (
    <Container component="main" maxWidth="sm" marginTop="20%">
      <Box m={5} pt={2}></Box>
      <center>
        <Typography variant="h3" color="textPrimary">
          Sign Up
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
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formUser.username}
                onChange={onFormChange}
                error={formUser.username.length === 0}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={onFormChange}
                error={formUser.email.length === 0}
              />
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
            Sign Up
          </Button>
          <Box m={1} pt={1}></Box>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body1">
                Already signed up? Sign in here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
