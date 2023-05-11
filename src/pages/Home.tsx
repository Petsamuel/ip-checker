import Header from "../components/Header";
import Map from "../components/Map";
import { useState } from "react";

function Home() {
  const [Position, setPosition] = useState<[number, number] | null>();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
  }
  const xPosition = (e: any) => {
    return e;
  };
  return (
    <section className=" h-full">
      <Header position={xPosition} />
      {Position && <Map center={Position} />}
    </section>
  );
}

export default Home;
