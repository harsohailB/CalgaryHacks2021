import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid container item xs={3} alignItems="flex-end">
            <h1>Errander</h1>
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
              <NavLink
                exact
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Landing
              </NavLink>
            </Grid>

            <Grid item>
              <NavLink
                exact
                to="/quester"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Quester HP
              </NavLink>
            </Grid>

            <Grid item>
              <NavLink
                exact
                to="/poster"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Poster HP
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
