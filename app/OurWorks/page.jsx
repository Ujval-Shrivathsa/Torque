"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainCar, setMainCar] = useState({
    id: "main",
    title: "BMW 7 Series",
    url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg",
  });

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const dotRef = useRef(null);
  const cursorTarget = useRef({ x: 0, y: 0 });
  const clickableElements = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Loading animation for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position
  useEffect(() => {
    const moveDot = (e) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;

    const followCursor = () => {
      x += (cursorTarget.current.x - x) * 0.2;
      y += (cursorTarget.current.y - y) * 0.2;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.transform = `translate(-50%, -50%)`;
      requestAnimationFrame(followCursor);
    };

    requestAnimationFrame(followCursor);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;

    const handleMouseEnter = () => {
      dot.style.width = "16px";
      dot.style.height = "16px";
    };

    const handleMouseLeave = () => {
      dot.style.width = "8px";
      dot.style.height = "8px";
    };

    clickableElements.current.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      clickableElements.current.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const carouselImages = [
    mainCar.url,
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894424/TQ1_kgbzwa.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ2_bunhsw.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ3_l4jnla.jpg",
    "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg",
  ];

  const handleNextImage = () => {
    const nextIndex = (carouselIndex + 1) % carouselImages.length;
    setCarouselIndex(nextIndex);
  };

  const [otherCars, setOtherCars] = useState([
    {
      id: "1",
      title: "BMW X5",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ2_bunhsw.jpg",
    },
    {
      id: "2",
      title: "Mini Cooper",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ3_l4jnla.jpg",
    },
    {
      id: "3",
      title: "MG Hector",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896651/u_bnybbp.jpg",
    },
    {
      id: "4",
      title: "Royal Enfield",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894424/TQ1_kgbzwa.jpg",
    },
    {
      id: "5",
      title: "Mercedes Benz",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896503/unnamed_tqnwac.jpg",
    },
    {
      id: "6",
      title: "KTM Duke",
      url: "https://res.cloudinary.com/dycm7vkuq/image/upload/v1744896548/unname_gpl2g2.jpg",
    },
  ]);

  const swapCar = (clickedCar) => {
    setMainCar(clickedCar);
    setCarouselIndex(0);
    setOtherCars((prevCars) =>
      prevCars.map((car) => (car.id === clickedCar.id ? mainCar : car))
    );
  };

  return (
    <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth cursor-none relative">
      {isLoading && (
        <div className="fixed z-[9999] inset-0 bg-black flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-cyan-200 text-8xl font-bold"
          >
            WORK
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="mt-6 h-1 bg-cyan-500 rounded-full"
          />
        </div>
      )}

      {/* Floating cursor dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed z-[9998] w-3 h-3 rounded-full bg-[#496afa] pointer-events-none transition-all duration-300 ease-out"
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          top: "0px",
          left: "0px",
        }}
      />

      {/* Add media query to hide dot on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .cursor-dot {
            display: none;
          }
        }
      `}</style>

      {!isLoading && (
        <>
          <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth cursor-none relative ">
            <Navlinks isComplete={true} />
            <div className="w-full m-auto overflow-x-hidden h-full mt-32">
              <div
                className="w-full min-h-fit py-8 bg-black"
                id="main-carousel-section"
              >
                {/* Top Section: Carousel + 4 Cars */}
                <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[50%] bg-gray-100">
                  {/* Carousel Image */}
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[400px] bg-black/0 bg-no-repeat bg-cover bg-center bg-blend-multiply transition-all duration-700 ease-in-out"
                    style={{
                      backgroundImage: `url(${carouselImages[carouselIndex]})`,
                    }}
                  >
                    <div className="absolute bottom-4 right-4">
                      <motion.button
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={handleNextImage}
                        className="w-10 hover-target gap-2 flex justify-center items-center font-medium h-10 rounded-full border border-transparent bg-black text-white uppercase cursor-pointer"
                      >
                        <motion.img
                          whileHover={{ rotate: 15 }}
                          whileTap={{ rotate: -15 }}
                          transition={{ stiffness: 300 }}
                          src="download-removebg-preview.png"
                          className="h-5"
                          alt=""
                        />
                      </motion.button>
                    </div>

                    {/* Carousel Dots */}
                    <div className="absolute bottom-5 left-[10%] flex space-x-2">
                      {carouselImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === carouselIndex ? "bg-white" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                    {/* </motion.div> */}

                    <div className="absolute bottom-4 right-4">
                      <motion.button
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={handleNextImage}
                        className="w-10 hover-target gap-2 flex justify-center items-center font-medium h-10 rounded-full border border-transparent bg-black text-white uppercase cursor-pointer"
                      >
                        <motion.img
                          whileHover={{ rotate: 15 }}
                          whileTap={{ rotate: -15 }}
                          transition={{ stiffness: 300 }}
                          src="download-removebg-preview.png"
                          className="h-5"
                          alt=""
                        />
                      </motion.button>
                    </div>

                    {/* Carousel Dots */}
                    <div className="absolute bottom-5 left-[10%] flex space-x-2">
                      {carouselImages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === carouselIndex ? "bg-white" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Top 4 Cars */}
                  <div className="w-full lg:w-[55%] flex flex-wrap">
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={otherCars[i].id}
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={() => swapCar(otherCars[i])}
                        className="hover-target w-1/2 h-[150px] sm:h-[200px] bg-black/60 bg-cover bg-center bg-blend-multiply bg-no-repeat transition-all duration-300"
                        style={{ backgroundImage: `url(${otherCars[i].url})` }}
                      >
                        <h1 className="text-white text-base sm:text-lg lg:text-2xl ml-4 pt-4 font-medium">
                          {otherCars[i].title}
                        </h1>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: 2 Cars + Text Block */}
                <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[40%] bg-gray-800">
                  {/* Bottom 2 Cars */}
                  <div className="w-full lg:w-[45%] flex flex-wrap">
                    {otherCars.slice(4).map((car) => (
                      <motion.div
                        key={car.id}
                        ref={(el) => clickableElements.current.push(el)}
                        onClick={() => swapCar(car)}
                        className="hover-target w-1/2 h-[150px] sm:h-[200px] bg-black/60 bg-cover bg-center bg-blend-multiply bg-no-repeat"
                        style={{ backgroundImage: `url(${car.url})` }}
                      >
                        <h1 className="text-white text-base sm:text-lg lg:text-2xl ml-4 pt-4 font-medium">
                          {car.title}
                        </h1>
                      </motion.div>
                    ))}
                  </div>

                  {/* Text Block */}
                  <motion.div
                    initial={{ opacity: 0.5, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[55%] h-auto lg:h-full bg-[#00a2ff] p-6"
                  >
                    <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium uppercase">
                      Welcome!
                    </h1>
                    <p className="text-white text-sm sm:text-base mt-2 max-w-2xl">
                      For more than 35 years, we have been bringing ambitious
                      projects to life. The pride of our work, the rigor in the
                      execution, the spirit of team, and integrity are the
                      values that animate us on a daily basis.
                    </p>
                    <a href="#main-carousel-section">
                      <button className="hover-target mt-4 px-6 py-2 border border-white text-white rounded-full uppercase">
                        Read More
                      </button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
