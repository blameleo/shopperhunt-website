import React from "react";
import Slider from "./Slider";
import { Button } from "./ui/Button";

function Benefits() {
  return (
    <div className="px-[1em] lg:px-[10em] pt-28 pb-10">
      <div className="flex pb-10">
        <h1 className="bg-black text-white font-semibold  text-[28px] px-5 py-2 rounded-[12px]">
          The Benefits Ahead
        </h1>
      </div>

      {/** slider one */}
      <main className="flex flex-col lg:flex-row   justify-between">
        <div>
          <Slider />

          <h1 className="mt-10 font-semibold text-[34px]">Vendor Benefits</h1>
          <div className="flex justify-between">
            <p className="text-lg font-medium">
              Display a catalog of products. <br /> Increase online presence.{" "}
            </p>

            <Button variant={'primary'}>Learn More</Button>
          </div>
        </div>
        <div>
          <Slider />

          <h1 className="mt-10 font-semibold text-[34px]">Shopper Benefits</h1>
          <div className="flex justify-between">
            <p className="text-lg font-medium">
              Save time and money by discovering <br /> offers and items at
              nearby stores.{" "}
            </p>

            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Benefits;
