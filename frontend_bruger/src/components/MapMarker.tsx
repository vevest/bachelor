import { useEffect, useRef } from "react";
import { Icon, type IconOptions, type Marker as LeafletMarker } from "leaflet";
import { Marker, type MarkerProps } from "react-leaflet";
import MapPopup from "./MapPopup";
import type { service } from "../types/service.type";

interface Props extends MarkerProps {
  service: service;
  isSelected: boolean;
  onSelect: () => void;
}

const iconOptions: IconOptions = {
  iconUrl: "/icons/pets.svg",
  iconSize: [35, 35],
};

const markerIcon = new Icon(iconOptions);

export default function MapMarker({service, isSelected, onSelect, ...props}: Props) {
  const markerRef = useRef<LeafletMarker | null>(null);

  // Open popup when service is selected
  useEffect(() => {if (isSelected) {markerRef.current?.openPopup();}}, [isSelected]);

  return (
    <Marker {...props} ref={markerRef} icon={markerIcon} eventHandlers={{ click: onSelect }}>
      <MapPopup service={service} />
    </Marker>
  );
}