import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { LinearProgress } from "@material-ui/core";

import "./App.css";
import Navbar from "./components/Navbar";
import QuesterHomePage from "./components/QuesterHomePage";
import PosterHomePage from "./components/PosterHomePage";

const LandingPage = lazy(() => import("./components/LandingPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/poster" exact component={PosterHomePage} />
          <Route path="/quester" exact component={QuesterHomePage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
