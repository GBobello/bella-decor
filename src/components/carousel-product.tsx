import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface CarouselProductProps {
  slides: Array<string>;
}

export function CarouselProduct({ slides }: CarouselProductProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className={` flex h-full w-full; overflow-hidden relative`}>
      <div
        className="flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img className="w-full object-cover h-full" key={s} src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex px-3 text-xl text-white">
        <button className="bg-black rounded-full" onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button className="bg-black rounded-full" onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {setCurrent(i)}}
              key={"cirecle" + i}
              className={`rounded-full shadow-lg cursor-pointer w-3 h-3 ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
