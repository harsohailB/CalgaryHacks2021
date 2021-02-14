import { Box, Button, Container, Grid, Link, TextField, Typography} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
            <center>
            <Typography variant="h3" color="textPrimary">
            Login
            </Typography>
            </center>
            <div className={classes.paper}>
                <form className={classes.form} noValidate paddingTop={10}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username/Email"
                        name="username"
                        autoComplete="username"
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
                    Login
                </Button>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;
