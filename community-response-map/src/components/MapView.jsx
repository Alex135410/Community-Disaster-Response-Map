import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Default icon fix
let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Component for handling clicks
function LocationMarker({ onAddMarker }) {
  useMapEvents({
    click(e) {
      onAddMarker(e.latlng);
    },
  });
  return null;
}

export default function MapView() {
  const [markers, setMarkers] = useState([]);
  const position = [33.7490, -84.3880]; // Atlanta coords

  const handleAddMarker = (latlng) => {
    setMarkers([...markers, latlng]);
  };

  return (
    <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Click listener */}
      <LocationMarker onAddMarker={handleAddMarker} />

      {/* Render all markers */}
      {markers.map((pos, idx) => (
        <Marker key={idx} position={pos}>
          <Popup>
            <p>New Report</p>
            <p>Lat: {pos.lat.toFixed(3)}, Lng: {pos.lng.toFixed(3)}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
