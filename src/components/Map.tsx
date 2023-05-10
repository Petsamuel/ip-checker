import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Fragment, useState, useRef } from "react";
import mapTiler from "./data/data";
import "leaflet/dist/leaflet.css";

interface Props {
  center: [number, number];
}

function Map({ center }: Props) {
  const Mapref = useRef(null);

  return (
    <section>
      <MapContainer
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
        center={[6.62103, 3.37469]}
        zoomAnimation={true}
        markerZoomAnimation={true}
        scroll-smooth={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
[6.62103, 3.37469];

export default Map;
