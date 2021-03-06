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
import history from "./utils/history";
import SelectQuesterPage from "./components/SelectQuesterPage";
import CreateErrandpage from "./components/CreateErrandPage";
import ProfileHomePage from "./components/Profilepage";

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
    <BrowserRouter history={history}>
      <Navbar />

      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/create" exact component={CreateErrandpage} />
          <Route path="/select" exact component={SelectQuesterPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/poster" exact component={PosterHomePage} />
          <Route path="/quester" exact component={QuesterHomePage} />
          <Route path="/poster/errand/:id" exact component={ErrandPage} />
          <Route path="/quester/errand/:id" exact component={ErrandPage} />
          <Route path="/profile/:id" exact component={ProfileHomePage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
