import React, { useEffect, useRef } from "react";
import slider2 from "../../../public/images/slider2 .jpg"
import slider3 from "../../../public/images/slider3.jpg"
import slider1 from "../../../public/slider_video.mp4"

// Flowbite JS import korbo globally in main file or index.tsx
import "flowbite";

export const Slider: React.FC = () => {
  // Ref lagbe div er jekhane carousel ache jate Flowbite JS ektu better init hoy
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Flowbite JS automatically initialize korbe
    // But jodi kono issue hoy, ekhn custom init o kora jai (optional)
    // Import from 'flowbite' already handled globally, normally no extra code needed here
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
      ref={carouselRef}
    >
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-[16/9]">
  {/* Video Slide */}
  <div className="hidden duration-700 ease-in-out" data-carousel-item>
    <video
      className="absolute top-1/2 left-1/2 w-full h-3/4 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      src={slider1}
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  {/* Image Slide 2 */}
  <div className="hidden duration-700 ease-in-out" data-carousel-item>
    <img
      src={slider2}
      className="absolute top-1/2 left-1/2 w-full h-3/4 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      alt="Slide 2"
    />
  </div>

  {/* Image Slide 3 */}
  <div className="hidden duration-700 ease-in-out" data-carousel-item>
    <img
      src={slider3}
      className="absolute top-1/2 left-1/2 w-full h-3/4 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
      alt="Slide 3"
    />
  </div>
</div>


      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
  <button
    type="button"
    className="w-3 h-3 rounded-full"
    aria-current="true"
    aria-label="Slide 1"
    data-carousel-slide-to="0"
  ></button>
  <button
    type="button"
    className="w-3 h-3 rounded-full"
    aria-current="false"
    aria-label="Slide 2"
    data-carousel-slide-to="1"
  ></button>
  <button
    type="button"
    className="w-3 h-3 rounded-full"
    aria-current="false"
    aria-label="Slide 3"
    data-carousel-slide-to="3"  
  ></button>
</div>


      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          {/* Left Arrow SVG */}
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          {/* Right Arrow SVG */}
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
