import React, { useEffect } from "react";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon";
import ArrowRightIcon from "./Icons/ArrowRightIcon";

interface SlideshowProps {
  imgURLs: string[];
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  autoScroll?: boolean;
}
const Slideshow = ({
  imgURLs = [],
  className = "",
  style = {},
  delay = 3000,
  autoScroll = false,
}: SlideshowProps) => {
  const [currentlSlide, setCurrentSlide] = React.useState(0);

  function handleClickNav(direction?: string, index?: number) {
    if (direction === "prev") {
      setCurrentSlide((prev) => (prev === 0 ? imgURLs.length - 1 : prev - 1));
    } else if (direction === "next") {
      setCurrentSlide((prev) => (prev === imgURLs.length - 1 ? 0 : prev + 1));
    }
    if (index) {
      setCurrentSlide(index);
    }
  }
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === imgURLs.length - 1 ? 0 : prev + 1));
      }, delay);
      return () => clearInterval(interval);
    }
  }, [autoScroll]);

  if (!imgURLs) {
    return null;
  }
  return (
    <div className="relative ">
      <div className="flex">
        <img src={imgURLs[currentlSlide]} alt="" />
      </div>
      <button
        onClick={() => handleClickNav("prev")}
        className={`${currentlSlide === 0 ? "hidden" : ""}  hover:bg-[#FFD200] bg-[#a0a0a2] hover:text-black text-white rounded-full 
        absolute left-10 top-1/2 transform -translate-y-1/2`}
      >
        <ArrowLeftIcon size={40} prefixCls="" />
      </button>
      <button
        onClick={() => handleClickNav("next")}
        className={`${currentlSlide === imgURLs.length - 1 ? "hidden" : ""}  hover:bg-[#FFD200] bg-[#a0a0a2] hover:text-black text-white rounded-full 
        absolute right-10 top-1/2 transform -translate-y-1/2`}
      >
        <ArrowRightIcon size={40} />
      </button>

      <div className="flex absolute bottom-3 w-full justify-center gap-2">
        {imgURLs.map((img, index) => (
          <div
            key={index}
            className={`${currentlSlide === index ? "bg-[#FFD200]" : ""} flex justify-center items-center w-2 h-2 p-2 border rounded-full cursor-pointer`}
            onClick={() => handleClickNav("", index)}
          >
            <span className="bg-white rounded-full p-1"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
