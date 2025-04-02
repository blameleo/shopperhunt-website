import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="mx-[1em] lg:mx-[10em] lg:py-[3em] py-[1em] border-b-2 border-black  flex justify-between items-center">
      <div className="hidden lg:block ">
        <Image
          src="/logo/ShopperHunt-Logo.png"
          alt="shopper hunt logo"
          width={262}
          height={56}
          className="cursor-pointer"
        />
      </div>
      <div className="lg:hidden block">
        <Image
          src="/logo/ShopperHunt-Logo.png"
          alt="shopper hunt logo"
          width={150}
          height={56}
          className="cursor-pointer"
        />
      </div>
      
      {" "}
      <ul className="hidden lg:flex items-center gap-20 font-semibold ">
        <li className="capitalize cursor-pointer">about us</li>
        <li className="bg-white px-3 rounded-full cursor-pointer">FAQs</li>
        <Button text="Sign Up" />
      </ul>
    </div>
  );
}
