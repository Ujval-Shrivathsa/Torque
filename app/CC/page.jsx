"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";

const page = () => {
    const benefits = [
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
          title: "Protects from Harmful UV Rays",
          description:
            "The sun's ultraviolet rays can cause paint to oxidize and fade over time. Ceramic coatings protect a vehicle's paint from the sun's harsh rays, thereby reducing the risk of oxidization.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_water.svg",
          title: "Hydrophobic Properties",
          description:
            "One of the most noteworthy features of ceramic coatings is their hydrophobic (water-repellent) quality. This means water beads up and rolls off the surface, picking up dirt and grime along the way.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_cloud.svg",
          title: "Chemical Stain Resistance",
          description:
            "Everyday contaminants like acid rain, bird droppings, and tree sap can mar a vehicle's exterior. Ceramic coatings create a chemically resistant surface, ensuring that contaminants are easily washed away without leaving stains.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_hand.svg",
          title: "Enhanced Durability",
          description:
            "Unlike traditional waxes that need frequent reapplication, ceramic coatings are incredibly durable. They don't wear off under normal atmospheric conditions, providing protection that lasts for years.",
        },
        {
          icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/ico_car.svg",
          title: "Aesthetic Appeal",
          description:
            "Ceramic coating enhances the depth and clarity of the car's paint, giving it a constant 'just-washed' glossy finish. This sheen is much coveted by car enthusiasts and detailers for their superior performance compared to conventional coatings.",
        },
        
      ];
    

  return (
    <div>
      <>
      <Navlinks isComplete={true} />
        <div className="bg-black text-white py-10 pt-30 md:pt-30 lg:pt-30 px-6 md:py-15 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase ">
            Ceramic Coating
          </h2>
          <p className=" lg:px-80 lg:-mt-5 text-center text-gray-300">
            Ceramic coating is a liquid polymer applied to cars that bonds with paint, providing glossy, long-lasting protection against dirt and damage.
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
                  Ceramic Coating?
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
              Ceramic coating is a liquid polymer applied to a vehicle's exterior that chemically bonds with the factory paint, forming a protective layer. This invisible shield offers long-lasting protection against UV rays, oxidation, chemical stains, bird droppings, and minor scratches. It's highly hydrophobic, meaning water, dirt, and contaminants bead up and slide off easily, making cleaning much easier.
              </p>
              <p className="text-gray-300 mb-4">
                 Unlike wax, which wears off quickly, ceramic coatings can last for years with proper care. They also enhance the vehicle's gloss and depth, giving the paint a richer, more vibrant look. While not bulletproof, ceramic coatings significantly reduce the risk of surface damage and preserve the car's appearance. It's a popular choice among car owners who want extended protection and low-maintenance shine.
              </p>
              {/* <p className="text-gray-300">
                The technology behind PPF has evolved significantly since its
                initial use by the military to protect helicopter rotor blades,
                resulting in today's highly conformable, optically clear, and
                incredibly durable automotive protection solutions.
              </p> */}
            </div>

            {/* Middle Image Section */}
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/2212785620/photo/restoring-leather-seat-upholstery-car-interior-detailing.jpg?s=612x612&w=0&k=20&c=fD8YTbxnMXgxZNVKTkxhoCf2imOw86iNHsEDWGHFo_U="
                alt="Ceramic Coating"
                className="rounded-lg h-111 object-cover"
              />
              <div className="md:absolute md:bottom-[-20px] md:left-[-40px] absolute bottom-[-20px] left-[80px] border-4 border-white rounded-lg">
                <img
                  src="https://media.istockphoto.com/id/1214222252/photo/ceramic-glass-coating.jpg?s=612x612&w=0&k=20&c=LnUurjg77LvPaG3nYY10e5IR9yEbzq3t9_q-G7qhMIs="
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
                Ceramic coating forms a clear, long-lasting layer that protects your vehicle's paint from UV rays, contaminants, and minor scratches.
                </p>
              </div>
              <div className="">
                <img
                  src="https://media.istockphoto.com/id/1088107162/photo/car-polish-wax-worker-hands-polishing-car-buffing-and-polishing-vehicle-with-ceramic-car.jpg?s=612x612&w=0&k=20&c=6wq9dO4sWDdUHQchHWC965g-PSPNC87rsNDXmKQTd7Q="
                  className="rounded my-4 h-40 w-60 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">
                  Preserves Value and Appearance:{" "}
                </h3>
                <p className="text-gray-300 text-xs">
               Ceramic coating maintains your vehicle's glossy finish, prevents paint damage and fading, helping retain its showroom look and resale value.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16 px-4 md:px-20 0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Benefits Of<span className="text-[#00daff]"> Ceramic Coating</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:mt-20 md:py-6 py-4">
            {benefits.slice(0, 3).map((benefit, index) => (
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
          <div className="grid md:grid-cols-2 gap-8 md:mt-20">
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
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745924820/paint_jidkqf.jpg"
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
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745678458/paintprotection_ju2ue0.jpg"
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