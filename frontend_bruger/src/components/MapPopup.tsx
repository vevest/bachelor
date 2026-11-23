import type { PopupOptions } from "leaflet";
import { Popup } from "react-leaflet";
import { Badge, Card, Flex } from "webcoreui/react";
import type { service } from "../types/service.type";

interface Props extends PopupOptions {
  service: service;
}

export default function MapPopup({ service }: Props) {
  return (
    <Popup>
      <Card>
        <img className="service_logo" src={service.service_logo} alt="{service.service_name} logo" />
        <Flex direction="row" alignment={{ horizontal: 'between', vertical: 'end' }}>
          <h3>{service.service_name}</h3>
          <Badge className='open_badge' theme={service.service_is_open ? 'success' : 'alert'}>
            {service.service_is_open ? 'Open' : 'Closed'}
          </Badge>
        </Flex>
        <p>{service.service_street} {service.service_street_number}</p>
        <p>{service.service_zip} {service.service_city}</p>
        <a href={`/services/${service.service_slug}`}>See more</a>
      </Card>
    </Popup>
  );
}