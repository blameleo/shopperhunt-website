import { cn } from "@/app/lib";
import Image from "next/image";
import type React from "react";

export default function Hero() {
  return (
    <div className="lg:px-[5em] px-[1em] py-12 md:py-20 bg-[#FFF5D3]  md:min-h-[70vh] pt-8 md:pt-16 flex flex-col lg:flex-row md:justify-between gap-8 ">
      {/**first container */}
      <div className="flex flex-col sm:flex-row lg:flex-col    w-[352px] lg:w-[352px]  sm:w-full sm:justify-around">
        <div className="mb-6 lg:mb-16 space-y-4 ">
          <Tags>
            <Image
              src="/vendor-tag.png"
              alt="vendor tag"
              width={15}
              height={15}
              className=""
            />
            Vendor
          </Tags>
          <p className="text-base sm:text-lg md:text-[22px] md:leading-[30px]">
            We bring shoppers to you while <br className="hidden sm:block" />{" "}
            you focus on your core business.
          </p>
        </div>

        <div>
          <div className="relative hidden   w-full max-w-[200px]  mx-auto  sm:flex lg:hidden justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800]">
            <Labels className="-left-20 top-1">
              <Image
                src="/heroicons-outline_switch-vertical.png"
                alt="sales png"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              <span className="text-xs">increased sales</span>
            </Labels>
            <Labels className="bottom-6 -right-20 z-20">
              <Image
                src="/check.png"
                alt="card two"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              <span className="text-xs">Manage Inventory</span>
            </Labels>

            <Image
              src="/groceries.png"
              alt="vendor tag"
              width={200}
              height={150}
              className="z-10 object-contain relative max-w-[150px]"
            />
          </div>
        </div>

        <div className="relative hidden lg:flex max-w-[352px] h-[345px] overflow-y-clip justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Labels className="-left-12  top-5">
            <Image
              src="/heroicons-outline_switch-vertical.png"
              alt="sales png"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">increased sales</span>
          </Labels>
          <Labels className="bottom-10 -right-12 sm:-right-20 z-20">
            <Image
              src="/check.png"
              alt="card two"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">Manage Inventory</span>
          </Labels>

          <Image
            src="/groceries.png"
            alt="vendor tag"
            width={298}
            height={200}
            className="z-10 object-contain"
          />
        </div>
      </div>
      {/* Mobile version of the first yellow box */}
      <div className="relative sm:hidden w-full max-w-[200px]  mx-auto  flex justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800]">
        <Labels className="-left-20 top-3">
          <Image
            src="/heroicons-outline_switch-vertical.png"
            alt="sales png"
            width={30}
            height={30}
            className="w-6 h-6"
          />
          <span className="text-xs">increased sales</span>
        </Labels>
        <Labels className="bottom-6 -right-20 z-20">
          <Image
            src="/check.png"
            alt="card two"
            width={30}
            height={30}
            className="w-6 h-6"
          />
          <span className="text-xs">Manage Inventory</span>
        </Labels>

        <Image
          src="/groceries.png"
          alt="vendor tag"
          width={200}
          height={150}
          className="z-10 object-contain relative max-w-[150px]"
        />
      </div>

      {/**middle container */}
      <div className="pt-4  lg:pt-20 space-y-4 lg:space-y-7 text-center ">
        <div className="flex flex-col items-center gap-y-0 lg:gap-y-2 font-medium text-4xl  lg:text-[65px] leading-tight md:leading-[66px]">
          <h1>Connecting</h1>
          <h1 className="whitespace-nowrap">Shoppers to Local</h1>
          <h1>Stores</h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:leading-[30px] lg:text-[24px]">
          See IT. Source IT. Secure IT.
        </p>
        <div className="flex  gap-y-4 justify-center gap-x-2 sm:gap-x-4 items-center">
          <Image
            src="/App-Store.png"
            alt="app store button"
            width={202}
            height={59}
            className="w-36  md:w-40"
          />
          <Image
            src="/Google-Play.png"
            alt="app store button"
            width={202}
            height={59}
            className="w-36 md:w-40"
          />
        </div>
      </div>

      {/**last container */}
      <div className=" w-[352px]">
        <div className="relative hidden lg:flex max-w-[352px] h-[345px]  justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Labels className="top-12 -left-12 sm:-left-24">
            <Image
              src="/cake.png"
              alt="cake png"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">1.5 Miles Away</span>
          </Labels>

          <Image
            src="/card4.png"
            alt="love"
            width={59}
            height={59}
            className="absolute -top-7 -right-8"
          />

          <Labels className="bottom-10 -right-10 sm:-right-16 z-20 gap-x-1">
            <Image
              src="/whiskey.png"
              alt="whiskey png"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
            <span className="text-xs sm:text-sm">In Stock</span>
          </Labels>

          <div className="absolute -top-[1px]">
            <Image
              src="/smiling_lady.png"
              alt="vendor tag"
              width={298}
              height={200}
              className="scale-[1.1] max-w-[352px]"
            />
          </div>
        </div>

        <div className="mt-16 space-y-4 hidden lg:block">
          <Tags>
            <Image
              src="/shopper-tag.png"
              alt="shopper tag"
              width={15}
              height={15}
              className=""
            />
            Shopper
          </Tags>

          <p className="text-[22px] leading-[30px]">
            Shopping Made Easy.
            <br className="" /> Discover Shops Next Door.
          </p>
        </div>
      </div>

      {/* Mobile version of the shopper section */}
      <div className=" mt-8 space-y-10 pb-6 lg:hidden flex flex-col sm:flex-row sm:justify-around ">
        {/* <div className="border"> */}
        <div className="relative  w-full max-w-[220px] h-[175px] mx-auto sm:mx-0  flex justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800]">
          <Labels className="top-4 -left-14">
            <Image
              src="/cake.png"
              alt="cake png"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <span className="text-xs">1.5 Miles Away</span>
          </Labels>

          <Image
            src="/card4.png"
            alt="love"
            width={40}
            height={40}
            className="absolute -top-5 -right-5"
          />

          <Labels className="bottom-6 -right-8 z-20 gap-x-1">
            <Image
              src="/whiskey.png"
              alt="whiskey png"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <span className="text-xs">In Stock</span>
          </Labels>

          <div className="absolute -top-[1px]">
            <Image
              src="/smiling_lady.png"
              alt="vendor tag"
              width={200}
              height={150}
              className="scale-[1.1] max-w-[150px]"
            />
          </div>
        </div>
        {/* </div> */}

        <div className=" space-y-4  lg:hidden ">
          <Tags>
            <Image
              src="/shopper-tag.png"
              alt="shopper tag"
              width={15}
              height={15}
              className=""
            />
            Shopper
          </Tags>

          <p className="text-lg sm:text-xl">
            Shopping Made Easy.
            <br className="hidden sm:block" /> Discover Shops Next Door.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Tags({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex gap-x-2 px-2 py-1 rounded items-center bg-black text-[#F2DA10] text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
}

export function Labels({
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
          "bg-white flex items-center gap-x-1 absolute capitalize font-extrabold py-[2px] px-2 rounded-[10px] border border-black",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
