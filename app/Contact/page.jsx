// "use client";

// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import Navlinks from "../Navlinks/Navlinks";
// import Footer from "../Components/Footer";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     vehicleYear: "",
//     vehicleMake: "",
//     vehicleModel: "",
//     services: [],
//     message: "",
//     agreement: false,
//     captcha: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       if (name === "agreement") {
//         setFormData({ ...formData, [name]: checked });
//       } else {
//         setFormData({
//           ...formData,
//           services: checked
//             ? [...formData.services, value]
//             : formData.services.filter((service) => service !== value),
//         });
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.agreement || formData.captcha !== "4") {
//       alert("Please check the agreement and answer the captcha correctly.");
//       return;
//     }

//     const templateParams = {
//       ...formData,
//       services: formData.services.join(", "),
//     };

//     emailjs
//       .send(
//         "service_wdf579t", // Replace with your EmailJS Service ID
//         "your_template_id", // Replace with your EmailJS Template ID
//         templateParams,
//         "your_public_key" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//           console.log(result.text);
//         },
//         (error) => {
//           alert("Something went wrong. Please try again.");
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col   overflow-hidden">
//       <Navlinks isComplete={true} />
//       <div className="flex-grow bg-black px-4 md:px-30 md:py-16 py-6 flex justify-center ">
//         <div className="flex flex-col md:flex-row justify-between items-start pt-20 md:pt-15">
//           <div className="business-info text-zinc-200 px-4 md:px-20 space-y-4 text-center text-sm md:text-left mt-10 md:mt-20 ">
//             <p className="font-bold text-3xl md:px-0 px-20 ">Business info</p>
//             <p>
//               29, 4th B Cross, 5th Block, Koramangala,
//               <br />
//               Bengaluru, Karnataka 560095
//             </p>
//             <p>+91 96869 68315 / +91 8884440944</p>
//             <p>enquiry@torquedetailingstudio.com</p>
//             <p>Mon - Sat: 7am - 5pm (By Appointment Only)</p>
//             <iframe
//               className="w-60 md:w-96 h-65 md:h-96 mx-auto md:mx-0 mt-16"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.271563222612!2d77.61333207506796!3d12.934526287380113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500619c4a47%3A0xebb2a980aa4ccb3e!2sTorque%20Detailing%20Studio!5e0!3m2!1sen!2sin!4v1712652482055!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//           <div className="w-full md:w-[700px] m-auto p-4 md:p-8 md:mx-12 text-zinc-200">
//             <h2 className="text-[28px] md:text-[55px] font-bold py-1 text-center md:text-left -mt-13">
//               CONTACT <span className="text-[#00DAFF]">US</span>
//             </h2>
//             <p className="text-center md:text-left mt-10 ">
//               Please reach out with any questions, to schedule, to book an
//               appointment,or
//               for any reason at all. We will get back to you shortly.
//             </p>
//             <form onSubmit={handleSubmit} className="">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 py-1">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//                 <input
//                   type="text"
//                   name="vehicleYear"
//                   placeholder="Vehicle Year"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//                 <input
//                   type="text"
//                   name="vehicleMake"
//                   placeholder="Vehicle Make"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//                 <input
//                   type="text"
//                   name="vehicleModel"
//                   placeholder="Vehicle Model"
//                   onChange={handleChange}
//                   className="h-10 w-full p-2 bg-gray-700 text-white text-sm border border-white"
//                 />
//               </div>
//               <div className="mt-4">
//                 <p className="text-center md:text-left mt-5">
//                   Please let us know which service(s) you would like:
//                 </p>
//                 <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-5 text-sm">
//                   {[
//                     "Ceramic Coating",
//                     "Paint Correction",
//                     "Exterior Detailing",
//                     "Interior Detailing",
//                   ].map((service) => (
//                     <label
//                       key={service}
//                       className="flex items-center space-x-2"
//                     >
//                       <input
//                         type="checkbox"
//                         name="services"
//                         value={service}
//                         onChange={handleChange}
//                       />
//                       <span>{service}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <textarea
//                   name="message"
//                   placeholder="Is there anything else we should know?"
//                   onChange={handleChange}
//                   className="p-2 bg-gray-700 text-white w-full h-24 resize-none text-sm border border-white"
//                 />
//               </div>
//               <div className="mt-4 flex items-start gap-2">
//                 <input
//                   type="checkbox"
//                   name="agreement"
//                   checked={formData.agreement}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="agreement" className="text-white text-sm">
//                   By submitting this form, I agree with the Privacy Policy
//                 </label>
//               </div>
//               <div className="mt-4 flex flex-col md:flex-row items-center md:items-start">
//                 <label className="mb-2 md:mb-0">4 + 0 =</label>
//                 <input
//                   type="text"
//                   name="captcha"
//                   onChange={handleChange}
//                   className="p-2 bg-gray-700 text-white ml-2 w-full md:w-32 text-center md:text-left border border-white"
//                 />
//               </div>
//               <div className="mt-4 flex justify-center md:justify-start">
//                 <button
//                   type="submit"
//                   className="p-2 w-full md:w-32 border border-[#00DAFF] text-[#00DAFF] rounded-md"
//                 >
//                   SEND
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;

"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    services: [],
    message: "",
    agreement: false,
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "agreement") {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({
          ...formData,
          services: checked
            ? [...formData.services, value]
            : formData.services.filter((service) => service !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreement || formData.captcha !== "4") {
      alert("Please check the agreement and answer the captcha correctly.");
      return;
    }

    const templateParams = {
      ...formData,
      services: formData.services.join(", "),
    };

    emailjs
      .send(
        "service_wdf579t",
        "your_template_id",
        templateParams,
        "your_public_key"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Something went wrong. Please try again.")
      );
  };

  return (
    <div className="w-full min-h-screen bg-black text-zinc-200 overflow-hidden">
      <Navlinks isComplete={true} />
      <div className="flex flex-col md:flex-row px-4 md:px-40 py-12 gap-8 mt-30">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 md:sticky md:top-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-[#00DAFF]">
            Business Info
          </h2>
          <div className="text-sm leading-relaxed text-center md:text-left">
            <p>
              <a
                href="https://www.google.com/maps?q=3-29,+4th+B+Cross,+Koramangala+Industrial+Layout,+Koramangala,+Bengaluru,+Karnataka+560034,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                3-29, 4th B Cross, Koramangala Industrial Layout, <br /> Koramangala, Bengaluru, Karnataka 560034, India
              </a>
            </p>
            <p className="mt-2">
              📞{" "}
              <a href="tel:+919686968315" className="hover:underline text-white">
                +91 96869 68315
              </a>{" "}
              /{" "}
              <a href="tel:+918884440944" className="hover:underline text-white">
                +91 8884440944
              </a>
              <br />
              ✉️{" "}
              <a href="mailto:torquedetailingstudio@gmail.com" className="hover:underline text-white">
                enquiry@torquedetailingstudio.com
              </a>
            </p>
            <p className="mt-2 italic">Mon - Sunday: 9am - 8pm (By Appointment)</p>
          </div>
          <iframe
            className="w-full h-72 rounded-xl border-2 border-[#00DAFF]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.271563222612!2d77.61333207506796!3d12.934526287380113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500619c4a47%3A0xebb2a980aa4ccb3e!2sTorque%20Detailing%20Studio!5e0!3m2!1sen!2sin!4v1712652482055!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white/10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left mb-4">
            CONTACT <span className="text-[#00DAFF]">US</span>
          </h2>
          <p className="text-sm text-center md:text-left mb-6">
            Reach out with questions, bookings, or anything else — we’ll reply
            shortly.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["firstName", "lastName", "email", "phone"].map((field, idx) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={
                    field === "firstName"
                      ? "First Name"
                      : field === "lastName"
                      ? "Last Name"
                      : field === "email"
                      ? "Email"
                      : "Phone"
                  }
                  onChange={handleChange}
                  className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
                />
              ))}
            </div>

            {/* Vehicle Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {["vehicleYear", "vehicleMake", "vehicleModel"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={
                    field === "vehicleYear"
                      ? "Vehicle Year"
                      : field === "vehicleMake"
                      ? "Vehicle Make"
                      : "Vehicle Model"
                  }
                  onChange={handleChange}
                  className="p-2 bg-black/40 border border-white/20 text-sm rounded focus:outline-none focus:border-[#00DAFF] text-white"
                />
              ))}
            </div>

            {/* Services */}
            <div className="mt-6">
              <p className="text-sm mb-2">Choose your services:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  "Ceramic Coating",
                  "Paint Correction",
                  "Exterior Detailing",
                  "Interior Detailing",
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      onChange={handleChange}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Anything else you'd like to share?"
              className="mt-4 p-3 w-full h-24 bg-black/40 text-white border border-white/20 text-sm rounded resize-none"
            />

            {/* Agreement & Captcha */}
            <div className="mt-4 flex items-start gap-2">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              <span className="text-xs">
                I agree with the Privacy Policy & Terms
              </span>
            </div>

            <div className="mt-4 flex gap-2 items-center">
              <label className="text-sm">4 + 0 =</label>
              <input
                type="text"
                name="captcha"
                onChange={handleChange}
                className="p-2 bg-black/40 text-white text-sm w-20 border border-white/20 text-center rounded"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center md:text-left">
              <button
                type="submit"
                className="px-8 py-2 rounded border border-[#00DAFF] text-[#00DAFF] hover:bg-[#00daff2a] transition-all"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
