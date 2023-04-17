import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useRef } from "react";
import mapTiler from "./data/data";
interface Props {
  center: [number, number];
  zoom: number;
}
import "leaflet/dist/leaflet.css";
import { tileLayer } from "leaflet";

function Map({ center, zoom }: Props) {
  const [mapCenter, useMapCenter] = useState(center);
  const Mapref = useRef(null);
  
  

  return (
    <section className="relative w-full h-96">
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={Mapref}
      >
        <TileLayer
          attribution={mapTiler.mapTiler.attributions}
          url={mapTiler.mapTiler.url}
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

export default Map;
