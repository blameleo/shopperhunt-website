"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";

interface FaqCardProps {
  number: string;
  title: string;
  description: string;
}

export default function Faq() {
  return (
    <div className="px-[1em] lg:px-[10em] py-28">
      <div className="flex pb-10">
        <h1 className="bg-black text-white font-semibold text-[28px] px-5 py-2 rounded-[12px]">
          Some Frequently Asked Questions
        </h1>
      </div>

      <div className="space-y-10">
        {faqData.map((faq) => (
          <FaqCard key={faq.number} {...faq} />
        ))}
      </div>
    </div>
  );
}

const faqData: FaqCardProps[] = [
  {
    number: "01",
    title: "What is ShopperHunt?",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "How do I sign up as a vendor/business owner?",
    description:
      "Signing up is simple. Go to our website, click 'Sign Up', and follow the steps.",
  },
  {
    number: "03",
    title: "How do I place an order on the app?",
    description: "Simply browse products, add them to your cart, and checkout.",
  },
  {
    number: "04",
    title: "Is the app available on both iOS and Android?",
    description: "Yes, the app is available on both platforms.",
  },
  {
    number: "05",
    title: "How many users can I add to my vendor/business profile?",
    description: "You can add multiple users based on your subscription plan.",
  },
];

const FaqCard: React.FC<FaqCardProps> = ({ number, title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-[#422800] rounded-[24px] py-8 px-16 shadow-[0px_4px_0_0_#422800] transition-colors duration-500 ${
        open ? "bg-[#F2DA10]" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <h1 className="text-[60px] font-semibold">{number}</h1>
          <p className="font-semibold text-[30px]">{title}</p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="bg-white h-10 w-10 rounded-full border border-black flex justify-center items-center transition-transform duration-300"
        >
          {open ? (
            <span className="w-5 h-1 bg-black"></span>
          ) : (
            <TiPlus size={20} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all space-y-7 duration-500 ${
          open ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
        }`}
      >
        <hr className="border border-black transition-opacity duration-500" />
        <p className="font-medium text-lg">{description}</p>
      </div>
    </div>
  );
};
