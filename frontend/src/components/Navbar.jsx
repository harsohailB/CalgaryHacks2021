import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import ProfileMenu from "./ProfileMenu";
import { useLocation } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

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
    subtitle: {
      fontSize: "1em",
      fontWeight: "normal",
      margin: "0",
      color: theme.palette.text.secondary,
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [role, setRole] = useState("");

  const [user] = useContext(UserContext);
  const siteType = useLocation().pathname.split("/")[1];
  let subtitle = "";
  if (siteType === "quester") {
    subtitle = "Errander";
  } else if (siteType === "poster") {
    subtitle = "Poster";
  }

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
            <span className={classes.subtitle}>{subtitle}</span>

            {subtitle === "Poster" && (
              <IconButton href="/create">
                <AddIcon />
              </IconButton>
            )}
          </Grid>

          {user ? (
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
                  href="/quester"
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className={classes.button}
                  disabled={role === "quester"}
                  onClick={() => setRole("quester")}
                >
                  Errander
                </Button>
              </Grid>

              <Grid item>
                <Button
                  href="/poster"
                  variant="outlined"
                  size="medium"
                  color="primary"
                  className={classes.button}
                  onClick={() => setRole("poster")}
                >
                  Poster
                </Button>
              </Grid>

              <ProfileMenu />
            </Grid>
          ) : (
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
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
