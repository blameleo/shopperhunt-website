import { cn } from "@/app/lib"
import Image from "next/image"
import type React from "react"

export default function Hero() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[10em] bg-[#FFF5D3] min-h-[75vh] md:h-[70vh] pt-8 md:pt-16 flex flex-col md:flex-row md:justify-between gap-8">
      {/**first container */}
      <div className="flex flex-col ">
        <div className="mb-6 md:mb-16 space-y-4 ">
          <Tags>
            <Image src="/vendor-tag.png" alt="vendor tag" width={15} height={15} className="" />
            Vendor
          </Tags>
          <p className="text-base sm:text-lg md:text-[22px] md:leading-[30px]">
            We bring shoppers to you while <br className="hidden sm:block" /> you focus on your core business.
          </p>
        </div>
        <div className="relative hidden md:flex w-[352px] h-[345px] overflow-y-clip justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Labels className="-left-12 sm:-left-24 top-7">
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
            <Image src="/check.png" alt="card two" width={50} height={50} className="w-8 h-8 sm:w-12 sm:h-12" />
            <span className="text-xs sm:text-sm">Manage Inventory</span>
          </Labels>

          <Image src="/groceries.png" alt="vendor tag" width={298} height={200} className="z-10 object-contain" />
        </div>

        {/* Mobile version of the first yellow box */}
        <div className="relative md:hidden w-full max-w-[300px] h-[250px] mx-auto overflow-y-clip flex justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800]">
          <Labels className="-left-8 top-4">
            <Image
              src="/heroicons-outline_switch-vertical.png"
              alt="sales png"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <span className="text-xs">increased sales</span>
          </Labels>
          <Labels className="bottom-6 -right-8 z-20">
            <Image src="/check.png" alt="card two" width={30} height={30} className="w-6 h-6" />
            <span className="text-xs">Manage Inventory</span>
          </Labels>

          <Image src="/groceries.png" alt="vendor tag" width={200} height={150} className="z-10 object-contain relative " />
        </div>
      </div>

      {/**middle container */}
      <div className="pt-4 md:pt-10 lg:pt-20 space-y-4 md:space-y-7 text-center ">
        <div className="flex flex-col items-center gap-y-0 md:gap-y-2 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight md:leading-[66px]">
          <h1>Connecting</h1>
          <h1 className="whitespace-nowrap">Shoppers to Local</h1>
          <h1>Stores</h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:leading-[30px] lg:text-[24px]">See IT. Source IT. Secure IT.</p>
        <div className="flex justify-center gap-x-2 sm:gap-x-4 items-center">
          <Image src="/App-Store.png" alt="app store button" width={202} height={59} className="w-28 sm:w-32 md:w-40" />
          <Image
            src="/Google-Play.png"
            alt="app store button"
            width={202}
            height={59}
            className="w-28 sm:w-32 md:w-40"
          />
        </div>
      </div>

      {/**last container */}
      <div className="hidden md:block ">
        <div className="relative hidden md:flex w-[352px] h-[345px] overflow-y-clip justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]">
          <Labels className="top-12 -left-12 sm:-left-24">
            <Image src="/cake.png" alt="cake png" width={50} height={50} className="w-8 h-8 sm:w-12 sm:h-12" />
            <span className="text-xs sm:text-sm">1.5 Miles Away</span>
          </Labels>

          <Image src="/card4.png" alt="love" width={59} height={59} className="absolute -top-7 -right-8" />

          <Labels className="bottom-10 -right-10 sm:-right-16 z-20 gap-x-1">
            <Image src="/whiskey.png" alt="whiskey png" width={50} height={50} className="w-8 h-8 sm:w-12 sm:h-12" />
            <span className="text-xs sm:text-sm">In Stock</span>
          </Labels>

          <div className="absolute -top-[1px]">
            <Image
              src="/smiling_lady.png"
              alt="vendor tag"
              width={298}
              height={200}
              className="scale-[1.1] object-contain"
            />
          </div>
        </div>

        <div className="mt-16 space-y-4">
          <Tags>
            <Image src="/shopper-tag.png" alt="shopper tag" width={15} height={15} className="" />
            Shopper
          </Tags>

          <p className="text-[22px] leading-[30px]">
            Shopping Made Easy.
            <br /> Discover Shops Next Door.
          </p>
        </div>
      </div>

      {/* Mobile version of the shopper section */}
      <div className="md:hidden mt-8 space-y-4 pb-6">
        <div className="relative w-full max-w-[300px] h-[250px] mx-auto overflow-y-clip flex justify-center bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[6px_6px_0_0_#422800]">
          <Labels className="top-4 -left-8">
            <Image src="/cake.png" alt="cake png" width={30} height={30} className="w-6 h-6" />
            <span className="text-xs">1.5 Miles Away</span>
          </Labels>

          <Image src="/card4.png" alt="love" width={40} height={40} className="absolute -top-5 -right-5" />

          <Labels className="bottom-6 -right-8 z-20 gap-x-1">
            <Image src="/whiskey.png" alt="whiskey png" width={30} height={30} className="w-6 h-6" />
            <span className="text-xs">In Stock</span>
          </Labels>

          <div className="absolute -top-[1px]">
            <Image
              src="/smiling_lady.png"
              alt="vendor tag"
              width={200}
              height={150}
              className="scale-[1.1] object-contain"
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Tags>
            <Image src="/shopper-tag.png" alt="shopper tag" width={15} height={15} className="" />
            Shopper
          </Tags>

          <p className="text-lg sm:text-xl">
            Shopping Made Easy.
            <br /> Discover Shops Next Door.
          </p>
        </div>
      </div>
    </div>
  )
}

export function Tags({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex gap-x-2 px-2 py-1 rounded items-center bg-black text-[#F2DA10] text-sm sm:text-base">
        {children}
      </div>
    </div>
  )
}

export function Labels({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex">
      <div
        className={cn(
          "bg-white flex items-center gap-x-1 absolute capitalize font-extrabold py-[2px] px-2 rounded-[10px] border border-black",
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
