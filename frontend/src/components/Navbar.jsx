import { AppBar, Grid, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "1vh",
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
        <Grid justify="space-between" container>
          <Grid container item xs={3} alignItems="flex-end">
            <Typography variant="h3" color="textPrimary">
              Errander
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
