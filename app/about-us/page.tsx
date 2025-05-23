"use client";

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

        {/* Hero Section */}
        <section className="lg:mx-[3em] px-[1em] py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Image
            src="/about-us-hero.png"
            alt="about us"
            width={656}
            height={512}
            className="w-full max-w-[656px] h-auto mx-auto "
          />

          <div className="space-y-6 text-base md:text-lg">
            <h1 className="font-semibold text-4xl md:text-6xl">About Us</h1>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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

      {/* How it works */}
      <section className="lg:mx-[3em] px-[1em] py-12 md:py-20">
        <div className="pb-10">
          <h1 className="bg-black text-white font-semibold text-2xl md:text-3xl px-5 py-2 rounded-[12px] inline-block">
            How ShopperHunt Works
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <ImageCard title="Step 1" description="Lorem ipsum dilor" />
          <ImageCard title="Step 2" description="Lorem ipsum dilor" />
          <ImageCard title="Step 3" description="Lorem ipsum dilor" />
        </div>
      </section>

      {/* Divider */}
      <section className=" lg:mx-[3em]">
        <div className="w-full h-[3px] bg-black"></div>
      </section>

      {/* Shopper Info */}
      <section className="lg:mx-[3em] px-[1em] py-12 md:py-20 space-y-20">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl">
              Extra Shopper Info
            </h1>
            <p className="text-base md:text-lg max-w-xl">
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam a ultrices quam. Fusce rutrum mauris quis urna semper
              lacinia.
            </p>
          </div>
          <div className="w-full max-w-[464px] h-[300px] md:h-[464px] rounded-lg bg-gray-200 flex items-center justify-center">
            image goes here
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 ">
          <div className="w-full max-w-[464px] h-[300px] md:h-[464px] rounded-lg bg-gray-200 flex items-center justify-center">
            image goes here
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-3xl md:text-4xl">
              Extra Shopper Info
            </h1>
            <p className="text-base md:text-lg max-w-xl">
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam a ultrices quam. Fusce rutrum mauris quis urna semper
              lacinia.
            </p>
          </div>
        </div>
      </section>

      {/* Download Banner */}
      <section className="lg:mx-[3em] px-[1em] py-12 md:py-20">
        <div className="bg-[#F2DA10] p-8 lg:p-16 rounded-[18px] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-extrabold text-3xl md:text-3xl lg:text-5xl tracking-wider text-center md:text-left">
            Download Now!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              src={"/About-us-App-Store.png"}
              alt="app store logo"
              width={158}
              height={36}
            />
            <Image
              src={"/About-Us-Google-Play.png"}
              alt="app store logo"
              width={158}
              height={36}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;

export function ImageCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4 text-center md:text-left w-full ">
      <div className="w-full h-[300px] md:h-[319px] rounded-lg bg-gray-200 flex items-center justify-center">
        image goes here
      </div>
      <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
      <p className="text-base">{description}</p>
    </div>
  );
}
