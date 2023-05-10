import IconSvg from "../assets/images/icon-arrow.svg";
// import data from "../components/data/data";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
}

function Form({ handleChange, value, title }: Props) {
  return (
    <section className="py-8 text-sm ">
      <div className="top-60 text-black gap-5 grid items-center place-content-center">
        <h1 className="lg:text-4xl text-2xl items-center text-center font-[Rubik] ">
          {title}
        </h1>
        <div className="flex lg:w-[40em] md:w-80 w-full">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="rounded-l-lg p-4 outline-none w-full"
            onChange={handleChange}
            value={value}
          />
          <button className="bg-black p-2 rounded-r-lg ">
            {" "}
            <img src={IconSvg} alt="search" className="p-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form;
