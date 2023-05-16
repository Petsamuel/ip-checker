import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment, useEffect, useRef, useState } from "react";
import { useGlobalState } from "./Form";
import "leaflet/dist/leaflet.css";

function Map() {
  const [userData] = useGlobalState("userData");
  const [position, setposition] = useState<[number, number]>();
  const Mapref = useRef(null);

  return (
    <Fragment>
      <MapContainer
        center={[userData.latitude, userData.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
        zoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[userData.latitude, userData.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
}

export default Map;
