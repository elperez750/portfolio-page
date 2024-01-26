import React from "react";

function Header({ text }) {
  return (
    <div className="ml-10 flex relative">
      <h1 className="text-center font-futura_bold text-7xl text-gray z-10 relative">
        {text}
      </h1>
      <div className="bg-red w-[20rem] h-[3rem] z-0 absolute left-24 top-8 rounded-none"></div>
    </div>
  );
}

export default Header;
