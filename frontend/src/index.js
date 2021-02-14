import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from '@material-ui/core/styles';
import { UserProvider } from "./contexts/UserContext";
import App from "./App";
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
