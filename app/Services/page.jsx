"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useForm } from "react-hook-form";

const ServiceCard = ({ title, description, image, linkUrl }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="flex flex-col overflow-x-hidden sm:flex-row w-full bg-black"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 sm:w-70 sm:h-100 object-cover"
      />
      <div className="space-y-4 px-4 pt-4 sm:px-0 sm:pt-0">
        <h2 className="text-2xl sm:text-4xl text-white ml-0 sm:ml-8 tracking-wide font-bold">
          {title}
        </h2>
        <p className="text-zinc-400 ml-0 sm:ml-8 mt-2 sm:mt-6 poppins text-base sm:text-md max-w-full sm:max-w-[420px]">
          {description}
        </p>
        <Link href={linkUrl}>
          <p className="text-white anton font-medium text-sm sm:text-lg mt-4 sm:mt-30 ml-0 sm:ml-8 cursor-pointer">
            <button className="w-40 h-12 cursor-pointer bg-cyan-600 text-sm rounded-full">
                VIEW DETAILS
            </button>
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

const ComplexServices = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted successfully!");
    console.log("Form data:", data);
    reset();
  };

  const services = [
    {
      title: "PAINT PROTECTION FILM",
      description:
        "A paint protection film, also known as a clear bra, is a transparent layer that is applied to the exterior of a vehicle to safeguard the paint from scratches, chips, and other damage.",
      image:
        "https://media.istockphoto.com/id/1494849821/nl/foto/wrapping-car-paint-protection-films.jpg?s=612x612&w=0&k=20&c=5YRNvejX8l-fXf4ZaTzAvJC8Q4NQcpxMjZrNJ3UJI7s=",
      linkUrl: "/PPF"
    },
    {
      title: "GRAPHENE COATING",
      description:
        "Graphene coating is a cutting-edge protective layer that enhances the durability and shine of your vehicle's paint. It provides superior resistance to scratches, UV rays, and environmental contaminants.",
      image:
        "https://media.istockphoto.com/id/2199760696/photo/ceramic-or-graphene-coating-applied-on-black-paint.jpg?s=612x612&w=0&k=20&c=VojxYpwi-hSXdjlfIeKd5z9iTgK048-KYkVawcvKGnI=",
      linkUrl: "/GC"
    },
    {
      title: "CERAMIC COATING",
      description:
        "Ceramic coating is a liquid polymer applied to the exterior of a vehicle, creating a protective layer that enhances shine and provides resistance against scratches, UV rays, and chemical stains.",
      image:
        "https://media.istockphoto.com/id/1178049623/photo/applying-a-nano-ceramic-coating-for-interior-leather-on-the-cars-seat-brown-upholstery-by-a.jpg?s=612x612&w=0&k=20&c=YaESNLfFfdIZmO7-qdLygiWqioy2kDGOR9C6OBv1Vvg=",
      linkUrl: "/CC"
    },
    {
      title: "INTERIOR DETAILING",
      description:
        "Deep cleaning and protection of all interior surfaces including seats, carpets, and dashboard. Keeps your ride looking brand new inside.",
      image:
        "https://res.cloudinary.com/dycm7vkuq/image/upload/v1745678458/paintprotection_ju2ue0.jpg",
      linkUrl: "/ID"
    },
    {
      title: "EXTERIOR DETAILING",
      description:
        "Thorough cleaning, restoration, and finishing of a vehicle's exterior to produce a show-quality level of detail.",
      image:
        "https://res.cloudinary.com/dycm7vkuq/image/upload/v1745823189/exteriordetailing_q2tm0h.jpg",
      linkUrl: "/ED"
    },
    {
      title: "AUTO DETAILING",
      description:
        "Give your vehicle a complete makeover, inside and out. Experience a sparkling exterior and a refreshed interior with our meticulous cleaning and restoration service.",
      image:
        "https://res.cloudinary.com/dycm7vkuq/image/upload/v1745823190/paintprotectionmask_i2mufm.jpg",
      linkUrl: "/AD"
    },
    {
      title: "VINYL WRAP",
      description:
        "Transform your vehicle with high-quality vinyl wraps. Choose from a variety of colors and custom designs for endless personalization.",
      image:
        "https://media.istockphoto.com/id/1130126161/nl/foto/auto-folie.jpg?s=612x612&w=0&k=20&c=n1jCKgSXN8wQ3DiQP_Oe9rh9owGbqeY50nNAfsIeOE8=",
      linkUrl: "/VX"
    },
    {
      title: "WINDOW TINT",
      description:
        " It enhances privacy, reduces glare, blocks UV rays, and protects your interior from fading and heat damage. Customizable options offer the perfect blend of style and function.",
      image:
        "https://res.cloudinary.com/dycm7vkuq/image/upload/v1745925408/HK109691_1_pn8kkh.jpg",
      linkUrl: "/WT"
    },
    {
      title: "WINDSHIELD COATING",
      description:
        "Enhance visibility and safety with an advanced hydrophobic coating that keeps your windshield clean, providing clearer vision during heavy rains and reducing hard water spots.",
      image:
        "https://media.istockphoto.com/id/1178049879/photo/the-process-of-applying-a-nano-ceramic-coating-for-hydrophobic-effect-on-the-cars-windows-by.webp?a=1&b=1&s=612x612&w=0&k=20&c=wVAUHKcA1B7rvoyd6JmwJQmU95di4yJ0Q8bz2Cy-eE0=",
      linkUrl: "/WC"
    },
    {
      title: "HEADLIGHT RESTORATION",
      description:
        "Improve night driving safety by restoring cloudy or yellowed headlights to their original clarity for brighter, clearer visibility.",
      image:
        "https://media.istockphoto.com/id/1148715302/photo/auto-mechanic-buffing-and-polishing-car-headlight.jpg?s=612x612&w=0&k=20&c=hakbiIJ2bL48D9FAU2B-n7l8a2wG28DfzSLO34wCsJI=",
      linkUrl: "/HR"
    },
    {
      title: "INTERIOR DISINFECTION",
      description:
        "Eliminate odours and harmful bacteria with our thorough interior disinfection service.",
      image:
        "https://media.istockphoto.com/id/1215774974/photo/car-disinfection.jpg?s=612x612&w=0&k=20&c=RkbZ2xm5PdcM4-eyCaSlGYIemSFryfARU1hOWWBmdMY=",
      linkUrl: "/IDI"
    },
    {
      title: "TRIM RESTORATION",
      description:
        "Revive dull and faded plastic trim, giving it a like-new appearance with a protective coating for a longer lasting shine!",
      image:
        "https://media.istockphoto.com/id/2171665645/photo/the-master-polishes-a-part-of-the-steering-wheel-of-the-car-before-painting-and-tightening.jpg?s=612x612&w=0&k=20&c=Fzz4uQqqqZj5oBqFqWDEJ-5OXodCVXZwqxweaZ4WCIU=",
      linkUrl: "/TR"
    },
    {
      title: "A/C STERILIZATION",
      description:
        "With a deep clean and sanitization of your A/C ducts and filters. You can be rest assured, with clean and fresh air inside your car",
      image:
        "https://media.istockphoto.com/id/1221055392/photo/professional-worker-using-disinfectant-and-wet-wipe-to-clean-car-interior.jpg?s=612x612&w=0&k=20&c=gsEm3Lv9aoi4ZXEdxH5bx9TOi0xLC7XdpbcN03t1_YE=",
      linkUrl: "/ACS"
    },
    {
      title: "MINOR ELECTRICAL & MECHANICAL WORK",
      description:
        "From windshield wiper changes to fitting dashcams, we handle small but essential repairs. ",
      image:
        "https://media.istockphoto.com/id/1428271853/photo/mechanic-inspecting-engine-at-garage-workshop.jpg?s=612x612&w=0&k=20&c=dAkLigq3R9iJboJk5477d1gprZbv2IENLbjm5IYg_xI=",
      linkUrl: "/MEM"
    },
  ];

  return (
    <>
      <div className="w-full bg-black overflow-x-hidden lg:overflow-visible">
        <Navlinks isComplete={true} />

        <div className="relative w-full overflow-x- px-6 md:px-16 lg:px-20 pt-28">
          <img
            src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1745823189/servicesherobg_szthae.jpg"
            alt="Our Services"
            className="w-full h-[500px] object-cover rounded-3xl"
          />
          <div className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-20 px-6 md:px-16 lg:px-24 bg-gradient-to-t from-black/80 to-transparent rounded-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white anton tracking-wide">
              Our Services
            </h1>
            <p className="text-white mt-4 max-w-2xl text-base sm:text-lg">
            Where passion meets expertise.
            Your vehicle is more than just a mode of transportation — it's an extension of your identity.
            </p>
          </div>
        </div>

        <div className="reference px-6 md:px-16 lg:px-32 pt-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Mobile Header */}
            <div className="lg:hidden space-y-6 mb-10">
              <div className="border-l-4 border-cyan-600 pl-4">
                <h1 className="text-4xl font-bold anton text-white">
                  SERVICES
                </h1>
              </div>
              <p className="text-gray-300 poppins text-base">
                CarWash offers a range of customizable services...
              </p>
              <button className="border-2 anton tracking-wide border-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-black transition-all duration-200">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>

            {/* Sticky Header for Tablet/Desktop */}
            <div className="hidden lg:block w-full max-w-[400px] sticky top-32 self-start space-y-6">
              <div className="border-l-4 border-cyan-600 pl-4">
                <h1 className="text-5xl font-bold anton text-white">
                  SERVICES
                </h1>
              </div>
              <p className="text-gray-300 mb-0 poppins text-lg">
                CarWash offers a range of customizable services...
              </p>
              <p className="text-gray-400 mt-1 w-sm text-sm poppins">
                Special offer: Rs.5000 off on any service!
              </p>
              <button className="border-2 anton tracking-wide border-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-black transition-all duration-200">
                <Link href="/Contact">Contact Us</Link>
              </button>
            </div>

            {/* Right Section - Services */}
            <div className="w-full space-y-12 font-bold">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  linkUrl={service.linkUrl}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-25 bg-black"></div>

        {/* Appointment Section */}
        <div className="min-h-screen bg-[#f8f8f8] flex justify-center items-center px-6 md:px-16 lg:px-40 py-20">
          <div className="max-w-7xl w-full grid md:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                LET'S <br /> BOOK AN{" "}
                <span className="text-[#00DAFF]">APPOINTMENT</span>
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-5"
              >
                <div className="md:col-span-1">
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="p-4 rounded-full border text-sm w-full"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <input
                    {...register("vehicleType", {
                      required: "Vehicle type is required",
                    })}
                    type="text"
                    className="p-4 rounded-full border text-sm w-full"
                    placeholder="Vehicle type"
                  />
                  {errors.vehicleType && (
                    <p className="text-red-500 text-sm">
                      {errors.vehicleType.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                    type="number"
                    className="p-4 rounded-full border text-sm w-full"
                    placeholder="Phone number*"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <input
                    {...register("date", { required: "Date is required" })}
                    type="date"
                    className="p-4 rounded-full border text-sm w-full"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <input
                    {...register("email", {
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="p-4 rounded-full border text-sm w-full"
                    placeholder="Email*"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-1">
                  <input
                    {...register("time", { required: "Time is required" })}
                    type="time"
                    className="p-4 rounded-full border text-sm w-full"
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm">
                      {errors.time.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <textarea
                    className="p-4 border rounded-2xl text-sm w-full"
                    rows="4"
                    placeholder="Any additional requests?"
                  />
                  {errors.requests && (
                    <p className="text-red-500 text-sm">
                      {errors.requests.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="md:col-span-2 border border-[#00DAFF] text-[#00DAFF] font-bold px-8 py-3 rounded-full hover:bg-[#00DAFF] hover:text-white transition"
                >
                  SUBMIT MESSAGE
                </button>
              </form> 
            </div>

{/* Contact Section */}
<div className="space-y-6">
  <h2 className="text-3xl font-black underline">CONTACT US</h2>

  <div>
    <h3 className="text-[#00DAFF] text-2xl font-bold">PHONE</h3>
    <p>
      <a href="tel:+919686968315" className="hover:underline text-black">
        +91 96869 68315
      </a>{" "}
      /{" "}
      <a href="tel:+918884440944" className="hover:underline text-black">
        +91 8884440944
      </a>
    </p>
  </div>

  <div>
    <h3 className="text-[#00DAFF] text-2xl font-bold">LOCATION</h3>
    <p>
      <a
        href="https://www.google.com/maps?q=3-29,+4th+B+Cross,+Koramangala+Industrial+Layout,+Koramangala,+Bengaluru,+Karnataka+560034,+India"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-black"
      >
        3-29, 4th B Cross, Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka 560034, India
      </a>
    </p>
  </div>

  <div>
    <h3 className="text-[#00DAFF] text-2xl font-bold">OPENING HOURS</h3>
    <p>Mon - Sunday: 9am - 8pm</p>
    <p>(By Appointment Only)</p>
  </div>
</div>

          </div>
        </div>

        {/* Footer */}
        <div className="relative bg-black pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ComplexServices;