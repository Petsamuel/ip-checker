import { useState } from "react";
import Form from "./Form";
interface Props {
  title: string;
}

function Header({ title }: Props) {
  const [isValue, setIsValue] = useState("");
  return (
    <section className=" relative grid place-items-center bg-cover font-[Rubik] text-white text-3xl py-8 desktopPng sm:mobilePng">
      <h1>{title}</h1>
      <Form
        handleChange={(event) => {
          setIsValue(event.target.value);
        }}
        value={isValue}
      />
      {isValue}
    </section>
  );
}

export default Header;
