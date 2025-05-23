"use client"
import type React from "react"
import { useState } from "react"
import { TiPlus } from "react-icons/ti"

interface FaqCardProps {
  number: string
  title: string
  description: string
}

export default function Faq() {
  return (
    <div className="lg:mx-[3em] px-[1em] py-12 md:py-20">
      <div className="flex pb-6 md:pb-10">
        <h1 className="bg-black text-white font-semibold text-xl sm:text-2xl md:text-[28px] px-3 sm:px-7 py-4 rounded-[12px]">
          Some Frequently Asked Questions
        </h1>
      </div>

      <div className="space-y-6 md:space-y-8 lg:space-y-10">
        {faqData.map((faq) => (
          <FaqCard key={faq.number} {...faq} />
        ))}
      </div>
    </div>
  )
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
    description: "Signing up is simple. Go to our website, click 'Sign Up', and follow the steps.",
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
]

const FaqCard: React.FC<FaqCardProps> = ({ number, title, description }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border border-[#422800] rounded-[24px] py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16 shadow-[0px_4px_0_0_#422800] transition-colors duration-500 ${
        open ? "bg-[#F2DA10]" : "bg-[#F3F3F3]"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:space-x-3 sm:items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-semibold">{number}</h1>
          <p className="font-semibold text-xl sm:text-2xl md:text-[30px]">{title}</p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="bg-transparent h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-black flex justify-center items-center transition-transform duration-300 flex-shrink-0 self-end sm:self-auto"
        >
          {open ? <span className="w-4 sm:w-5 h-1 bg-black"></span> : <TiPlus size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all space-y-4 sm:space-y-5 md:space-y-7 duration-500 ${
          open ? "max-h-96 opacity-100 mt-4 sm:mt-5 md:mt-7" : "max-h-0 opacity-0"
        }`}
      >
        <hr className="border border-black transition-opacity duration-500" />
        <p className="font-medium text-base sm:text-lg">{description}</p>
      </div>
    </div>
  )
}
