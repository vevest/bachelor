import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MapMarker from "./MapMarker";
import { Card } from "webcoreui/react";
import services from "../utils/eksempeldata.json";
import type { service } from "../types/service.type";

const serviceList = services as service[];

// Move map to selected service
function MapFocus({ selectedService }: { selectedService?: service }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedService) return;
    map.flyTo(
      [
        Number(selectedService.service_lat),
        Number(selectedService.service_long),
      ], 16
    );
  }, [selectedService, map]);
  return null;
}

export default function Map() {
  // Get selected service from URL
  const params = new URLSearchParams(window.location.search);
  const initialSlug = params.get("service");

  // Track selected service
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug);

  // Find selected service in example data
  const selectedService = serviceList.find(
    (service) => service.service_slug === selectedSlug
  );

  // Change selected service
  function selectService(slug: string) {
    setSelectedSlug(slug);
  }

  return (
    <Card>

      <Card>
        <MapContainer center={[55.6761, 12.5683]} zoom={13} scrollWheelZoom={true} style={{ height: "400px", width: "100%" }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <MapFocus selectedService={selectedService} />

          {serviceList.map((service) => (
            <MapMarker
              key={service.service_pk}
              position={[
                Number(service.service_lat),
                Number(service.service_long),
              ]}
              service={service}
              isSelected={selectedSlug === service.service_slug}
              onSelect={() => selectService(service.service_slug)}
            />
          ))}
        </MapContainer>
      </Card>

      <section className="service_list">
        <h2>Services</h2>

        {serviceList.map((service) => (
          <button key={service.service_pk} type="button" onClick={() => selectService(service.service_slug)}>
            {service.service_name}
          </button>
        ))}
      </section>
    </Card>
  );
}