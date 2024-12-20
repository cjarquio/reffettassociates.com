import "@mantine/core/styles.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";


export const ContactMap = () => {
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
      coordinates: { longitude: -73.935242, latitude: 40.730610 },
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
    }
  ];
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
        <Marker
          key={name}
          coordinates={[coordinates.longitude, coordinates.latitude]}
          id={name}
        >
          <circle r={15} fill="#bb2a2c" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default ContactMap;
