"use client";
// import { useState } from "react";
// import type React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"



 function Slider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [1, 2, 3] // Placeholder for multiple slides

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  return (
    <div className="bg-[#F2DA10] border-2 border-[#422800] rounded-[16px] sm:rounded-[24px] shadow-[4px_4px_0_0_#422800] sm:shadow-[8px_8px_0_0_#422800]">

    <div className="relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((_, index) => (
          <div key={index} className="min-w-ful h-[250px] sm:h-[400px]  relative flex-shrink-0">
            {/* Carousel content would go here */}

            slide goes here
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-black rounded-full bg-white flex items-center justify-center shadow-md z-10 hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-black rounded-full bg-white flex items-center justify-center shadow-md z-10 hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
    </div>
  )
}


export default Slider