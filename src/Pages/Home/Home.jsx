import React, { useEffect, useState } from "react";
import Carousel from "./HomeElement/Carousel/Carousel";
import AboutUs from "./HomeElement/AboutUs/AboutUs";
import Address from "../../Components/Address/Address";
import Card from "../../Components/Card/Card";
import Testimonial from "./HomeElement/Testimonial/Testimonial";

const Home = () => {
  //state for services
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="space-y-10">
      <div className="">
        <Carousel></Carousel>
      </div>

      <div>
        <AboutUs></AboutUs>
      </div>

      <div>
        <div className="text-center">
          <p className="font-bold text-lg text-[#FF3811] ">Service</p>
          <h1 className="text-4xl font-bold leading-tight">Our Service Area</h1>
          <p className="py-2 w-1/2 mx-auto text-gray-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service._id} property={service}></Card>
          ))}
        </div>
      </div>

      <div className="">
        <Address></Address>
      </div>

      <div className="space-y-2">
        <p className="font-bold text-lg text-center text-[#FF3811] ">
          Testimonial
        </p>
        <h1 className="text-4xl font-bold text-center leading-tight">
          What Customer Says
        </h1>
        <p className="py-2 lg:w-1/2 mx-auto text-center text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
