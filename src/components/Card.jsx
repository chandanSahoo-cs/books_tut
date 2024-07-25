import React from "react";
import { Link } from "react-router-dom";

function Card({title,author,isbn,genre,publication_year,available,description}) {
  return (
    <Link to={`/preview/${isbn}`} className="w-80 border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000] font-sans transition-all duration-200 hover:translate-x-[-20px] hover:translate-y-[-20px] hover:cursor-pointer">
      <div className="flex items-center gap-4 mb-4 border-b-2 border-black pb-4">
        <div className="flex-shrink-0 flex items-center justify-center bg-black p-2">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
          </svg>
        </div>
        <div className="font-bold text-black text-xl uppercase">{title}</div>
      </div>
      <div className="mt-4 text-black text-sm leading-relaxed border-b-2 border-black pb-4 font-semibold">
        {description}
      </div>
      <div className="mt-4">
        <div
          className="block w-full p-3 text-center text-base font-bold uppercase border-3 border-black bg-white text-black relative transition-all duration-200 shadow-[5px_5px_0_#000] overflow-hidden mb-4 hover:bg-blue-700 hover:border-blue-700 hover:text-white hover:shadow-[7px_7px_0_#004280] hover:translate-x-[-2px] hover:translate-y-[-2px]">
          {author}
        </div>
        <div
          className={`block w-full p-3 text-center text-base font-bold uppercase border-3 border-black bg-black text-white relative transition-all duration-200 shadow-[5px_5px_0_#000] overflow-hidden ${available?`hover:bg-[#55da1a] hover:border-[#55da1a] hover:shadow-[7px_7px_0_#288000]`:`hover:bg-red-600 hover:border-red-600 hover:shadow-[7px_7px_0_#800000]`}hover:text-white  hover:translate-x-[-2px] hover:translate-y-[-2px]`}>
          {available?"Available":"Not Available"}
        </div>
      </div>
    </Link>
  );
}

export default Card;
