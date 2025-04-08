"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="mx-[1em] lg:mx-[10em] lg:py-[3em] py-[1em] border-b-2 border-black  flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo/ShopperHunt-Logo.png"
          alt="shopper hunt logo"
          width={262}
          height={56}
          className="cursor-pointer hidden lg:block"
        />
      </Link>
      <Link href="/">
        <Image
          src="/logo/ShopperHunt-Logo.png"
          alt="shopper hunt logo"
          width={150}
          height={56}
          className="cursor-pointer lg:hidden block"
        />
      </Link>{" "}
      <ul className="hidden lg:flex items-center gap-20 font-semibold ">
        <li className="capitalize cursor-pointer">about us</li>
        {pathName !== "/signup" && (
          <li className="bg-white px-3 rounded-full cursor-pointer">FAQs</li>
        )}
        <Button href="/signup" text="Sign Up" />
      </ul>
    </div>
  );
}
