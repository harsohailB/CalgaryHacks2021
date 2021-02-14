import { AppBar, Grid, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "8vh",
      backgroundColor: theme.palette.background.default,
    },
    button: {
      minWidth: "100px",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar>
        <Grid
          justify="space-between"
          container
          alignItems="center"
          className={classes.root}
        >
          <Grid container item xs={3} alignItems="flex-end">
            <Typography variant="h3" color="textPrimary">
              <Link href="/" lassName={classes.logo}>
                Errander
              </Link>
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs
            justify="flex-end"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Button
                href="/signup"
                variant="outlined"
                size="medium"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </Grid>

            <Grid item>
              <Button
                href="/login"
                variant="contained"
                size="medium"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
