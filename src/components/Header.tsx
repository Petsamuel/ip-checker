import { useState } from "react";
import Form from "./Form";
interface Props {
  title: string;
}

function Header({ title }: Props) {
  const [isvalue, setIsvalue] = useState("");
  return (
    <section className=" relative grid place-items-center w-full bg-cover font-[Rubik] text-white text-3xl py-8 desktopPng sm:mobilePng">
      <h1>{title}</h1>

      <Form
        handleChange={(event) => {
          setIsvalue(event.target.value);
        }}
        value={isvalue}
      />
      {isvalue}
    </section>
  );
}

export default Header;
