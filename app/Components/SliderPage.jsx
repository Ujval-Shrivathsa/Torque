"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "./ImageSlider";

const SliderPage = () => {
    const features = [
        { img: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1749655226/uv_zzyt83.png", text: "UV & SUNSHINE" },
        { img: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1749655229/water-drops_zcbuwq.png", text: "WEATHER EROSION" },
        { img: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1749655225/acid-rain_zps4gg.png", text: "ACID RAIN" },
        { img: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1749655226/scratches_tp6rfq.png", text: "GRAFFITI & SCRATCHES" },
        { img: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1749655227/bird_wf807b.png", text: "BIRD DROPPING" },
        { img: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1749655226/natural-gum_ifk1zb.png", text: "TREE GUM" },
    ];

    return (
        <div className="min-h-fit w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-white bebas text-4xl sm:text-5xl lg:text-4xl text-center leading-tight sm:leading-[66px] mb-8 font-bold sm:mb-12">
                    Slide & See What <span className="text-[#00d9ff]">We Can Do</span>
                </h1>

                {/* Image Slider Container */}
                <motion.div
                    initial={{ borderRadius: "20px" }}
                    whileInView={{ borderRadius: "30px" }}
                      viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "circInOut" }}
                    className="w-full flex justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="w-full max-w-[93%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[950px] rounded-2xl overflow-hidden"
                    >
                        <ImageSlider
                            beforeImage="https://res.cloudinary.com/dycm7vkuq/image/upload/v1748435180/cosy_gdc42f.png"
                            afterImage="https://res.cloudinary.com/dycm7vkuq/image/upload/v1748435180/cosy-01_jgnpvw.png"
                        />
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div className="mt-12 sm:mt-16">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
                        {features.map((item, index) => (
                            <motion.div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.img}
                                        alt={item.text}
                                        loading="lazy"
                                    />
                                </div>
                                <p className="font-semibold mt-3 text-center text-white text-sm sm:text-base">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SliderPage;
