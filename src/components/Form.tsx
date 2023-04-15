
import IconSvg from "../assets/images/icon-arrow.svg";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string;
}

function Form({ handleChange, value }: Props) {

  return (
    <section className="py-8 text-sm w-full grid place-items-center">
      <div className="inline-flex place-items top-60 w-screen text-black  justify-center mx-4">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="rounded-l-lg p-4 w-5/6 outline-none sm:w-2/6 "
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
