"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";

const page = () => {
    const benefits = [
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746690280/download_2_dh2vbi.png",
          title: "Easy Maintenance",
          description:
            "Vinyl wraps are generally easy to clean and maintain, requiring minimal effort to keep them looking their best.",
        },
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746690484/download_3_catbpo.png",
          title: "Durability",
          description:
            "Vinyl wraps are designed to withstand the elements, including harsh sunlight, road debris, and even minor scratches, making them a durable alternative to paint. ",
        },
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746690680/download_1_hjpmaa.jpg",
          title: "Customization",
          description:
            "Vinyl frog states vinyl wraps come in a wide variety of colors, finishes, and textures, allowing for extensive customization options, including full wraps, partial wraps, and graphics.",
        },
        {
          icon: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1746691075/download_4_q11kpb.png",
          title: "Removable",
          description:
            "Vinyl wraps can be easily removed or replaced without damaging the original paint, offering flexibility for changing the car's look or addressing any issues with the wrap itself.",
        },
      ];
    

  return (
    <div>
        
      <>
      <Navlinks isComplete={true} />
        <div className="bg-black text-white py-10 pt-30 md:pt-30 lg:pt-30 px-6 md:py-15 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase ">
            Vinyl Wrap
          </h2>
          <p className=" lg:px-50 text-center text-gray-300">
          A vinyl wrap is a flexible, adhesive-backed material, typically made of PVC, that's applied to surfaces to change their appearance or protect them.
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
                 Vinyl?
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
                Vinyl is made from Poly Vinyl Chloride (PVC) material, which is a 
                synthetic man-made substance. It is a type of plastic that is 
                made from Chlorine and Ethylene. When processed, the 
                substances combine to form PVC resin or vinyl.
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
                src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745928442/download_5_z0jijk.jpg"
                alt="Ceramic Coating"
                className="rounded-lg h-111 object-cover"
              />
              <div className="md:absolute md:bottom-[-20px] md:left-[-40px] absolute bottom-[-20px] left-[80px] border-4 border-white rounded-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXj2p2AkTlPBmwhV0B1kHkLlCgLcC4audkOw&s"
                  alt="Detailing"
                  className="w-32 md:w-40 lg:h-35 object-cover rounded-lg"
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
                Vehicle vinyl wrap and color change wrap grew in popularity out of the wrap advertising business. The first attempts at using the plastic in commercial applications failed as a result of being too fragile. In 1926, Waldo Semon invented the vinyl still used today by introducing additives to PVC that made it flexible and easier to process
                </p>
              </div>
              <div className="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGQchH1Se1ukCnZSLcb95d9AyIR7s1aglRA&s"
                  className="rounded my-4 w-60 h-40 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">
                  Preserves Value and Appearance:{" "}
                </h3>
                <p className="text-gray-300 text-xs">
                Advancements in plastics have led to new types of vinyl designed specifically for wrap advertising, including vinyl sheets that feature bubble-preventing air channels. Microscopic glass beads are used to prevent an adhesive from functioning until the user is ready (the beads allow the material to be repeatedly lifted and reapplied during the wrapping process, without compromising the longevity of the wrap). The vinyl is heated with a heat gun or torch for the purpose of molding the material around objects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16 px-4 md:px-20 0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Benefits Of<span className="text-[#00daff]"> Vinyl Wraps</span>
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
          <div className="grid md:grid-cols-1 gap-8 mt-8 w-2/4 mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 mb-4" />
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