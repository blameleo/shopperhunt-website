"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="lg:px-[5em] px-[1em] py-12 md:py-20 bg-[#FFF5D3] md:min-h-[70vh] pt-8 md:pt-16 flex flex-col lg:flex-row md:justify-between gap-8 overflow-hidden">
      {/**first container */}
      <div
        className={cn(
          "flex flex-col sm:flex-row lg:flex-col w-[352px] lg:w-[352px] sm:w-full sm:justify-around transition-all duration-1000 ease-out",
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        )}
      >
        <div className="mb-6 lg:mb-16 space-y-4">
          <div className="animate-bounce-in-up delay-200">
            <AnimatedTags>
              <Image
                src="/vendor-tag.png
"
                alt="vendor tag"
                width={15}
                height={15}
                className=""
              />
              Vendor
            </AnimatedTags>
          </div>
          <p
            className={cn(
              "text-base sm:text-lg md:text-[22px] md:leading-[30px] transition-all duration-700 delay-400",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
          >
            We bring shoppers to you while <br className="hidden sm:block" />{" "}
            you focus on your core business.
          </p>
        </div>

        <div>
          <div
            className={cn(
              "relative hidden w-full max-w-[200px] mx-auto sm:flex lg:hidden justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800] transition-all duration-700 delay-600 hover:shadow-[8px_8px_0_0_#422800] hover:-translate-y-1 group",
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            )}
          >
            <FloatingLabels className="-left-20 top-1 animate-float delay-1000">
              <Image
                src="/heroicons-outline_switch-vertical.png"
                alt="sales png"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              <span className="text-xs">increased sales</span>
            </FloatingLabels>
            <FloatingLabels className="bottom-6 -right-20 z-20 animate-float delay-1500">
              <Image
                src="/check.png
"
                alt="card two"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              <span className="text-xs">Manage Inventory</span>
            </FloatingLabels>

            <Image
              src="/groceries.png
"
              alt="vendor tag"
              width={200}
              height={150}
              className="z-10 object-contain relative max-w-[150px] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <div
          className={cn(
            "relative hidden lg:flex max-w-[352px] h-[345px] overflow-y-clip justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800] transition-all duration-700 delay-600 hover:shadow-[12px_12px_0_0_#422800] hover:-translate-y-2 group",
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          )}
        >
          <FloatingLabels className="-left-12 top-5 animate-float delay-1000">
            <Image
              src="/heroicons-outline_switch-vertical.png
"
              alt="sales png"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">increased sales</span>
          </FloatingLabels>
          <FloatingLabels className="bottom-10 -right-12 sm:-right-20 z-20 animate-float delay-1500">
            <Image
              src="/check.png"
              alt="card two"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">Manage Inventory</span>
          </FloatingLabels>

          <Image
            src="/groceries.png"
            alt="vendor tag"
            width={298}
            height={200}
            className="z-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Mobile version of the first yellow box */}
      <div
        className={cn(
          "relative sm:hidden w-full max-w-[200px] mx-auto flex justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800] transition-all duration-700 delay-600 hover:shadow-[8px_8px_0_0_#422800] hover:-translate-y-1 group",
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        )}
      >
        <FloatingLabels className="-left-20 top-3 animate-float delay-1000">
          <Image
            src="/heroicons-outline_switch-vertical.png
"
            alt="sales png"
            width={30}
            height={30}
            className="w-6 h-6"
          />
          <span className="text-xs">increased sales</span>
        </FloatingLabels>
        <FloatingLabels className="bottom-6 -right-20 z-20 animate-float delay-1500">
          <Image
            src="/check.png"
            alt="card two"
            width={30}
            height={30}
            className="w-6 h-6"
          />
          <span className="text-xs">Manage Inventory</span>
        </FloatingLabels>

        <Image
          src="/groceries.png
"
          alt="vendor tag"
          width={200}
          height={150}
          className="z-10 object-contain relative max-w-[150px] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/**middle container */}
      <div
        className={cn(
          "pt-4 lg:pt-20 space-y-4 lg:space-y-7 text-center transition-all duration-1000 delay-300",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-y-0 lg:gap-y-2 font-medium text-4xl lg:text-[65px] leading-tight md:leading-[66px]">
          <h1 className="animate-slide-in-down delay-500">Connecting</h1>
          <h1 className="whitespace-nowrap animate-slide-in-down delay-700">
            Shoppers to Local
          </h1>
          <h1 className="animate-slide-in-down delay-900">Stores</h1>
        </div>
        <p
          className={cn(
            "text-lg sm:text-xl md:text-2xl lg:leading-[30px] lg:text-[24px] transition-all duration-700 delay-1100",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          See IT. Source IT. Secure IT.
        </p>
        <div
          className={cn(
            "flex gap-y-4 justify-center gap-x-2 sm:gap-x-4 items-center transition-all duration-700 delay-1300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="animate-bounce-in delay-1500 hover:scale-105 transition-transform duration-200">
            <Image
              src="/App-Store.png
"
              alt="app store button"
              width={202}
              height={59}
              className="w-36 md:w-40"
            />
          </div>
          <div className="animate-bounce-in delay-1700 hover:scale-105 transition-transform duration-200">
            <Image
              src="/Google-Play.png
"
              alt="google play button"
              width={202}
              height={59}
              className="w-36 md:w-40"
            />
          </div>
        </div>
      </div>

      {/**last container */}
      <div
        className={cn(
          "w-[352px] transition-all duration-1000 ease-out delay-200",
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div
          className={cn(
            "relative hidden lg:flex max-w-[352px] h-[345px] justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800] transition-all duration-700 delay-800 hover:shadow-[12px_12px_0_0_#422800] hover:-translate-y-2 group",
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          )}
        >
          <FloatingLabels className="top-12 -left-12 sm:-left-24 animate-float delay-1200">
            <Image
              src="/cake.png
"
              alt="cake png"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">1.5 Miles Away</span>
          </FloatingLabels>

          <div className="animate-pulse-gentle delay-2000">
            <Image
              src="/card4.png
"
              alt="love"
              width={59}
              height={59}
              className="absolute -top-7 -right-8 hover:scale-110 transition-transform duration-200"
            />
          </div>

          <FloatingLabels className="bottom-10 -right-10 sm:-right-16 z-20 gap-x-1 animate-float delay-1700">
            <Image
              src="/whiskey.png
"
              alt="whiskey png"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">In Stock</span>
          </FloatingLabels>

          <div className="absolute -top-[1px]">
            <Image
              src="/smiling_lady.png
"
              alt="smiling lady"
              width={298}
              height={200}
              className="scale-[1.1] max-w-[352px] transition-transform duration-300 group-hover:scale-[1.15]"
            />
          </div>
        </div>

        <div
          className={cn(
            "mt-16 space-y-4 hidden lg:block transition-all duration-700 delay-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <AnimatedTags>
            <Image
              src="/shopper-tag.png
"
              alt="shopper tag"
              width={15}
              height={15}
              className=""
            />
            Shopper
          </AnimatedTags>

          <p className="text-[22px] leading-[30px]">
            Shopping Made Easy.
            <br className="" /> Discover Shops Next Door.
          </p>
        </div>
      </div>

      {/* Mobile version of the shopper section */}
      <div
        className={cn(
          "mt-8 space-y-10 pb-6 lg:hidden flex flex-col sm:flex-row sm:justify-around transition-all duration-1000 delay-400",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <div
          className={cn(
            "relative w-full max-w-[220px] h-[175px] mx-auto sm:mx-0 flex justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800] transition-all duration-700 delay-800 hover:shadow-[8px_8px_0_0_#422800] hover:-translate-y-1 group",
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          )}
        >
          <FloatingLabels className="top-4 -left-14 animate-float delay-1200">
            <Image
              src="/cake.png
"
              alt="cake png"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <span className="text-xs">1.5 Miles Away</span>
          </FloatingLabels>

          <div className="animate-pulse-gentle delay-2000">
            <Image
              src="/card4.png
"
              alt="love"
              width={40}
              height={40}
              className="absolute -top-5 -right-5 hover:scale-110 transition-transform duration-200"
            />
          </div>

          <FloatingLabels className="bottom-6 -right-8 z-20 gap-x-1 animate-float delay-1700">
            <Image
              src="/whiskey.png
"
              alt="whiskey png"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <span className="text-xs">In Stock</span>
          </FloatingLabels>

          <div className="absolute -top-[1px]">
            <Image
              src="/smiling_lady.png
"
              alt="smiling lady"
              width={200}
              height={150}
              className="scale-[1.1] max-w-[150px] transition-transform duration-300 group-hover:scale-[1.15]"
            />
          </div>
        </div>

        <div
          className={cn(
            "space-y-4 lg:hidden transition-all duration-700 delay-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <AnimatedTags>
            <Image
              src="/shopper-tag.png
"
              alt="shopper tag"
              width={15}
              height={15}
              className=""
            />
            Shopper
          </AnimatedTags>

          <p className="text-lg sm:text-xl">
            Shopping Made Easy.
            <br className="hidden sm:block" /> Discover Shops Next Door.
          </p>
        </div>
      </div>
    </div>
  );
}

export function AnimatedTags({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex gap-x-2 px-2 py-1 rounded items-center bg-black text-[#F2DA10] text-sm sm:text-base hover:bg-gray-800 transition-colors duration-200 hover:scale-105 transform">
        {children}
      </div>
    </div>
  );
}

export function FloatingLabels({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div
        className={cn(
          "bg-white flex items-center gap-x-1 absolute capitalize font-extrabold py-[2px] px-2 rounded-[10px] border border-black hover:shadow-md transition-all duration-200 hover:scale-105",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
