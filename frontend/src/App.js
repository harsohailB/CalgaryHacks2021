import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useEffect, useContext, Suspense, lazy } from "react";
import { LinearProgress } from "@material-ui/core";
import ls from "local-storage";
import "./App.css";
import Navbar from "./components/Navbar";
import QuesterHomePage from "./components/QuesterHomePage";
import ErrandPage from "./components/ErrandPage";
import PosterHomePage from "./components/PosterHomePage";
import SignUp from "./components/SignUp";
import { LOGIN } from "./contexts/types";
import { UserContext } from "./contexts/UserContext";
import Login from "./components/Login";

const LandingPage = lazy(() => import("./components/LandingPage"));

const App = () => {
  const [user, dispatchToUser] = useContext(UserContext);

  useEffect(() => {
    // if nothing, check localstorage to see if user is saved
    const userFromLocalStorage = ls.get("user");
    if (userFromLocalStorage) {
      dispatchToUser({ type: LOGIN, payload: userFromLocalStorage });
    } else {
      dispatchToUser({ type: LOGIN, payload: null });
    }
  }, [dispatchToUser]);

  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/poster" exact component={PosterHomePage} />
          <Route path="/quester" exact component={QuesterHomePage} />
          <Route path="/errand/:id" exact component={ErrandPage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
