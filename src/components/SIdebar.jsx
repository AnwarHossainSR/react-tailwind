const Sidebar = () => {
  return (
    <div className="top-0 left-0 w-[25vw]  text-white fixed h-full bg-slate-600">
      <h1 className="text-3xl font-bold px-10 py-5 text-center">Sidebar</h1>
      <ul className="mt-2">
        <li className="text-xl font-bold cursor-pointer p-3 text-center  hover:bg-slate-400 hover:border-spacing-2">
          Home
        </li>
        <li className="text-xl font-bold cursor-pointer p-3 text-center  hover:bg-slate-400 hover:border-spacing-2">
          About
        </li>
        <li className="text-xl font-bold cursor-pointer p-3 text-center  hover:bg-slate-400 hover:border-spacing-2">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
