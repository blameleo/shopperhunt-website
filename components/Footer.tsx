import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mx-[10em] px-20 py-10 pb-10 bg-black text-white rounded-t-[24px] space-y-16">
      <div className="flex justify-between items-center">
        <Image
          src="/footerlogo.png"
          alt="shopper hunt logo"
          width={262}
          height={56}
          className="cursor-pointer"
        />

        <ul className="space-x-7">
          <Link href="" className="underline">
            About Us
          </Link>
          <Link href="" className="underline">
            Become a Vendor{" "}
          </Link>
          <Link href="" className="underline">
            Become a Shopper{" "}
          </Link>
          <Link href="" className="underline">
            Blog{" "}
          </Link>
        </ul>

        <div className="flex items-center space-x-4">
          <Image
            src="/socials/linkedin.png"
            alt="linkedin logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src="/socials/facebook.png"
            alt="facebook logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src="/socials/twitter.png"
            alt="twitter logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="space-y-3">
          <div className="flex">
            <h1 className="bg-[#F2DA10] text-black  px-2 rounded-md font-semibold">
              Contact Us:
            </h1>
          </div>

          <p>Email:info@shopperhunt.com</p>
          <p>Phone: 555-567-8901</p>

          <div>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 bg-[#8F8F8F] rounded-[12px] py-5 px-10">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border p-4 rounded-lg placeholder:text-white outline-none"
          />{" "}
          <button className="bg-[#F2DA10] text-black p-4 rounded-lg">
            Subscribe to news
          </button>
        </div>
      </div>

      <hr />

      <div className="space-x-8">
        <span> © 2025 ShopperHunt. All Rights Reserved.</span>
        <span >   <Link href="" className="underline">
            Privacy Policy{" "}
          </Link></span>
      </div>
    </div>
  );
}

export default Footer;
