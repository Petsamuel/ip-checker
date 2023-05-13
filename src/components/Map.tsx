import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment, useRef } from "react";
import { useGlobalState } from "./Form";
import "leaflet/dist/leaflet.css";

interface Props {
  center: [number, number];
}

function Map({ center }: Props) {
  const [userData] = useGlobalState("userData");

  const Mapref = useRef(null);

  return (
    <Fragment>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={
            userData ? center : [userData.latitude, userData.longitude]
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
}

export default Map;
