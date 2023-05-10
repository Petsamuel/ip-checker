import { useState } from "react";
import Form from "./Form";

function Header() {
  const [userValue, setuserValue] = useState("");
  return (
    <section
      className="flex flex-col justify-center bg-cover
     text-white text-3xl  py-8 lg:bg-[url('http://drive.google.com/uc?export=view&id=1h7W_R8JxNhbZ1xG_4NyJ_jftUMlapZPJ')] bg-[url('http://drive.google.com/uc?export=view&id=1SU9P8kgHcTb8yejAbrYyYe4qkVhEVbvP')] 
     font-[Rubik] bg-no-repeat bg-center relative"
    >
      <Form
        title="IP Address Tracker"
        handleChange={(e) => {
          setuserValue(e.target.value);
        }}
        value={userValue}
      />
      <div className="absolute bottom-0   justify-center  gap-5 left-0 right-0 ml-auto mr-auto ">
        <div className="bg-[#ffff] text-gray-500 flex  py-4 items-center justify-center gap-8">
          {/* ip address */}
          <div className="">
            <p className="uppercase text-sm  ">Ip address</p>
            <p className="text-xl text-black font-semibold">Ip Address</p>
          </div>
          {/* location */}
          <div>
            <p className="uppercase text-sm border-r border-l border-gray-400 px-4">
              Location
            </p>
            <p className="text-xl text-black font-semibold">Location</p>
          </div>

          {/* timezone */}
          <div>
            <p className="uppercase text-sm border-r  border-gray-400 px-4">
              Timezone
            </p>
            <p className="text-xl text-black font-semibold">TimeZone</p>
          </div>

          {/* isp */}
          <div>
            <p className="uppercase text-sm">ISP</p>
            <p className="text-xl text-black font-semibold">ISP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
