"use client";

import React, { useRef } from "react";
import Navlinks from "../Navlinks/Navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Components/Footer";

const benefits = [
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Reduces Heat and Glare",
    description: "Paint Protection Films (PPFs), especially those marketed as instant healing or self-healing, have the ability to repair minor scratches and imperfections without external heat application",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: " Protects Against UV Rays",
    description: "An extreme high gloss car finish refers to a paint job that achieves a mirror-like, exceptionally deep shine, often resembling a polished, wet look",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: " Enhances Privacy and Security",
    description: "Hydrophobic coatings provide a 'water-repellent' seal on a vehicle. They're great for 'repelling' water and dirt, which can make it easier when it comes to cleaning your car.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "  Prevents Interior Fading",
    description: "Advanced chemical resistance in cars is primarily achieved through specialized coatings, particularly graphene and ceramic coatings, which form a protective layer on the paint, enhancing its durability and resistance to various chemical agents.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: " Improves Comfort",
    description: "High-temperature resistance in cars is crucial for ensuring the durability and performance of various components, particularly those exposed to engine heat or exhaust fumes.",
  },
  {
    icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
    title: "Adds Safety",
    description: "A seamless finishing car refers to the overall refinement and quality of a car's exterior and interior surfaces, including the paint, trim, and materials used in the car's construction.",
  },
];


export default function page() {

    const images = [
    "https://img.freepik.com/premium-photo/car-tinting-worker-applying-tinting-foil-car-window_473712-3600.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/male-specialist-applying-car-tinting-film-installation-process-tinted-auto-glass-installing-procedure_266732-24247.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/installs-tint-film-car-glass_1339-38259.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
  ];

    const scrollRef1 = useRef(null);
    const { scrollYProgress: progress1 } = useScroll({
      target: scrollRef1,
      offset: ["start end", "end start"],
    });
    const xRightToLeft = useTransform(progress1, [0, 1], ["40%", "0%"]);

    
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;
  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <Navlinks isComplete={true} />
      
      {/* Hero Section */}
      <div
        className="w-full h-[100vh] flex items-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,1.1), rgba(0,0,0,0.5)), url('https://img.freepik.com/premium-photo/specialist-with-drier-tinting-film-installation_266732-11734.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-left ml-[6%] mb-10 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cyan-300 tracking-tight">
            Window Tint
          </h1>
          <p className="text-gray-400 mt-4 md:mt-[5%] w-full md:w-[90%] lg:w-[90%] text-sm md:text-base lg:text-[17px] leading-relaxed max-w-xs md:max-w-md lg:max-w-lg">
           It enhances privacy, reduces glare, blocks UV rays, and protects your interior from fading and heat damage. Customizable options offer the perfect blend of style and function.
          </p>
          <button className="w-32 md:w-35 font-semibold rounded-xl mt-6 md:mt-[4%] cursor-pointer text-black h-11 bg-white px-4">
            Book Now
          </button>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full py-8 md:py-12 lg:h-[60vh]">
        <div
          ref={scrollRef1}
          className="w-full lg:-mt-20 bg-black py-6 md:py-12 px-4 sm:px-6 md:px-10 lg:px-4 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-6 items-center justify-center">
            {images.map((img, index) => (
              <motion.div
                key={index}
                style={{ x: isDesktop ? xRightToLeft : 0, transition: "transform 0.6s ease-out" }}
                className="rounded-xl overflow-hidden shadow-lg w-full max-w-sm md:max-w-md lg:max-w-[400px] md:w-1/3"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 md:h-56 lg:h-[250px] object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What Is Section */}
      <div className="w-full px-4 md:px-0 py-8 md:py-0 lg:h-[60vh] lg:flex lg:pl-[6%]">
        <div className="md:pl-[4%] lg:pl-0 lg:flex-1 mb-8 md:mb-16">
          <div className="border-l-4 md:border-l-5 border-cyan-300 pl-4 md:pl-7 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">What Is</h2>
            <div className="text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-2">
              Window Tint?
            </div>
            <div className="space-y-4 mt-4 md:mt-6 text-gray-300 text-sm leading-relaxed max-w-full md:max-w-xl lg:max-w-180">
              <p className="text-justify">
Window tint is a thin, multi-layered film applied to the interior of a vehicle’s windows to reduce glare, block harmful UV rays, and enhance privacy. It comes in various shades and types, including dyed, metalized, carbon, and ceramic films, each offering different levels of heat rejection and visibility. One of its primary benefits is protecting passengers and interiors from UV radiation, which can cause skin damage and fade upholstery over time. 
              </p>
              <p className="text-justify">
Window tint also helps regulate the car’s interior temperature, reducing the need for excessive air conditioning and improving fuel efficiency. Additionally, it adds a sleek, stylish appearance and makes it harder for outsiders to see inside, deterring theft. Some high-quality films even reinforce the glass, preventing shattering during accidents. While laws vary by region regarding tint darkness, professionally installed window tint enhances comfort, safety, and aesthetics, making it a smart investment for vehicle owners looking to protect both themselves and their cars.
              </p>
            </div>
          </div>
        </div>
        
        {/* Side Image */}
        <div className="flex justify-center md:justify-start w-full px-4 md:px-0 lg:flex-shrink-0 lg:max-w-sm lg:w-sm xl:max-w-lg xl:mr-40 2xl:mr-100 2xl:max-w-xl lg:mr-8.5">
          <img 
            src="https://img.freepik.com/premium-photo/specialist-work-with-car-tinting-film-installing_266732-11732.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740"
            className="w-full max-w-sm md:max-w-md lg:w-full h-64 md:h-80 lg:h-[400px] xl:h-[450px] 2xl:h-[500px] object-cover object-center mt-4 md:mt-8 lg:mt-[10%] md:ml-[4%] lg:ml-8 xl:ml-12 2xl:ml-16 rounded-2xl" 
            alt="Car care process" 
          />
        </div>
      </div>

      {/* Two Column Benefits */}
      <div className="w-full px-4 md:px-0 py-8 md:py-0 lg:h-[20vh] md:pl-[4%] lg:pl-[6%]">
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-25 bg-black">
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
              Invisible and Durable Protection:
            </h3>
            <p className="text-gray-400 text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-65">
              Forms a clear, resilient shield that defends your vehicle’s surface against scratches, chips, and weathering.
            </p>
          </div>
          <div className="flex-1 lg:ml-[-50%]">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-cyan-300">
              Preserves Value and Appearance:
            </h3>
            <p className="text-gray-400 text-sm lg:text-sm lg:-mt-2 leading-relaxed lg:w-70">
            Maintains your vehicle’s pristine look, reduces wear, and helps retain higher resale or trade-in value.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full px-4 md:px-0 py-8 md:py-0 lg:h-[40vh] md:pl-[4%] lg:pl-[6%]">
        <div className="mt-8 md:mt-12 lg:mt-20">
          <div className="mb-6 lg:mb-6">
            <h2 className="text-lg md:text-xl font-normal text-gray-400 mb-2">Benefits of</h2>
            <div className="text-3xl md:text-4xl font-bold text-white -mt-1 lg:-mt-3">
              Window Tint
            </div>
          </div>

          {/* Benefits Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4 md:gap-6 lg:gap-25 pt-2 lg:pt-3">
            {benefits.slice(0, 5).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center lg:flex-1 lg:min-w-33 lg:max-w-25">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-26 flex mb-2 lg:mb-2 p-2">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className="w-full h-full object-contain text-blue-400"
                  />
                </div>
                <div className="text-xs md:text-sm lg:text-[16px] font-semibold text-white lg:-mt-2 leading-tight text-center">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>          
        </div>
      </div>
      
      <Footer />
    </div>
  );
}