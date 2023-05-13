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
  const [message, setMessage] = useState<string | null>();
  const [userInput, setUserInput] = useState<string | undefined>();
  const [userData, setUserData] = useGlobalState("userData");

  const User_url = "https://ipapi.co/json";
  // const url = `http://apiip.net/api/check?ip=${ip}&accessKey=${Secret_key}`;
  // const Secret_key = import.meta.env.VITE_APP_IP_SECRET_KEY;

  useEffect(() => {
    switch (true) {
      case userInput === undefined || null:
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
        break;

      case userInput !== undefined:
        break;

      default:
        break;
    }
  }, [userInput, userData]);

  // console.log(userData.ip);
  function Validate() {
    switch (true) {
      case userInput === undefined:
        const rest = setTimeout(() => {
          setMessage("cannot be black");
        }, 300);
        break;

      default:
        fetch(`https://ipapi.co/${userInput.ip}/json`)
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
          )
          .catch((error) => console.log(error));
        break;
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
              setUserInput({ ...userData, ip: e.target.value });
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
export { setGlobalState, useGlobalState, getGlobalState };
