import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment, useEffect, useRef, useState } from "react";
import { useGlobalState } from "./Form";
import "leaflet/dist/leaflet.css";

function Map() {
  const [userData] = useGlobalState("userData");
  const [position, setposition] = useState<[number, number]>();
  const Mapref = useRef(null);

  useEffect(() => {
    setposition([userData.latitude, userData.longitude]);
  }, [userData]);

  return (
    <Fragment>
      <MapContainer
        center={position || [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position || [51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
}

export default Map;
