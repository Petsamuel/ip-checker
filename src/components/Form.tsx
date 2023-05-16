import { useEffect, useState } from "react";
import IconSvg from "../assets/images/icon-arrow.svg";
import { createGlobalState } from "react-hooks-global-state";

interface Props {
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}
const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  userData: {
    ip: "",
    city: "",
    latitude: 51.505,
    longitude: -0.09,
    org: "",
    timezone: "",
  },
});

function Form({ title }: Props) {
  const [message, setMessage] = useState<boolean>(false);
  const [userData, setUserData] = useGlobalState("userData");
  const [userInput, setUserInput] = useState<string | null>();

  const User_url = "https://ipapi.co/json";

  useEffect(() => {
    if (userInput === undefined || null) {
      fetch(User_url)
        .then((result) => result.json())
        .then((result) =>
          setUserData({
            ...userData,
            ip: result.ip,
            city: result.city,
            timezone: result.timezone,
            org: result.org,
            latitude: result.latitude,
            longitude: result.longitude,
          })
        );
    }
  }, []);

  function Validate() {
    const pattern = /([0-9])\w+/g;

    if (pattern.test(userInput ? userInput : "")) {
      fetch(`https://ipapi.co/${userInput}/json`)
        .then((result) => result.json())
        .then((result) =>
          setUserData({
            ...userData,
            ip: result.ip,
            city: result.city,
            timezone: result.timezone,
            org: result.org,
            latitude: result.latitude,
            longitude: result.longitude,
          })
        );
      console.log("worked");
    } else {
      setMessage(true);
    }
  }
  return (
    <section className="py-8 text-sm ">
      <div className="top-60 text-black gap-5 grid items-center place-content-center">
        <h1 className="lg:text-4xl text-2xl items-center text-center font-[Rubik] ">
          {title}
        </h1>
        <div className="flex lg:w-[40em] md:w-80 w-full">
          <input
            type="text"
            placeholder={"Search for any IP address "}
            className={"rounded-l-lg p-4 outline-none w-full"}
            onChange={(e) => {
              setUserInput(e.target.value);
              setMessage(false);
            }}
          />

          <button className="bg-black p-2 rounded-r-lg " onClick={Validate}>
            {" "}
            <img src={IconSvg} alt="search" className="p-2" />
          </button>
          <br />
        </div>
        <div
          className={
            message === false || undefined
              ? "hidden"
              : "text-xl text-gray-200 text-center"
          }
        >
          Invalid IP Address
        </div>
      </div>
    </section>
  );
}

export default Form;
export { setGlobalState, useGlobalState, getGlobalState };
