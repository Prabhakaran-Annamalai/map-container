import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const sampleAPIResponse = {
  pointData: [
    { id: 1, name: "Point A", coordinates: [51.505, -0.09] },
    { id: 2, name: "Point B", coordinates: [51.515, -0.1] },
  ],
  polygonData: [
    {
      id: 1,
      name: "Polygon A",
      coordinates: [
        [51.505, -0.09],
        [51.515, -0.1],
        [51.52, -0.12],
      ],
    },
  ],
};

const MapComponent = ({ onFeatureSelect }) => {
  const [points, setPoints] = useState([]);
  const [polygons, setPolygons] = useState([]);

  useEffect(() => {
    // Simulate fetching data from API
    setPoints(sampleAPIResponse.pointData);
    setPolygons(sampleAPIResponse.polygonData);
  }, []);

  const handleClick = (feature) => {
    onFeatureSelect(feature);
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {points.map((point) => (
        <Marker
          key={point.id}
          position={point.coordinates}
          eventHandlers={{
            click: () => handleClick({ type: "Point", ...point }),
          }}
        >
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
      {polygons.map((polygon) => (
        <Polygon
          key={polygon.id}
          positions={polygon.coordinates}
          eventHandlers={{
            click: () => handleClick({ type: "Polygon", ...polygon }),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
