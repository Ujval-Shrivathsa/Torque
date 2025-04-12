"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const page = () => {
  const images = [
    "34c0453a-ffbf-463d-aa1c-fc41df58b145_600x600.jpg",
    "34c0453a-ffbf-463d-aa1c-fc41df58b145_600x600.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const handleCheckout = () => {
    const message = `*Product:* RAT REPELLENT SPRAY\n*Price:* ₹499.00`;
    const finalMessage = encodeURIComponent(message);
    const whatsappNumber = "9686968315";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;
    window.open(whatsappURL, "_blank");
  };
  

  return (
    <div>
      {/* Fixed Navlinks at the Top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <motion.div className="w-full px-4 md:px-10">
          <Navlinks isComplete={true} />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col p-6 md:py-52 md:px-5 text-white bg-black min-h-screen pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Thumbnail Images */}
          <motion.div className="flex flex-row md:flex-col items-center gap-8 ml-5">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer border border-zinc-400 hover:border-[#00DAFF] transition"
                whileHover={{ scale: 1.1 }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </motion.div>

          {/* Main Product Image */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/3"
            key={mainImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={mainImage}
              alt="Main Product"
              className="md:w-[30rem] md:h-[30rem] w-72 h-72 object-cover border border-zinc-400"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="flex-1 w-full md:w-1/2 space-y-4 md:ml-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
              RAT REPELLENT SPRAY
            </h1>

            <p className="text-lg md:text-4xl font-semibold mt-7 mb-10">
              MRP - <span className=" text-[#00DAFF]"> ₹499.00</span>
            </p>

            {/* Features */}
            <div className="space-y-5">
              {[
                "EFFECTIVE DETERRENT - Repels rats and rodents, preventing them from nesting in the car.",
                "AUTOMOTIVE USE - Specially designed for use in and around your vehicle, including the engine bay.",
                "EASY APPLICATION - Convenient spray-on formula makes it simple to apply.",
                "LONG-LASTING PROTECTION - Provides enduring defense, keeping the car safe from rodents.",
              ].map((feature, index) => (
                <motion.p
                  key={index}
                  className="text-sm md:text-[16px] flex items-start gap-2 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="text-[10px] font-bold text-white">⚪</span>{feature}
                </motion.p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-6 px-5 py-3 text-xs sm:text-sm bg-[#00DAFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#00c8e0] transition w-full sm:w-auto"
                onClick={handleCheckout}
              >
                BUY Now
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-6 px-5 py-3 text-xl sm:text-sm bg-[#00DAFF] text-white font-semibold rounded-lg shadow-lg hover:bg-[#00c8e0] transition w-full sm:w-auto"
                onClick={handleCheckout}
              >
                Add To Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="w-full"><Footer /></div>
    </div>
  );
};

export default page;