import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment, useEffect, useRef, useState } from "react";
import { useGlobalState } from "./Form";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [userData] = useGlobalState("userData");
  const [center, setCenter] = useState<[number, number]>([51.505, -0.09]);
  const mapRef = useRef(null);
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
    iconSize: [38, 38],
  });
  useEffect(() => {
    setCenter([userData.latitude, userData.longitude]);
    
  }, [userData.latitude, userData.longitude]);
  return (
    <Fragment>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
        zoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={center}
          icon={customIcon}
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
