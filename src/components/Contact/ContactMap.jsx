import { useState } from "react";
import "@mantine/core/styles.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {
  Popover,
  Title,
  Tooltip,
  Text,
  Box,
  Image,
  Container,
} from "@mantine/core";
import { raTeam } from "../About/Team/teamHelperFunctions";

export const ContactMap = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  const markers = [
    {
      markerOffset: -20,
      name: "Seattle",
      contactName: "William Reffett",
      coordinates: { longitude: -122.335167, latitude: 47.608013 },
    },
    {
      markerOffset: 30,
      name: "Washington, D.C.",
      contactName: "Eric Reffett",
      coordinates: { longitude: -77.0369, latitude: 38.9072 },
    },
    {
      markerOffset: -20,
      name: "Dallas",
      contactName: "",
      coordinates: { longitude: -96.808891, latitude: 32.779167 },
    },
    {
      markerOffset: -20,
      name: "New York",
      contactName: "Gen. Glenn Lesniak (Ret.)",
      coordinates: { longitude: -73.935242, latitude: 40.73061 },
    },
    {
      markerOffset: -20,
      name: "Greensboro",
      contactName: "Nancy Hoffman",
      coordinates: { longitude: -79.766235, latitude: 36.044659 },
    },
    {
      markerOffset: -20,
      name: "Sacramento",
      contactName: "Tim Geriak",
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
            <Geography geography={outline} fill="#008000" />
            <Geography geography={borders} fill="none" stroke="#FFF" />
          </>
        )}
      </Geographies>
      {markers.map(({ name, coordinates, contactName }) => {
        const locationContact = raTeam.find(
          (teamMember) => teamMember.name === contactName
        );

        return (
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
                    r={10}
                    fill="#bb2a2c"
                    stroke="#fff"
                    strokeWidth={2}
                    style={{ cursor: " pointer" }}
                  />
                </Marker>
              </Tooltip>
            </Popover.Target>
            {locationContact && (
              <Popover.Dropdown display={"flex"} px={"1rem"}>
                <Image
                  src={locationContact.image}
                  fit="contain"
                  w={"10rem"}
                  pr={"1rem"}
                />
                <Box>
                  <Title order={6}>{name} Office</Title>
                  <Text>{locationContact.name}</Text>
                  <Text>{locationContact.email}</Text>
                  {locationContact.ph && <Text>{locationContact.ph}</Text>}
                </Box>
              </Popover.Dropdown>
            )}
          </Popover>
        );
      })}
    </ComposableMap>
  );
};

export default ContactMap;
