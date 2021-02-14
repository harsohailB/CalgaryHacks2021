import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const envs = require("dotenv").config();

const Map = () => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  const [viewport, setViewport] = useState({
    latitude: 51.0447,
    longitude: -114.0719,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  });

  const mapStyles = {
    width: "100%",
    height: "50%",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px",
    padding: "20px",
  };

  return (
    <ReactMapGL
      id={"map"}
      {...viewport}
      width={mapStyles.width}
      height={mapStyles.height}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    ></ReactMapGL>
  );
};

export default Map;
