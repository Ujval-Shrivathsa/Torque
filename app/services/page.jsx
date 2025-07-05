"use client";

import React from "react";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

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
        <p className="text-zinc-400 ml-0 sm:ml-8 mt-2 sm:mt-6 text-base sm:text-md font-medium max-w-full sm:max-w-[420px]">
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
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

// Updated onSubmit function with correct template parameters
const onSubmit = async (data) => {
  setIsSubmitting(true);

  // Prepare template parameters matching your EmailJS template
  const templateParams = {
    name: data.name,                    // {{name}} in template
    fullName: data.name,               // {{fullName}} in template  
    phone: data.phone,                 // {{phone}} in template
    email: data.email || "Not provided", // {{email}} in template
    vehicletype: data.vehicleType || "Not specified", // {{vehicletype}} in template
    vehicledate: data.date,            // {{vehicledate}} in template
    vehicletime: data.time,            // {{vehicletime}} in template
    message: data.requests || "No additional requests", // {{message}} in template
  };

  try {
    const result = await emailjs.send(
      "service_la3gn92",     // Your EmailJS Service ID
      "template_xd1y36x",    // Your EmailJS Template ID
      templateParams,
      "YP21SDfp07F2Tce0O"    // Your EmailJS Public Key
    );

    console.log("Appointment email sent successfully:", result);
    
    // Reset form and redirect to Thank You page
    reset();
    router.push("/thankyoupage");

  } catch (error) {
    console.error("Appointment email send failed:", error);
    alert("Something went wrong. Please try again or contact us directly.");
    setIsSubmitting(false);
  }
};

  const services = [
    {
      title: "PAINT PROTECTION FILM",
      description:
        "A paint protection film, also known as a clear bra, is a transparent layer that is applied to the exterior of a vehicle to safeguard the paint from scratches, chips, and other damage.",
      image:
        "https://lakdfs.sirv.com/Images/PPF.jpg",
      linkUrl: "/services/ppf"
    },
    {
      title: "GRAPHENE COATING",
      description:
        "Graphene coating is a cutting-edge protective layer that enhances the durability and shine of your vehicle's paint. It provides superior resistance to scratches, UV rays, and environmental contaminants.",
      image:
        "https://img.freepik.com/premium-photo/applying-nanoceramics-cars-car-paint-protection-concept_153608-1180.jpg?ga=GA1.1.1515336155.1743059816&semt=ais_hybrid&w=740",
      linkUrl: "/services/gc"
    },
    {
      title: "CERAMIC COATING",
      description:
        "Ceramic coating is a liquid polymer applied to the exterior of a vehicle, creating a protective layer that enhances shine and provides resistance against scratches, UV rays, and chemical stains.",
      image:
        "https://lakdfs.sirv.com/Images/C%20C.jpg",
      linkUrl: "/services/cc"
    },
    {
      title: "INTERIOR DETAILING",
      description:
        "Deep cleaning and protection of all interior surfaces including seats, carpets, and dashboard. Keeps your ride looking brand new inside.",
      image:
        "https://lakdfs.sirv.com/Images/IN%20D.jpg",
      linkUrl: "/services/id"
    },
    {
      title: "EXTERIOR DETAILING",
      description:
        "Thorough cleaning, restoration, and finishing of a vehicle's exterior to produce a show-quality level of detail.",
      image:
        "https://lakdfs.sirv.com/Images/ED.jpg",
      linkUrl: "/services/ed"
    },
    {
      title: "AUTO DETAILING",
      description:
        "Give your vehicle a complete makeover, inside and out. Experience a sparkling exterior and a refreshed interior with our meticulous cleaning and restoration service.",
      image:
        "https://lakdfs.sirv.com/Images/AD.jpg",
      linkUrl: "/services/ad"
    },
    {
      title: "VINYL WRAP",
      description:
        "Transform your vehicle with high-quality vinyl wraps. Choose from a variety of colors and custom designs for endless personalization.",
      image:
        "https://lakdfs.sirv.com/Images/V%20W.jpg",
      linkUrl: "/services/vx"
    },
    {
      title: "WINDOW TINT",
      description:
        " It enhances privacy, reduces glare, blocks UV rays, and protects your interior from fading and heat damage. Customizable options offer the perfect blend of style and function.",
      image:
        "https://lakdfs.sirv.com/Images/WT.jpg",
      linkUrl: "/services/wt"
    },
    {
      title: "WINDSHIELD COATING",
      description:
        "Enhance visibility and safety with an advanced hydrophobic coating that keeps your windshield clean, providing clearer vision during heavy rains and reducing hard water spots.",
      image:
        "https://lakdfs.sirv.com/Images/WC.jpg",
      linkUrl: "/services/wc"
    },
    {
      title: "HEADLIGHT RESTORATION",
      description:
        "Improve night driving safety by restoring cloudy or yellowed headlights to their original clarity for brighter, clearer visibility.",
      image:
        "https://lakdfs.sirv.com/Images/HR.jpg",
      linkUrl: "/services/hr"
    },
    {
      title: "INTERIOR DISINFECTION",
      description:
        "Eliminate odours and harmful bacteria with our thorough interior disinfection service.",
      image:
        "https://lakdfs.sirv.com/Images/ID.jpg",
      linkUrl: "/services/idi"
    },
    {
      title: "TRIM RESTORATION",
      description:
        "Revive dull and faded plastic trim, giving it a like-new appearance with a protective coating for a longer lasting shine!",
      image:
        "https://lakdfs.sirv.com/Images/TR.jpg",
      linkUrl: "/services/tr"
    },
    {
      title: "A/C STERILIZATION",
      description:
        "With a deep clean and sanitization of your A/C ducts and filters. You can be rest assured, with clean and fresh air inside your car",
      image:
        "https://lakdfs.sirv.com/Images/AC.jpg",
      linkUrl: "/services/acs"
    },
    {
      title: "MINOR ELECTRICAL & MECHANICAL WORK",
      description:
        "From windshield wiper changes to fitting dashcams, we handle small but essential repairs. ",
      image:
        "https://lakdfs.sirv.com/Images/ME.jpg",
      linkUrl: "/services/mem"
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
                <h1 className="text-4xl font-bold text-white">
                  SERVICES
                </h1>
              </div>
              <p className="text-gray-300 text-base">
                CarWash offers a range of customizable services...
              </p>
              <button className="border-2 tracking-wide border-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-black transition-all duration-200">
                <Link href="/contact">Contact Us</Link>
              </button>
            </div>

            {/* Sticky Header for Tablet/Desktop */}
            <div className="hidden lg:block w-full max-w-[400px] sticky top-32 self-start space-y-6">
              <div className="border-l-4 border-cyan-600 pl-4">
                <h1 className="text-5xl font-bold text-white">
                  SERVICES
                </h1>
              </div>
              <p className="text-gray-300 mb-0 text-lg">
                CarWash offers a range of customizable services...
              </p>
              <p className="text-gray-400 mt-1 w-sm text-sm">
                Special offer: Rs.5000 off on any service!
              </p>
              <button className="border-2 tracking-wide border-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-600 hover:text-black transition-all duration-200">
                <Link href="/contact">Contact Us</Link>
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

 <div className="min-h-screen bg-gray-100">
      {/* Appointment Section */}
      <div className="min-h-screen bg-[#f8f8f8] flex justify-center items-center px-4 sm:px-6 md:px-16 lg:px-40 py-8 sm:py-20">
        <div className="max-w-7xl w-full grid md:grid-cols-3 gap-6 md:gap-12">
          {/* Form Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              LET'S <br /> BOOK AN{" "}
              <span className="text-[#00DAFF]">APPOINTMENT</span>
            </h2>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            >
              <div className="md:col-span-1">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="p-4 rounded-full border border-gray-800 text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
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
                  className="p-4 rounded-full border border-gray-800 text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all"
                  placeholder="Vehicle type"
                />
                {errors.vehicleType && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
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
                  type="tel"
                  className="p-4 rounded-full border border-gray-800 text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all"
                  placeholder="Phone number*"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <input
                    {...register("date", { required: "Date is required" })}
                    type="date"
                    className="p-4 rounded-full border border-gray-800 text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all
                              appearance-none
                              [&::-webkit-calendar-picker-indicator]:opacity-100
                              [&::-webkit-calendar-picker-indicator]:scale-125
                              [&::-webkit-calendar-picker-indicator]:cursor-pointer
                              [&::-webkit-calendar-picker-indicator]:mr-2
                              [&::-webkit-calendar-picker-indicator]:filter-none
                              [&::-webkit-inner-spin-button]:appearance-none
                              [&::-webkit-outer-spin-button]:appearance-none
                              sm:[&::-webkit-calendar-picker-indicator]:scale-100"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 sm:hidden">
                    📅
                  </div>
                </div>
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
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
                  className="p-4 rounded-full border border-gray-800 text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all"
                  placeholder="Email*"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-1">
                <div className="relative">
                  <input
                    {...register("time", { required: "Time is required" })}
                    type="time"
                    className="p-4 rounded-full border border-gray-800 text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all
                              appearance-none
                              [&::-webkit-calendar-picker-indicator]:opacity-100
                              [&::-webkit-calendar-picker-indicator]:scale-125
                              [&::-webkit-calendar-picker-indicator]:cursor-pointer
                              [&::-webkit-calendar-picker-indicator]:mr-2
                              [&::-webkit-calendar-picker-indicator]:filter-none
                              [&::-webkit-inner-spin-button]:appearance-none
                              [&::-webkit-outer-spin-button]:appearance-none
                              sm:[&::-webkit-calendar-picker-indicator]:scale-100"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 sm:hidden">
                    🕐
                  </div>
                </div>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <textarea
                  {...register("requests")}
                  className="p-4 border border-gray-800 rounded-2xl text-sm w-full focus:outline-none focus:border-[#00DAFF] focus:ring-2 focus:ring-[#00DAFF]/20 transition-all resize-none"
                  rows={4}
                  placeholder="Any additional requests?"
                />
                {errors.requests && (
                  <p className="text-red-500 text-sm mt-1 ml-4">
                    {errors.requests.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 border-2 border-[#00DAFF] text-[#00DAFF] font-bold px-8 py-4 rounded-full hover:bg-[#00DAFF] hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "BOOKING..." : "SUBMIT MESSAGE"}
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="space-y-6 mt-8 md:mt-0">
            <h2 className="text-2xl sm:text-3xl font-black underline decoration-2 underline-offset-4">
              CONTACT US
            </h2>

            <div className="space-y-3">
              <h3 className="text-[#00DAFF] text-xl sm:text-2xl font-bold">PHONE</h3>
              <div className="space-y-1 flex">
                <p>
                  <a 
                    href="tel:+919686968315" 
                    className="hover:underline text-black text-sm sm:text-base transition-colors hover:text-[#00DAFF]"
                  >
                    +91 96869 68315
                  </a>
                </p>
                <p className="ml-1 mr-1"> / </p>
                <p>
                  <a 
                    href="tel:+918884440944" 
                    className="hover:underline text-black text-sm sm:text-base transition-colors hover:text-[#00DAFF]"
                  >
                    +91 8884440944
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#00DAFF] text-xl sm:text-2xl font-bold">LOCATION</h3>
              <p>
                <a
                  href="https://www.google.com/maps?q=3-29,+4th+B+Cross,+Koramangala+Industrial+Layout,+Koramangala,+Bengaluru,+Karnataka+560034,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-black text-sm sm:text-base transition-colors hover:text-[#00DAFF] leading-relaxed"
                >
                  3-29, 4th B Cross, Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka 560034, India
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#00DAFF] text-xl sm:text-2xl font-bold">OPENING HOURS</h3>
              <div className="space-y-1">
                <p className="text-sm sm:text-base">Mon - Sunday: 9am - 8pm</p>
                <p className="text-sm sm:text-base text-gray-600">(By Appointment Only)</p>
              </div>
            </div>
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