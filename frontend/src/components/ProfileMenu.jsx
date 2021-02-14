import {
  Avatar,
  Button,
  Collapse,
  createStyles,
  Grid,
  Icon,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { LOGOUT } from "../contexts/types";
import { UserContext } from "../contexts/UserContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileButton: {
      backgroundColor: theme.palette.background.default,
      fontWeight: "bold",
      boxShadow: "none",
      color: theme.palette.text.secondary,
      "&:hover": {
        color: theme.palette.background.default,
      },
    },
    profileMenu: {
      backgroundColor: theme.palette.background.default,
    },
    menuItem: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderRadius: "10px",
    },
  })
);

const ProfileMenu = () => {
  const classes = useStyles();

  const [user, dispatchToUser] = useContext(UserContext);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);

  const handleProfileMenuClick = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleLogout = () => {
    dispatchToUser({ type: LOGOUT, payload: user });
    window.location.reload(true);
  };

  return (
    <Grid item>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        startIcon={<Avatar alt={user.name} src="placeholder" />}
        endIcon={
          <Icon
            className={
              profileMenuAnchorEl ? "fa fa-angle-up" : "fa fa-angle-down"
            }
          />
        }
        className={classes.profileButton}
        onClick={handleProfileMenuClick}
      >
        {user.name}
      </Button>
      <Menu
        elevation={0}
        anchorEl={profileMenuAnchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(profileMenuAnchorEl)}
        classes={{ paper: classes.profileMenu }}
        onClose={handleProfileMenuClose}
      >
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <Icon
              className="fa fa-user-circle"
              fontSize="small"
              color="secondary"
              style={{ color: "black" }}
            />
          </ListItemIcon>
          <ListItemText style={{ color: "black" }}>Account</ListItemText>
        </MenuItem>

        <MenuItem className={classes.menuItem} onClick={handleLogout}>
          <ListItemIcon>
            <Icon
              className="fa fa-step-backward"
              fontSize="small"
              style={{ color: "red" }}
            />
          </ListItemIcon>
          <ListItemText style={{ color: "red" }}>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Grid>
  );
};

export default ProfileMenu;
