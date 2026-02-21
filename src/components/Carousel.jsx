import { useState, useRef } from "react";
import { slides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useGSAP(() => {
    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 63}vw`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      {/* VIEWPORT */}
      <div className="relative w-full overflow-hidden h-[60vh]">
        <div
          ref={sliderRef}
          className="flex h-full gap-[3vw] will-change-transform"
        >
          {slides.map((slide, index) => (
            <a
              key={slide.id}
              href={slide.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[60vw] h-full flex-shrink-0 relative group cursor-pointer"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-black/80 px-5 flex justify-between items-center">
                <p className="text-white md:text-2xl">
                  {index + 1}. {slide.title}
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}images/arrowupright.svg`}
                  alt="arrow"
                  className="w-7 h-7"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-6 flex justify-end gap-4 md:-translate-x-32 -translate-x-5">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-blue-50 hover:bg-pink-100 transition-all"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-blue-50 hover:bg-pink-100 transition-all"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
