import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapMarker from "./MapMarker";
import { Card } from "webcoreui/react";
export default function Map() {
  return (
    <Card>
<MapContainer
      center={[55.671, 12.56]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker position={[55.67171804893556, 12.560288255467967]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </MapMarker>
    </MapContainer>
    </Card>
    
  );
}
