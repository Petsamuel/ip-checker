export default function Testing() {
  // export const nav = [
  //   {
  //     name: "home",
  //     link: "",
  //   },
  //   {
  //     name: "home",
  //     link: "",
  //   },
  // ];
  return (
    <div>
      <header className="fixed w-screen text-black bg-white shadow-md py-4">
        <nav className=" relative flex content-around justify-around items-center">
          <div className="brand">Brand Logo</div>
          <ul className="flex gap-4">
            <li className="uppercase">home</li>
            <li className="uppercase">about</li>
            <li className="uppercase">team</li>
            <li className="uppercase">gallery</li>
            <li className="uppercase">event</li>
            <li className="uppercase">support moyi</li>
            <li className="uppercase">contact</li>
          </ul>
        </nav>
      </header>
      {/* mobile */}
      
    </div>
  );
}
