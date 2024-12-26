import React, { useState } from "react";
import MapContainer from "./components/MapContainer";
import FeatureCard from "./components/FeatureCard";
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div>
      <h1>Spatial Data Map</h1>
      <MapContainer onFeatureSelect={setSelectedFeature} />
      {selectedFeature && <FeatureCard feature={selectedFeature} />}
    </div>
  );
};

export default App;
