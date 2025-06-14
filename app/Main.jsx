import React from "react";
import Hero from "./components/Hero";
import SlidingPage from "./components/SlidingPage";
import Testimonials from "./components/Details";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import ChatBox from "./Chat_Bot/ChatBox";
import { Toaster } from "react-hot-toast";
import SliderPage from "./components/SliderPage";
import Gallery from "./components/Gallery";
import Instagrampost from "./components/Instagrampost";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">

        <Toaster position="top-right" reverseOrder={false} />
        <Hero />
        <SlidingPage />
        <ProductPage />
        <Testimonials />
        <SliderPage/>
        <Gallery />
        <Instagrampost/>
        <Footer />
    </div>
  );
};

export default Main;
