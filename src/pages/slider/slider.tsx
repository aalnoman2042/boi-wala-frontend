import React from "react";
import slider2 from "../../../public/images/slider2 .jpg";
import slider3 from "../../../public/images/slider3.jpg";
import slider1 from "../../../public/slider_video.mp4";

export const Slider: React.FC = () => {
  return (
    <div className="carousel w-full h-[300px] md:h-[650px] overflow-hidden rounded-lg">
      {/* Slide 1: Video */}
      <div id="slide1" className="carousel-item relative w-full object-contain">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={slider1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2: Image */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slider2}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3: Image */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slider3}
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};
