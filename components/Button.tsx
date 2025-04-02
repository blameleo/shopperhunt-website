/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export default function Button({ text ,shadow }: any) {
  return (
    <button className={`relative inline-block px-6 py-3 text-lg font-semibold text-[#422800] bg-[#F2DA10]  border-2 border-[#422800] rounded-[12px] ${ shadow ? "shadow-[2px_2px_0_0_#ffffff]": "shadow-[2px_2px_0_0_#422800]" }  transition-all duration-200 ease-out hover:bg-white active:shadow-[2px_2px_0_0_#422800] active:translate-x-[2px] active:translate-y-[2px] md:min-w-[120px] md:px-10`}>
     {text}
    </button>
  );
}
