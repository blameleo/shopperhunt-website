"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShopperForm from "@/components/signup/ShopperForm";
import VendorForm from "@/components/signup/VendorForm";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"vendor" | "shopper">("vendor");

  return (
    <div className="">
      <Navbar />
      <section className="min-h-[90vh] mx-[1em] lg:mx-[10em] py-10">
        <div className="flex justify-between">
          <div>
            <SignUpTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "vendor" && (
              <div>
                <VendorForm />
              </div>
            )}
            {activeTab === "shopper" && (
              <div>
                <ShopperForm />
              </div>
            )}
          </div>

          <div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function SignUpTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: "vendor" | "shopper";
  setActiveTab: "vendor" | "shopper";
}) {
  const tabs: {
    key: "vendor" | "shopper";
    label: string;
    icon: string;
    altIcon: string;
  }[] = [
    {
      key: "vendor",
      label: "Vendor",
      icon: "/signup/vendor-black.png",
      altIcon: "/signup/vendor.png",
    },
    {
      key: "shopper",
      label: "Shopper",
      icon: "/signup/shopper-black.png",
      altIcon: "/signup/shopper.png",
    },
  ];

  function handleTabChange(param: "vendor" | "shopper") {
    setActiveTab(param);
  }

  return (
    <div className=" flex ">
      <div className="bg-black flex gap-x-2 rounded-md px-1 py-1 font-semibold">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`flex items-center gap-x-2 text-[#F2DA10] py-1 px-2 cursor-pointer ${
              activeTab === tab.key ? "bg-[#F2DA10] text-black rounded" : ""
            }`}
          >
            <Image
              alt={`${tab.label} icon`}
              src={activeTab === tab.key ? tab.icon : tab.altIcon}
              width={15}
              height={15}
            />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
