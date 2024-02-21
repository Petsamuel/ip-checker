export const Testing = ()=>{
   export const nav = [
     {
       name: "home",
       link: "",
    },
    {
      name: "about",
     link: "",
    },
   ];
  return (
    <div>
      <header className="fixed w-screen text-black bg-white shadow-md py-4">
        <nav className=" relative flex content-around justify-around items-center">
          <div className="brand">Brand Logo</div>
          <ul className="flex gap-4 lg:flex-row flex-col">

              {nav.map((val, key)=>(
            <li className="uppercase" kay={val.key}>{val.name}</li>))}
           
          </ul>
        </nav>
      </header>
      {/* mobile */}
      
    </div>
  );
}
