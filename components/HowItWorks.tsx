import React from "react";
import { Button } from "./ui/Button";

function HowItWorks() {
  return (
    <div className="px-[1em] lg:px-[10em] py-20">
      <div className="bg-black flex flex-col lg:flex-row justify-between items-center rounded-[12px] text-white lg:py-16 py-5 px-10 space-y-7 lg:space-y-0">
        <div className="text-center lg:*:text-left">
          <h1 className="text-[30px]">How ShopperHunt works</h1>
          <p className="text-[20px]">Find out more here!</p>
        </div>

        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
}

export default HowItWorks;
