import Header from "../components/Header";
import Map from "../components/Map";

function Home() {
  return (
    <section className="flex flex-col h-full">
      <Header />
      <div className="h-full w-full">
        <Map center={[51.505, -0.09]} />
      </div>
    </section>
  );
}

export default Home;
