"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "About Us",
      href: "/about-us",
      showOn: pathName !== "/about-us",
    },
    {
      name: "FAQs",
      href: "/faqs",
      showOn: pathName !== "/signup",
    },
  ];

  return (
    <header className="px-[1em] lg:mx-[10em] lg:py-[3em] py-[1em] border-b-2 border-black flex justify-between items-center">
      <Link href="/" className="cursor-pointer" aria-label="ShopperHunt Home">
        <Image
          src="/logo/ShopperHunt-Logo.png"
          alt="ShopperHunt logo"
          width={150}
          height={56}
          className="lg:hidden"
          priority
        />
        <Image
          src="/logo/ShopperHunt-Logo.png"
          alt="ShopperHunt logo"
          width={262}
          height={56}
          className="hidden lg:block"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-20 font-semibold">
          {navLinks.map(
            (link) =>
              link.showOn && (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="capitalize cursor-pointer hover:text-gray-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              )
          )}
          {pathName === "/signup" ? (
            <li>
              <Link href="/signin">
                <Button className="bg-black text-[#F2DA10] drop-shadow-none">
                  Sign In
                </Button>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/signup">
                <Button variant={"primary"}>Sign Up</Button>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <Button
          onClick={() => setIsOpen(true)}
          variant="primary"
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-4 w-4" />
        </Button>

        <SheetContent side="right" className="w-[80%] sm:w-[350px]" >
          <nav className="flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <SheetTrigger asChild>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="primary"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            </div>
            <ul className="flex flex-col gap-6 font-semibold text-lg">
              {navLinks.map(
                (link) =>
                  link.showOn && (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="capitalize block py-2 hover:text-gray-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
              )}
              {pathName === "/signup" ? (
                <li className="mt-4">
                  <Link href="/signin" className="block">
                    <Button className="bg-black text-[#F2DA10] drop-shadow-none w-full">
                      Sign In
                    </Button>
                  </Link>
                </li>
              ) : (
                <li className="mt-4">
                  <Link href="/signup" className="block">
                    <Button variant={"primary"} className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
