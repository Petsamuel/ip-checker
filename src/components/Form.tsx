import { useEffect, useState } from "react";
import IconSvg from "../assets/images/icon-arrow.svg";
import data from "../components/data/data";

interface Props {
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}

function Form({ title }: Props) {
  const options = data.options;
  const url = data.Geo_location.url;
  const [message, setMessage] = useState<string | null>();
  const [userInput, setUserInput] = useState<string | null>();

  function Validate() {
    fetch(url + userInput, options)
      .then((res) => res.json())
      .then((result) => console.log(result));

    switch (true) {
      case userInput === "":
        const rest = setTimeout(() => {
          setMessage("cannot be black");
        }, 300);
        break;

      default:
        setTimeout(() => {
          setMessage("Searching ....");
        }, 300);
        break;
    }
  }
  console.log(userInput);

  return (
    <section className="py-8 text-sm ">
      <div className="top-60 text-black gap-5 grid items-center place-content-center">
        <h1 className="lg:text-4xl text-2xl items-center text-center font-[Rubik] ">
          {title}
        </h1>
        <div className="flex lg:w-[40em] md:w-80 w-full">
          <input
            type="text"
            placeholder={"Search for any IP address or domain"}
            className={"rounded-l-lg p-4 outline-none w-full"}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />

          <button className="bg-black p-2 rounded-r-lg " onClick={Validate}>
            {" "}
            <img src={IconSvg} alt="search" className="p-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form;
