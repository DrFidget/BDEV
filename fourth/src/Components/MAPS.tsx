import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markericon from "../assets/placeholder.png";

export const MAPS = () => {
  const markers = [
    { geocode: [31.5, 74.32], popup: "I'm a popup1" },
    { geocode: [31.4, 74.32], popup: "I'm a popup2" },
  ];

  const customIcon = new L.Icon({
    iconUrl: markericon,
    iconSize: [38, 38],
  });

  return (
    <>
      <MapContainer
        center={[31.5, 74.32]}
        zoom={13}
        style={{ height: "100vh" }}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};
