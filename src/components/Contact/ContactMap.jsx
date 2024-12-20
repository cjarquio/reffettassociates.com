import { useState } from "react";
import "@mantine/core/styles.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Popover, Tooltip } from "@mantine/core";

export const ContactMap = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  const markers = [
    {
      markerOffset: -20,
      name: "Seattle",
      coordinates: { longitude: -122.335167, latitude: 47.608013 },
    },
    {
      markerOffset: 30,
      name: "Washington, D.C.",
      coordinates: { longitude: -77.0369, latitude: 38.9072 },
    },
    {
      markerOffset: -20,
      name: "Dallas",
      coordinates: { longitude: -96.808891, latitude: 32.779167 },
    },
    {
      markerOffset: -20,
      name: "New York",
      coordinates: { longitude: -73.935242, latitude: 40.73061 },
    },
    {
      markerOffset: -20,
      name: "Greensboro",
      coordinates: { longitude: -79.766235, latitude: 36.044659 },
    },
    {
      markerOffset: -20,
      name: "Sacramento",
      coordinates: { longitude: -121.478851, latitude: 38.575764 },
    },
  ];

  const handleClick = (location) => {
    if (selectedLocation === location) {
      setSelectedLocation("");
    } else {
      setSelectedLocation(location);
    }
  };

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ outline, borders }) => (
          <>
            <Geography geography={outline} fill="#0f2f5b" />
            <Geography geography={borders} fill="none" stroke="#FFF" />
          </>
        )}
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Popover
          position="right"
          offset={{ mainAxis: 5 }}
          opened={name === selectedLocation}
          onChange={setSelectedLocation}
          key={name}
        >
          <Popover.Target>
            <Tooltip label={name}>
              <Marker
                coordinates={[coordinates.longitude, coordinates.latitude]}
                id={name}
                onClick={() => handleClick(name)}
              >
                <circle
                  r={15}
                  fill="#bb2a2c"
                  stroke="#fff"
                  strokeWidth={2}
                  style={{ cursor: " pointer" }}
                />
              </Marker>
            </Tooltip>
          </Popover.Target>
          <Popover.Dropdown>Dropdown</Popover.Dropdown>
        </Popover>
      ))}
    </ComposableMap>
  );
};

export default ContactMap;
