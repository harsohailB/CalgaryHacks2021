import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#bbb",
    },
    text: {
      primary: "#000000",
      secondary: "#bbb",
    },
    background: {
      default: "#FFFFFF",
      secondary: "#EBEBEB",
    },
  },
  typography: {
    fontFamily: "Sora, sans-serif",
    h1: {
      fontWeight: "bold",
      fontSize: "4em",
    },
    h3: {
      fontSize: "2.5em",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "2.5em",
      fontWeight: "lighter",
    },
    h5: {
      fontSize: "1.5em",
      fontWeight: "lighter",
    },
    h6: {
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    h7: {
      fontSize: "1.3em",
    },
    p: {
      fontSize: "1em",
    },
    button: {
      textDecoration: "none",
      textTransform: "none",
      fontWeight: "normal",
    },
  },
  text: {
    primary: "#000000",
    secondary: "#bbb",
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
        color: "#fff",
      },
      textPrimary: {
        color: "#000000",
      },
    },
  },
});

export default theme;
