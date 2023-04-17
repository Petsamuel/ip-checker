import IconSvg from "../assets/images/icon-arrow.svg";
import data from "../components/data/data";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const url = data.Geo_location.url;
const header = data.headers;

const FetchData = async () => {
  const response = await fetch(`${url}/`, {
    method: "Get",
    // header,
  }).then((res) => res.json());
  console.log(response);
};

function Form({ handleChange, value }: Props) {
  return (
    <section className="py-8 text-sm grid place-items-center relative">
      <div className="inline-flex place-items top-60 text-black  justify-center mx-4">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="rounded-l-lg p-4 w-96 outline-none"
          onChange={handleChange}
          value={value}
        />
        <button className="bg-black p-2 rounded-r-lg">
          {" "}
          <img src={IconSvg} alt="search" className="p-2" />
        </button>
      </div>
    </section>
  );
}

export default Form;
