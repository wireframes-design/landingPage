import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        zIndex: 0,
        filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
        transition: "filter 0.5s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>London</Popup>
        </Marker>

        <Marker position={[21.1458, 79.0882]}>
          <Popup>Nagpur</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
