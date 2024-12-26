import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Feature Details</h3>
      <p>Type: {feature.type}</p>
      <p>Name: {feature.name}</p>
      {feature.type === "Point" && (
        <p>Coordinates: {feature.coordinates.join(", ")}</p>
      )}
      {feature.type === "Polygon" && (
        <p>Coordinates: {JSON.stringify(feature.coordinates)}</p>
      )}
    </div>
  );
};

export default FeatureCard;
