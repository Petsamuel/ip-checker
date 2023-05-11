import { useEffect, useState } from "react";
import Form from "./Form";

interface Props {
  position: (e: null) => void;
}

function Header({ position }: Props) {
  const [fetch, setFetch] = useState<null>();
  const [Position, setGeoPosition] = useState<[] | null>([]);

  const Result = (e: any) => {
    setFetch(e);
  };

  useEffect(() => {
    return setGeoPosition(position);
  });

  return (
    <section
      className="flex flex-col justify-center bg-cover
     text-white text-3xl  py-8 lg:bg-[url('http://drive.google.com/uc?export=view&id=1h7W_R8JxNhbZ1xG_4NyJ_jftUMlapZPJ')] bg-[url('http://drive.google.com/uc?export=view&id=1SU9P8kgHcTb8yejAbrYyYe4qkVhEVbvP')] 
     font-[Rubik] bg-no-repeat bg-center relative "
    >
      <Form title="IP Address Tracker" Result={Result} />
      <div className="relative bottom-0 flex justify-center  gap-5 z-50 py-4">
        <div className="bg-[#ffff] text-gray-500 flex  py-4  items-start justify-center gap-8 absolute rounded-xl p-16 mx-8 md:flex-row lg:flex-row">
          {/* ip address */}
          <div className="">
            <p className="uppercase text-xs  ">Ip address</p>
            <p className="text-xl text-black font-semibold">
              {fetch && fetch.ip}
            </p>
          </div>
          {/* location */}
          <div className=" border-l px-4">
            <p className="uppercase text-xs  border-gray-400 ">Location</p>
            <p className="text-xl text-black font-semibold">
              {fetch && fetch.city}
            </p>
          </div>

          {/* timezone */}
          <div className="border-l  px-4">
            {!fetch.timezone ? (
              <>
                <p className="uppercase text-xs ">Timezone</p>
                <p className="text-xl text-black font-semibold">
                  {fetch && fetch.timezone}
                </p>
              </>
            ) : (
              <>
                <p className="uppercase text-xs ">PhoneCode</p>
                <p className="text-xl text-black font-semibold">
                  {fetch && fetch.phoneCode}
                </p>
              </>
            )}
          </div>

          {/* isp */}
          <div className="border-l  px-4">
            {/* <p className="uppercase text-sm">ISP</p>
            <p className="text-xl text-black font-semibold">
              {fetch && fetch.isp}
            </p> */}
            {!fetch.isp ? (
              <>
                <p className="uppercase text-xs ">ISP</p>
                <p className="text-xl text-black font-semibold">
                  {fetch && fetch.isp}
                </p>
              </>
            ) : (
              <>
                <p className="uppercase text-xs ">Domains</p>
                <p className="text-xl text-black font-semibold">
                  {fetch && fetch.topLevelDomains}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
