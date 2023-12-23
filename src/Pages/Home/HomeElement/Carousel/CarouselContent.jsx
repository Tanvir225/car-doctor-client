import React from "react";

const CarouselContent = ({ image, prev, next }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] w-full h-full absolute top-0 left-0 "></div>
      <img src={image} className="w-full object-cover h-full" />
      <div className="absolute flex items-center h-full text-white">
        <div className="px-10 pb-10 md:pl-16 space-y-5">
          <h2 className="text-5xl font-bold md:w-[60%]">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-lg md:w-[70%]">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#FF3811] px-5 text-white">
              Discover more
            </button>
            <button className="btn  btn-outline px-5 text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 bottom-5 right-10 gap-7  ">
        <a href={prev} className="btn btn-circle bg-[#FF3811] text-white">
          ❮
        </a>
        <a href={next} className="btn btn-circle bg-[#FF3811] text-white">
          ❯
        </a>
      </div>
    </>
  );
};

export default CarouselContent;
