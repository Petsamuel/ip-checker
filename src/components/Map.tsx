import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment, useEffect, useRef, useState } from "react";
import { useGlobalState } from "./Form";
import "leaflet/dist/leaflet.css";

function Map() {
  const [userData] = useGlobalState("userData");
  const [position, setPosition] = useState<boolean>(false);
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]);
  const Mapref = useRef(null);
  useEffect(() => {
    setCenter([userData.latitude, userData.longitude]);
    console.log(userData.latitude);
    setPosition(true);
  }, []);
  return (
    <Fragment>
      <MapContainer
        center={position ? center : [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
        zoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position ? center : [51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
}

export default Map;
