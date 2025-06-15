"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full min-h-full bg-black overflow-hidden scroll-smooth relative">
      <Navlinks isComplete={true} />
      
      <div className="w-full m-auto overflow-x-hidden h-full mt-32">
        <div className="w-full min-h-fit py-8 bg-black">
          
          {/* Hero Section */}
          <div className="relative w-full overflow-x-hidden px-6 md:px-16 lg:px-20 pt-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white anton tracking-wide mb-6">
                Our Work
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mb-12">
                Explore our portfolio of exceptional automotive detailing and protection services. 
                Each project represents our commitment to excellence and attention to detail.
              </p>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="px-6 md:px-16 lg:px-20 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Work Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-64 bg-gray-800 bg-cover bg-center"
                     style={{backgroundImage: "url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1744894420/TQ4_dppgdh.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Paint Protection Film</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Premium PPF installation on luxury vehicle providing ultimate protection.
                  </p>
                  <span className="text-cyan-600 text-sm font-medium">View Details →</span>
                </div>
              </motion.div>

              {/* Work Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-64 bg-gray-800 bg-cover bg-center"
                     style={{backgroundImage: "url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1749822075/C_C_gu0ywy.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Ceramic Coating</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    9H ceramic coating application for long-lasting protection and shine.
                  </p>
                  <span className="text-cyan-600 text-sm font-medium">View Details →</span>
                </div>
              </motion.div>

              {/* Work Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-64 bg-gray-800 bg-cover bg-center"
                     style={{backgroundImage: "url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1749823939/V_W_u9lzhn.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Vinyl Wrap</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Complete vehicle transformation with premium vinyl wrap installation.
                  </p>
                  <span className="text-cyan-600 text-sm font-medium">View Details →</span>
                </div>
              </motion.div>

              {/* Work Item 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-64 bg-gray-800 bg-cover bg-center"
                     style={{backgroundImage: "url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1749822075/IN_D_dlrscu.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Interior Detailing</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Complete interior restoration bringing back that new car feel.
                  </p>
                  <span className="text-cyan-600 text-sm font-medium">View Details →</span>
                </div>
              </motion.div>

              {/* Work Item 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-64 bg-gray-800 bg-cover bg-center"
                     style={{backgroundImage: "url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1749823070/EDD_ufzxn4.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Exterior Detailing</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Show-quality exterior detailing with paint correction and protection.
                  </p>
                  <span className="text-cyan-600 text-sm font-medium">View Details →</span>
                </div>
              </motion.div>

              {/* Work Item 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-64 bg-gray-800 bg-cover bg-center"
                     style={{backgroundImage: "url('https://res.cloudinary.com/dycm7vkuq/image/upload/v1749822075/WT_hj84sr.jpg')"}}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Window Tinting</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Professional window tinting for privacy, comfort, and style.
                  </p>
                  <span className="text-cyan-600 text-sm font-medium">View Details →</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="px-6 md:px-16 lg:px-20 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact us today to discuss your automotive detailing needs and get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <button className="bg-cyan-600 text-white px-8 py-3 rounded-full hover:bg-cyan-700 transition-colors">
                    View All Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-full hover:bg-cyan-600 hover:text-white transition-all">
                    Get Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;