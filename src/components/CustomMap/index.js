import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import sriLankaMap from "../../assets/map/lk.json";

const CustomMap = () => {
  // Array of cities with coordinates and the number you want to display
  const cities = [{ name: "Kandy", coordinates: [80.6337, 7.2906], number: 1 }];

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 12000,
          center: [80.7718, 7.8731], // Center of Sri Lanka
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#98d6ee",
          borderRadius: 5,
        }}
      >
        {/* Render the Sri Lanka GeoJSON map */}
        <Geographies geography={sriLankaMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                    stroke: "#000", // Outline color (black)
                    strokeWidth: 0.5, // Thickness of the outline
                  },
                  hover: {
                    fill: "#D6D6DA",
                    outline: "none",
                    stroke: "#000", // Maintain outline on hover
                    strokeWidth: 0.5,
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                    stroke: "#000",
                    strokeWidth: 0.5,
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Add markers for cities */}
        {cities.map(({ name, coordinates, number }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={20} fill="#000" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={4}
              style={{ fontFamily: "system-ui", fill: "#fff", fontSize: 18 }}
            >
              {number}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default CustomMap;
