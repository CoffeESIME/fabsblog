import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "../../../App.css";
import { Container } from 'react-bootstrap';
import { geoData } from "../../../GPXFiles/ZacamulpaMarqueza";
function MapRoutes({
  zoom,
  center,
  routes,
  
}) {

	const positions = geoData.features.map(p => [p.geometry.coordinates[1], p.geometry.coordinates[0]]);
  return (
    <Container>
      <MapContainer
        center={[19.353536, -99.318017]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "25rem", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
	            pathOptions={{ fillColor: 'black', color: 'red' }}
	            positions={positions}
            />
      </MapContainer>
    </Container>
  );
}

export default MapRoutes;
