"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";

const page = () => {
    const benefits = [
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746688289/images-removebg-preview3_kesmfm.png",
          title: "Instant healing properties",
          description:
            "Paint Protection Films (PPFs), especially those marketed as instant healing or self-healing,x have the ability to repair minor scratches and imperfections without external heat application",
        },
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746688802/download_offfrq.png",
          title: "Extreme high gloss finish",
          description:
            "An extreme high gloss car finish refers to a paint job that achieves a mirror-like, exceptionally deep shine, often resembling a polished, wet look",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_water.svg",
          title: "Hydrophobic top coat",
          description:
            "Hydrophobic coatings provide a 'water-repellent' seal on a vehicle. They're great for 'repelling' water and dirt, which can make it easier when it comes to cleaning your car.",
        },
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746689179/download_uyekd7.jpg",
          title: "Advanced chemical resistance",
          description:
            "Advanced chemical resistance in cars is primarily achieved through specialized coatings, particularly graphene and ceramic coatings, which form a protective layer on the paint, enhancing its durability and resistance to various chemical agents.",
        },
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746689326/download_1_h3p5df.png",
          title: "High temperature resistance",
          description:
          "High-temperature resistance in cars is crucial for ensuring the durability and performance of various components, particularly those exposed to engine heat or exhaust fumes.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_car.svg",
          title: "Seamless finishing",
          description:
          "A seamless finishing car refers to the overall refinement and quality of a car's exterior and interior surfaces, including the paint, trim, and materials used in the car's construction.",
        },
      ];
    

  return (
    <div>
      <>
        <Navlinks isComplete={true} />
        <div className="bg-black text-white py-10 pt-30 md:pt-30 lg:pt-30 px-6 md:py-15 flex flex-col items-center text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase ">
            Paint Protection Film (PPF)
          </h2>
          <p className=" lg:px-50 text-center text-gray-300">
            Paint Protection Film (PPF) is a virtually invisible, yet incredibly
            durable layer applied to a vehicle's painted surfaces to shield it
            from the daily wear and tear of the road. This thin film acts as a
            sacrificial barrier, absorbing impacts from stone chips, bug
            splatters, minor scratches, and other environmental hazards, thus
            preserving the original factory paint and maintaining the vehicle's
            pristine appearance and resale value for years to come.
          </p>
        </div>

        <div className="bg-black text-white  py-6 px-6 md:px-70">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Text Section */}
            <div className="md:col-span-1 text-sm md:px-6">
              <h1 className="text-sm font-bold mb-2">About Services</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 p-0">
                What Is
                <br />
                <span className="text-[#00DAFF]">
                  Paint Protection Film (PPF)?
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
                PPF is a conformable and optically clear film available in a variety of thickness (measured in microns)
                and colours. They are multilayered and offer a self healing top coat capable of reforming itself after
                being scuffed or scratched, maintaining clarity and having hydrophobic properties, similar to ceramic
                coating. 
              </p>
              <p  className="text-gray-300 mb-4">
                The root cause of yellowing issue lies in the ultraviolet radiation. For a low quality TPU, the
                manufacturer uses coatings or other technology to lock the ultraviolet rays to delay the yellowing, but
                eventually, after a few years, it will show it will turn yellow. PPF is a product that relies on TPU
                substrates. The use of different substrates determines PPF life and yellowing resistance.
              </p>
              {/* <p className="text-gray-300">
                The technology behind PPF has evolved significantly since its
                initial use by the military to protect helicopter rotor blades,
                resulting in today's highly conformable, optically clear, and
                incredibly durable automotive protection solutions.
              </p> */}
            </div>

            {/* Middle Image Section */}
            <div className="relative">
              <img
                src="https://ocdetailmn.com/wp-content/uploads/2024/02/img-10-min.jpg"
                alt="Ceramic Coating"
                className="rounded-lg h-111 object-cover"
              />
              <div className="md:absolute md:bottom-[-20px] md:left-[-40px] absolute bottom-[-20px] left-[80px] border-4 border-white rounded-lg">
                <img
                  src="https://ocdetailmn.com/wp-content/uploads/2024/02/img-11.jpg"
                  alt="Detailing"
                  className="w-32 md:w-40 rounded-lg"
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="md:col-span-1">
              <div className="mb-8 ">
                <h3 className="text-[18px] font-semibold mb-2">
                  Invisible and Durable Protection:
                </h3>
                <p className="text-gray-300 text-xs mb-2">
                The top layer of the PPF is comprised of an elastomeric polymer substance that helps the material
                maintain a natural shape once its been stretched or applied to something like a painted or clear
                coated surface. This allows the PPF to “selfheal” when light scratches occur, and pretty much
                eliminates any risk of swirl marks. 
                </p>
              </div>
              <div className="">
                <img
                  src="https://ocdetailmn.com/wp-content/uploads/2024/02/men_bmw-min.jpg"
                  className="rounded my-4 h-40 w-60 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">
                  Preserves Value and Appearance:{" "}
                </h3>
                <p className="text-gray-300 text-xs">
                  By safeguarding the paint from damage, PPF helps maintain the
                  vehicle's pristine condition, protecting its resale value and
                  ensuring a consistently flawless aesthetic over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16 px-4 md:px-20 0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Benefits Of<span className="text-[#00daff]"> PPF</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:mt-20 md:py-6 py-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 rounded-md mb-4" />
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:mt-20 ">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 rounded-md mb-4" />
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
      <div className="w-full h-80 bg-[#000000] gap-10 pt-[5%] flex items-center justify-center flex-col md:flex-col lg:flex-row">
        <div className="w-[90%] md:w-[70%] lg:w-[30%] h-64 lg:h-full">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745678458/paintprotection_ju2ue0.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[30%] h-64 lg:h-full">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745823190/paintprotectionmask_i2mufm.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[30%] h-64 lg:h-full">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745924820/paint_jidkqf.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;