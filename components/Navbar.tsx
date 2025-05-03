"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="px-[1em] lg:mx-[10em] lg:py-[3em] py-[1em] border-b-2 border-black  flex justify-between items-center">
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
        {pathName === '/about-us' ? null :  <Link href={'/about-us'} className="capitalize cursor-pointer">about us</Link>}
        {pathName !== "/signup"   && (
          <li className="bg-white px-3 rounded-full cursor-pointer">FAQs</li>
        )}

        {pathName === "/signup" ? (
          <Link href="/signin">
            <Button className="bg-black text-[#F2DA10] drop-shadow-none">Sign In</Button>
          </Link>
        ) : (
          <Link href="/signup">
            <Button variant={"primary"}>Sign Up</Button>
          </Link>
        )}
      </ul>
    </div>
  );
}
