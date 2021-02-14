import { Box, Button, Container, Grid, Link, TextField, Typography} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
        padding: "20px",
        backgroundColor: theme.palette.background.default,
    },
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

const SignUp= () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" marginTop="20%">
            <Box m={5} pt={2}></Box>
            <div className={classes.paper, classes.root}>
                <center>
                <Typography variant="h3" color="textPrimary">
                Sign Up
                </Typography>
                </center>
                <form className={classes.form} noValidate paddingTop={10}>
                <Box m={1} pt={1}></Box>
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
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
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
                        autoComplete="email"
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
}

export default SignUp;
