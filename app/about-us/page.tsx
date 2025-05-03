import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function Page() {
  return (
    <div>
      <div className="bg-[#FFF5D3]">
        <Navbar />
        <section className="mx-[1em] lg:mx-[10em] py-12 md:py-28 grid grid-cols-1 lg:grid-cols-2  ">
          <Image
            src="/about-us-hero.png"
            alt="about us"
            width={656}
            height={512}
            className=""
          />

          <div className="font-normal text-[22px] space-y-4">
            <h1 className="font-semibold text-[70px]">About Us</h1>

            <p>
              ShopperHunt is a tool used to connect shoppers to local businesses
              through high powered technology and artificial intelligence.
            </p>

            <p>
              ShopperHunt offers services to shoppers and vendors through a
              mobile application which provides real-time updates for shoppers
              on nearby stores, the items sold and the availability of stock and
              for vendors, the ability to increase their customer reach, display
              their catalog of products and offer promotions/ sales.
            </p>

            <p>
              We exist to make your experience better, whether you are an avid
              shopper or a vendor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <Button className="w-full bg-transparent border border-black text-black flex items-center gap-x-2 justify-center">
                <FcGoogle size={20} />
                Sign Up with Google
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground pt-4">
              By creating an account, you agree to our{" "}
              <Link href="#" className="font-bold underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-bold underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      <section className="mx-[1em] lg:mx-[10em] py-12 md:py-28">
        <div className="flex pb-10">
          <h1 className="bg-black text-white font-semibold  text-[28px] px-5 py-2 rounded-[12px]">
            How ShopperHunt Works{" "}
          </h1>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;
