import React from "react";
export default function Navbar() {
  return (
    <div className="mx-auto w-[1000px] bg-black rounded-xl overflow-hidden drop-shadow-xl">
      <div className="block w-full p-3 text-center text-base font-bold uppercase border-3 border-black bg-black text-white relative transition-all duration-200  overflow-hidden hover:bg-blue-700 hover:border-blue-700 hover:text-white  hover:translate-x-[-10px] hover:translate-y-[-px]">
        <div className="flex-1 text-center text-white text-2xl hover:">Books</div>
      </div>
    </div>
  );
}
