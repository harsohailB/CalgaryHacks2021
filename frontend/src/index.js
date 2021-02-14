import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { UserProvider } from "./contexts/UserContext";
import App from "./App";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { SocketProvider } from "./contexts/SocketContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SocketProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </SocketProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
