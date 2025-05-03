/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function Slider() {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      //   perView,
      //   spacing: gap,
    },
    breakpoints: {
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },

      "(min-width: 1580px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });
  return (
    <div
      ref={sliderRef}
      style={{
        width: "845px",
        height: "480px",
      }}
      className="keen-slider  bg-[#F2DA10] border-2 border-[#422800] rounded-[24px] shadow-[8px_8px_0_0_#422800]"
    >
      <div className="keen-slider__slide">1</div>
      <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div>

      <div className="absolute top-[50%] px-8 flex w-full justify-between">
        <Arrow
          left
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />
        <Arrow
          left={false}
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </div>
    </div>
  );
}

export default Slider;

// Arrow Component
function Arrow({
  onClick,
  left,
}: {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  left?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`arrow flex h-8 w-8 items-center cursor-pointer justify-center rounded-full bg-white border-2 border-black shadow-md hover:bg-gray-300  `}
    >
      {left ? <PiCaretLeftBold /> : <PiCaretRightBold />}
    </div>
  );
}
