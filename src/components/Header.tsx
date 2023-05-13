import { useGlobalState } from "./Form";
import Form from "./Form";

function Header() {
  const [Userdata] = useGlobalState("userData");

  return (
    <section
      className="flex flex-col justify-center bg-cover
     text-white text-3xl  py-8 lg:bg-[url('http://drive.google.com/uc?export=view&id=1h7W_R8JxNhbZ1xG_4NyJ_jftUMlapZPJ')] bg-[url('http://drive.google.com/uc?export=view&id=1SU9P8kgHcTb8yejAbrYyYe4qkVhEVbvP')] 
     font-[Rubik] bg-no-repeat bg-center relative "
    >
      <Form title="IP Address Tracker" />
      <div className="relative bottom-0 flex justify-center  gap-5 z-50 py-4">
        <div className="bg-[#ffff] text-gray-500 flex  py-4  items-start justify-center gap-8 absolute rounded-xl p-16 mx-8 md:flex-row lg:flex-row">
          {/* ip address */}
          <div className="">
            <p className="uppercase text-xs  ">Ip address</p>
            <p className="text-xl text-black font-semibold">
              {Userdata && Userdata.ip}
            </p>
          </div>
          {/* location */}
          <div className=" border-l px-4">
            <p className="uppercase text-xs  border-gray-400 ">Location</p>
            <p className="text-xl text-black font-semibold">
              {Userdata && Userdata.city}
            </p>
          </div>

          {/* timezone */}
          <div className="border-l  px-4">
            <>
              <p className="uppercase text-xs ">Timezone</p>
              <p className="text-xl text-black font-semibold">
                {fetch === undefined ? (
                  "Loading..."
                ) : (
                  <> {Userdata && Userdata.timezone}</>
                )}
              </p>
            </>
          </div>

          {/* isp */}
          <div className="border-l  px-4">
            <>
              <p className="uppercase text-xs ">ISP</p>
              <p className="text-xl text-black font-semibold">
                {fetch === undefined ? (
                  "Loading..."
                ) : (
                  <> {Userdata && Userdata.org}</>
                )}
              </p>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
