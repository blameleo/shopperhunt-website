import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="px-[10em] bg-[#FFF5D3] h-[70vh] flex pt-16 gap-x-32   justify-between">
      {/**first container */}
      <div className="">
        <div className="mb-16">
          <Image
            src="/vendor-tag.png"
            alt="vendor tag"
            width={99}
            height={26}
            className="pb-3"
          />
          <p className="text-[24px] leading-[30px]">
            We bring shoppers to you while <br /> you focus on your core
            business.
          </p>
        </div>
        <div className="relative  w-[352px] h-[345px] overflow-y-clip flex justify-center   bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Image
            src="/card.png"
            alt="increased sales"
            width={174}
            height={59}
            className="absolute -left-20 top-5 animate-bounce"
          />
          <Image
            src="/cardTwo.png"
            alt="card two"
            width={174}
            height={59}
            className="absolute -right-20 bottom-10 z-20 "
          />

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
        <h1 className="font-semibold text-[70px] leading-[66px] ">
          Connecting <br /> <span className="">Shoppers to Local</span> <br />{" "}
          Stores
        </h1>
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
          <Image
            src="/card3.png"
            alt="1.5 miles away"
            width={161}
            height={59}
            className="absolute top-10 -left-24 "
          />
          <Image
            src="/card4.png"
            alt="love"
            width={59}
            height={59}
            className="absolute -top-7 -right-8 "
          />
          <Image
            src="/card5.png"
            alt="in stock"
            width={128}
            height={59}
            className="absolute bottom-10 -right-16 animate-bounce"
          />
          <Image
            src="/smiling_lady.png"
            alt="vendor tag"
            width={298}
            height={200}
            className="z-10 scale-110 bottom-0"
          />
        </div>

        <div className="mt-16">
          <Image
            src="/shopper-tag.png"
            alt="shopper tag"
            width={99}
            height={26}
            className="pb-3"
          />
          <p className="text-[24px] leading-[30px]">
            Shopping Made Easy.
            <br /> Discover Shops Next Door.
          </p>
        </div>
      </div>
    </div>
  );
}
