import React from "react";

function Header({ text }) {
  return (
    <div className="flex relative">
      <h1 className="text-center font-futura_bold text-4xl laptop:text-7xl text-blue-200 z-10 relative">
        {text}
    
      </h1>
      <div className="bg-red w-[8rem] h-[2rem]  laptop:w-[18rem] laptop:h-[4rem] z-0 absolute left-24 top-4 rounded-none"></div>
    </div>
  );
}

export default Header;
