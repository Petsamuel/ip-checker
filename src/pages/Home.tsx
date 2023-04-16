import Header from "../components/Header";
import Map from "../components/Map";
interface Props {
  text: string;
}

function Home({ text }: Props) {
  return (
    <section className="grid grid-cols-1 relative">
      <Header title="IP Address Tracker" />
      <Map center={[51.505, -0.09]} zoom={13} />
    </section>
  );
}

export default Home;
