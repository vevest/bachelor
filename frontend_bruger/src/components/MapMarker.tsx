import { Icon, type IconOptions } from "leaflet";
import { Marker, type MarkerProps } from "react-leaflet";
import MapPopup from "./MapPopup";
import type { service } from "../types/service.type";
const iconOptions: IconOptions = {
  iconUrl: "../../public/icons/pets.svg?url",
  iconSize: [35, 35],
};
const markerIcon = new Icon(iconOptions);
export default function MapMarker(props: MarkerProps, service: service) {
  return (
    <Marker position={props.position} icon={markerIcon}>
      <MapPopup></MapPopup>
    </Marker>
  );
}
