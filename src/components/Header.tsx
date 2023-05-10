import { useState } from "react";
import Form from "./Form";

function Header() {
  const [userValue, setuserValue] = useState("");
  return (
    <section className=" justify-center bg-cover  text-white text-3xl py-8 bg-blue-200 font-[Rubik] ">
      <Form
        title="IP Address Tracker"
        handleChange={(e) => {
          setuserValue(e.target.value);
        }}
        value={userValue}
      />
      {userValue}
    </section>
  );
}

export default Header;
