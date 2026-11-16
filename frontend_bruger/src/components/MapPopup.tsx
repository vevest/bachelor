import type { PopupOptions } from "leaflet";
import { Popup } from "react-leaflet";
import { Card } from "webcoreui/react";

export default function MapPopup(props: PopupOptions) {
  return (
    <Popup>
      <Card>her skal beskrivelse osv være</Card>
    </Popup>
  );
}
