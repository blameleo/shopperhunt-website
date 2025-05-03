import { cn } from "@/app/lib";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="px-[10em] bg-[#FFF5D3] h-[65vh] flex pt-16 gap-x-   justify-between">
      {/**first container */}
      <div className="">
        <div className="mb-16 space-y-2">
          <Tags>
            {" "}
            <Image
              src="/vendor-tag.png"
              alt="vendor tag"
              width={15}
              height={15}
              className=""
            />{" "}
            Vendor
          </Tags>
          <p className="text-[24px] leading-[30px]">
            We bring shoppers to you while <br /> you focus on your core
            business.
          </p>
        </div>
        <div className="relative  w-[352px] h-[345px] overflow-y-clip flex justify-center   bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Labels className="-left-24 top-7">
            {" "}
            <Image
              src="/heroicons-outline_switch-vertical.png"
              alt="sales png"
              width={50}
              height={50}
              className=""
            />{" "}
            increased sales
          </Labels>
          <Labels className="bottom-10 -right-20 z-20">
            {" "}
            <Image
              src="/check.png"
              alt="card two"
              width={50}
              height={50}
              className=" "
            />
            Manage Inventory
          </Labels>

          <Image
            src="/groceries.png"
            alt="vendor tag"
            width={298}
            height={200}
            className="z-10 "
          />
        </div>
      </div>

      {/**middle container */}
      <div className="pt-20 space-y-7 text-center ">
        <div className="flex flex-col  gap-y-2 font-bold text-[65px] leading-[66px]">
          <h1>Connecting</h1>
          <h1>Shoppers to Local</h1>
          <h1>Stores</h1>
        </div>
        <p className="leading-[30px] text-[24px]">
          See IT. Source IT. Secure IT.
        </p>
        <div className="flex justify-center gap-4 items-center">
          <Image
            src="/App-Store.png"
            alt="app store button"
            width={202}
            height={59}
          />
          <Image
            src="/Google-Play.png"
            alt="app store button"
            width={202}
            height={59}
          />
        </div>
      </div>

      {/**last container */}
      <div className="">
        <div className="relative  w-[352px] h-[345px]  flex justify-center   bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Labels className="top-12 -left-24">
            {" "}
            <Image
              src="/cake.png"
              alt="cake png"
              width={50}
              height={50}
              className=""
            />{" "}
            1.5 Miles Away
          </Labels>

          <Image
            src="/card4.png"
            alt="love"
            width={59}
            height={59}
            className="absolute -top-7 -right-8 "
          />

          <Labels className="bottom-10 -right-16 z-20 gap-x-1">
            {" "}
            <Image
              src="/whiskey.png"
              alt="whiskey png"
              width={50}
              height={50}
              className=""
            />{" "}
            In Stock
          </Labels>

          <div className="absolute -top-[1px] ">
            <Image
              src="/smiling_lady.png"
              alt="vendor tag"
              width={298}
              height={200}
              className="scale-[1.1]"
            />
          </div>
        </div>

        <div className="mt-16 space-y-2">
          <Tags>
            {" "}
            <Image
              src="/shopper-tag.png"
              alt="shopper tag"
              width={15}
              height={15}
              className=""
            />{" "}
            Shopper
          </Tags>

          <p className="text-[24px] leading-[30px]">
            Shopping Made Easy.
            <br /> Discover Shops Next Door.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Tags({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex">
      <div className=" flex gap-x-2 px-2 py-1 rounded  items-center bg-black text-[#F2DA10]">
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
          "bg-white flex items-center absolute capitalize font-extrabold py-[2px] px-2 rounded-[10px] border border-black",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
