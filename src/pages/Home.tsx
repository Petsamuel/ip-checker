import Header from "../components/Header";
import Map from "../components/Map";
import { useState } from "react";
import { useGlobalState } from "../components/Form";

function Home() {
  const [Position, setPosition] = useState<[number, number] | null>();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }

  return (
    <section className=" h-full">
      <Header />
      {Position && (
        <Map
          center={
             Position 
          }
        />
      )}
    </section>
  );
}

export default Home;
