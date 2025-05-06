"use client"
import { useState } from "react"
import type React from "react"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1580px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  })

  return (
    <div className="relative w-full max-w-full">
      <div
        ref={sliderRef}
        className="keen-slider w-full mx-auto aspect-[16/10] sm:aspect-[16/10] md:aspect-[745/480] max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[745px] bg-[#F2DA10] border-2 border-[#422800] rounded-[16px] sm:rounded-[24px] shadow-[4px_4px_0_0_#422800] sm:shadow-[8px_8px_0_0_#422800]"
      >
        <div className="keen-slider__slide flex items-center justify-center text-2xl font-bold">1</div>
        <div className="keen-slider__slide flex items-center justify-center text-2xl font-bold">2</div>
        <div className="keen-slider__slide flex items-center justify-center text-2xl font-bold">3</div>
      </div>

      <div className="absolute top-[50%] transform -translate-y-1/2 px-2 sm:px-4 md:px-8 flex w-full justify-between pointer-events-none">
        <Arrow
          left
          onClick={(e) => {
            e.stopPropagation()
            instanceRef.current?.prev()
          }}
          disabled={currentSlide === 0}
        />
        <Arrow
          left={false}
          onClick={(e) => {
            e.stopPropagation()
            instanceRef.current?.next()
          }}
          disabled={currentSlide === (instanceRef.current?.track.details.slides.length || 0) - 1}
        />
      </div>
    </div>
  )
}

export default Slider

// Arrow Component
function Arrow({
  onClick,
  left,
  disabled,
}: {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
  left?: boolean
  disabled?: boolean
}) {
  return (
    <div
      onClick={onClick}
      className={`arrow flex h-6 w-6 sm:h-8 sm:w-8 items-center cursor-pointer justify-center rounded-full bg-white border-2 border-black shadow-md hover:bg-gray-100 pointer-events-auto ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {left ? (
        <PiCaretLeftBold className="text-sm sm:text-base" />
      ) : (
        <PiCaretRightBold className="text-sm sm:text-base" />
      )}
    </div>
  )
}
