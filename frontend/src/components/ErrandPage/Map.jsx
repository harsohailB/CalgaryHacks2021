import { Grid } from "@material-ui/core";
import { Marker, Popup } from "react-map-gl";
import { Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { getDirections } from "../../actions/directions";
import Route from "./Route";

const mapStyles = {
  width: "100%",
  height: "100%",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
  padding: "20px",
};

const Map = ({ errandAddress }) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  const [viewport, setViewport] = useState({
    latitude: 51.0447,
    longitude: -114.0719,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  });

  const [currentLocation, setCurrentLocation] = useState();
  const [destination, setDestination] = useState(
    errandAddress || {
      title: "",
      lat: 51.159521,
      lon: -114.049419,
    }
  );
  const [directionsPoints, setDirectionsPoints] = useState([]);

  useEffect(() => {
    // Sets map to your current location
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (currentLocation && destination) {
      getDirections(
        currentLocation.latitude,
        currentLocation.longitude,
        destination.latitude,
        destination.longitude
      ).then((fetchedDirection) => {
        const stepCoords = fetchedDirection.routes[0].geometry.coordinates.map(
          (coordinate) => {
            return {
              lon: coordinate[0],
              lat: coordinate[1],
            };
          }
        );
        setDirectionsPoints(stepCoords);
        setViewport({
          ...viewport,
          latitude: stepCoords[0].lat,
          longitude: stepCoords[0].lon,
        });
      });
    }
  }, [currentLocation, destination]);

  return (
    <ReactMapGL
      id={"map"}
      {...viewport}
      width={mapStyles.width}
      height={mapStyles.height}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {currentLocation && (
        <Marker
          latitude={currentLocation.lat}
          longitude={currentLocation.lon}
          offsetLeft={-12}
          offsetTop={-24}
        >
          <Tooltip placement="top" title="Your Location">
            <DriveEtaIcon color="secondary" />
          </Tooltip>
        </Marker>
      )}

      {destination && (
        <Marker
          latitude={destination.lat}
          longitude={destination.lon}
          offsetLeft={-12}
          offsetTop={-24}
        >
          <Tooltip placement="top" title="Destination">
            <LocationOnIcon color="secondary" />
          </Tooltip>
        </Marker>
      )}

      {directionsPoints.length > 0 && (
        <Route
          viewport={viewport}
          mapStyles={mapStyles}
          points={directionsPoints}
        />
      )}
    </ReactMapGL>
  );
};

export default Map;
