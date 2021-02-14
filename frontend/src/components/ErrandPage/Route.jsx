import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import DeckGL, { PathLayer } from "deck.gl";

const NearestStopPaths = ({ viewport, mapStyles, points }) => {
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    let tempPathLayers = [];
    let lastPoint = points[0];
    points.forEach((point) => {
      let data = [
        {
          name: uuidv4(),
          color: [0, 205, 172],
          path: [
            [lastPoint.lon, lastPoint.lat],
            [point.lon, point.lat],
          ],
        },
      ];

      tempPathLayers.push(
        new PathLayer({
          id: uuidv4(),
          data,
          pickable: true,
          getWidth: 2,
          widthScale: 2,
          getColor: (data) => data.color,
          widthMinPixels: 2,
        })
      );

      lastPoint = point;
    });

    setLayers(tempPathLayers);
  }, []);

  return (
    <DeckGL
      viewState={viewport}
      width="100%"
      height="100%"
      controller={true}
      layers={layers}
      debug
    />
  );
};

export default NearestStopPaths;
