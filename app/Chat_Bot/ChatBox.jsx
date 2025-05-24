"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faPaperPlane,
  faXmark,
  faCheck,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAnimation, AnimatePresence, motion } from "framer-motion";

const OptionCard = ({ option, selected, onClick }) => (
  <label className="cursor-pointer">
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      onClick={onClick}
      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full tracking-[0.3px] text-[11px] sm:text-[13px] font-medium transition-all border flex items-center gap-1.5 sm:gap-2 mt-0 ${
        selected
          ? "border-transparent bg-[black] text-white"
          : "bg-[black] text-white border-transparent"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-sm transition-all ${
          selected
            ? "border-transparent text-white bg-[black] flex justify-center items-center"
            : "bg-[white]"
        }`}
      >
        {selected && (
          <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
        )}
      </div>
      {option}
    </motion.div>
  </label>
);

const TypingDots = () => (
  <div className="flex space-x-1 pl-1 items-center h-4">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 bg-black rounded-full"
        animate={{
          opacity: [0.3, 1, 0.3],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

  
const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState(-1);
  const [chatData, setChatData] = useState({
    name: "",
    service: [],
    vehicleType: [],
    model: "",
    mobile: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [isChatEnded, setIsChatEnded] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(false);
  const messagesEndRef = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Fade in
      await controls.start({ opacity: 1, transition: { duration: 3 } });
      // Wait 3 seconds
      await new Promise((res) => setTimeout(res, 3000));
      // Fade out
      await controls.start({ opacity: 0, transition: { duration: 1 } });
    };

    sequence();
  }, [controls]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add tooltip effect when page loads
  useEffect(() => {
    // Show tooltip after page loads
    setShowChatTooltip(true);
    
    // Hide tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowChatTooltip(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const options = [
    ["Ceramic Coating", "PPF", "Car Detailing", "Sunfilms"],
    ["Car", "Bike"],
  ];

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        { sender: "bot", text: null }
      ]);
      const timer1 = setTimeout(() => {
        setMessages([
          { sender: "bot", text: "Hello, I am Saanvi" }
        ]);
      }, 800);
      
      const timer2 = setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: "May I know your name?" }]);
      }, 1500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isChatOpen]);

  const resetChat = () => {
    setMessages([{ sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages([
        { sender: "bot", text: "Hello, I am Saanvi" },
        { sender: "bot", text: "May I know your name?", style: { marginTop: "-80px" } }
      ]);
    }, 800);
    setStep(-1);
    setChatData({ name: "", service: [], vehicleType: [], model: "", mobile: "" });
    setSelectedOptions([]);
    setUserInput("");
    setShowForm(false);
    setIsChatEnded(false);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setHasBeenClicked(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleSend = () => {
    if (step === -1) {
      if (!userInput.trim()) return;
      const name = userInput.trim();
      const userMessage = { sender: "user", text: name };
      
      setChatData(prev => ({ ...prev, name }));
      setMessages(prev => [...prev, userMessage, { sender: "bot", text: null }]);
      
      setTimeout(() => {
        setMessages(prev => [
          ...prev.slice(0, -1),
          { sender: "bot", text: `Nice to meet you, ${name}! Please select a service.` }
        ]);
        setStep(0);
      }, 800);
      
      setUserInput("");
      return;
    }

    if (step === 0 || step === 1) {
      if (selectedOptions.length === 0) return;
      const userMessage = {
        sender: "user",
        text: selectedOptions.join(", "),
      };

      let botReply = "";
      let nextStep = step;

      if (step === 0) {
        setChatData((prev) => ({ ...prev, service: selectedOptions }));
        botReply = "Is it for a Car or Bike?";
        nextStep = 1;
      } else if (step === 1) {
        setChatData((prev) => ({ ...prev, vehicleType: selectedOptions }));
        botReply = `Great! What is your ${selectedOptions.join("/")} model?`;
        nextStep = 2;
      }

      setMessages((prev) => [
        ...prev,
        userMessage,
        { sender: "bot", text: null },
      ]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "bot", text: botReply },
        ]);
        setStep(nextStep);
        setSelectedOptions([]);
      }, 800);
    } else if (step === 2) {
      if (!userInput.trim()) return;
      const userMessage = { sender: "user", text: userInput };
      const botReply = "Sure, That's a great choice";

      setChatData((prev) => ({ ...prev, model: userInput }));
      setShowForm(true);

      setMessages((prev) => [
        ...prev,
        userMessage,
        { sender: "bot", text: null },
      ]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "bot", text: botReply },
        ]);
      }, 800);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "I will call you soon to discuss details. Can I have your mobile number?",
          },
          { sender: "bot", text: "Please type your phone number ️😊" },
        ]);
      }, 1200);

      setUserInput("");
      setStep(3);
    }
  };

  const handleSubmitForm = () => {
    if (!chatData.mobile.trim()) return;
    const userReply = {
      sender: "user",
      text: `Phone: ${chatData.mobile}`,
    };

    const botReply = {
      sender: "bot",
      text: "Thanks for contacting us! We'll connect with you soon.",
    };

    setMessages((prev) => [...prev, userReply, { sender: "bot", text: null }]);
    setTimeout(() => {
      setMessages((prev) => [...prev.slice(0, -1), botReply]);
      setShowForm(false);
      setIsChatEnded(true);
    }, 800);
  };

  const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  useEffect(() => {
    if (chatData.mobile && !validatePhoneNumber(chatData.mobile)) {
      setIsMobileNumberValid(false);
    } else {
      setIsMobileNumberValid(true);
    }
  }, [chatData.mobile]);

  // Bouncing animation variants
  const bounceVariants = {
    bounce: {
      y: [0, -8, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }
    },
    still: {
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Tooltip animation variants
  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <div className="relative z-9999999 min-h-full w-[full]">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
           className="fixed bottom-24 right-3 lg:left-253 w-[25%] mt-[-100px] sm:mt-0 md:mt-0 lg:mt-[-200px] md:right-6 h-[60vh] sm:h-[65vh] rounded-t-xl sm:rounded-xl shadow-lg bg-white flex flex-col z-50"
          >
            {/* Header */}
            <div className="relative flex items-center w-[full] h-[8%] sm:h-[10%] bg-white rounded-t-xl px-2 sm:px-4 overflow-hidden">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden z-20 bg-white p-1">
                <img
                  src='https://res.cloudinary.com/dycm7vkuq/image/upload/v1746711803/istockphoto-1180568095-612x612_urmmqy.jpg'
                  alt="Chat Icon"
                  className="w-full object-top h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1 ml-10 sm:ml-12 relative z-10">
                <h1 className="text-black font-semibold tracking-wide text-sm">
                  Hi, Saanvi Here!
                </h1>
                <p className="text-gray-400 mt-[-3px] text-xs">
                  How may I assist you today?
                </p>
              </div>
              <div className="flex gap-1 items-center z-10">
                <button
                  onClick={resetChat}
                  className="text-black p-1 rounded-full"
                >
                  <FontAwesomeIcon icon={faRotateRight} className="text-sm hover:text-cyan-700" />
                </button>
                <button
                  onClick={handleCloseChat}
                  className="p-1.5 sm:p-2 flex justify-center items-center rounded-full"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-black text-lg hover:text-cyan-700" />
                </button>
              </div>  
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#f5f5f5] rounded-lg p-2 sm:p-3 mt-1 sm:mt-2 overflow-y-auto scroll-smooth text-xs">
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
              <div className="flex flex-col gap-2">
                {messages.map((msg, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div
                      className={`max-w-[85%] flex items-start gap-1.5 ${
                        msg.sender === "user"
                          ? "self-end justify-end"
                          : "self-start justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <img
                          src='https://res.cloudinary.com/dycm7vkuq/image/upload/v1746711803/istockphoto-1180568095-612x612_urmmqy.jpg'
                          alt="Bot"
                          className="w-6 h-6 rounded-full object-top object-cover"
                        />
                      )}
                      <div
                        className={`p-2 pl-3 pr-3 rounded-xl text-sm ${
                          msg.sender === "user"
                            ? "bg-[#131313] text-white"
                            : "bg-[#ececec] text-[#272727] tracking-wide"
                        }`}
                      >
                        {msg.text !== null ? msg.text : <TypingDots />}
                      </div>
                    </div>

                    {step <= 1 && step >= 0 &&
                      ((step === 0 &&
                        msg.text?.includes("Please select a service")) ||
                        (step === 1 &&
                          msg.text === "Is it for a Car or Bike?")) && (
                        <div className="flex flex-wrap ml-7 gap-1.5 self-start">
                          {options[step].map((opt) => (
                            <OptionCard
                              key={opt}
                              option={opt}
                              selected={selectedOptions.includes(opt)}
                              onClick={() =>
                                setSelectedOptions((prev) =>
                                  prev.includes(opt)
                                    ? prev.filter((o) => o !== opt)
                                    : [...prev, opt]
                                )
                              }
                            />
                          ))}
                        </div>
                      )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Footer Input */}
            {!isChatEnded && (
              <div className="p-2 sm:p-3 border-t border-gray-200">
                {showForm ? (
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center border border-gray-300 rounded-xl h-9 w-20">
                      <img
                        src="data:image/png;base64,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"
                        alt="Indian Flag"
                        className="w-3 h-2 mr-1"
                      />
                      <span className="text-gray-600 text-xs">+91</span>
                    </div>
                    <div className="relative w-full flex justify-center items-center">
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={chatData.mobile}
                        onChange={(e) =>
                          setChatData({ ...chatData, mobile: e.target.value })
                        }
                        className="w-full px-3 py-1.5 text-sm rounded-xl text-gray-800"
                      />
                      <button
                        onClick={handleSubmitForm}
                        className={`absolute right-3 text-black rounded-full flex items-center ${
                          !isMobileNumberValid ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={!isMobileNumberValid}
                      >
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className={`flex-1 px-3 py-1.5 border rounded-xl text-sm ${
                        step > -1 && step <= 1
                          ? "bg-gray-200 cursor-not-allowed text-gray-500"
                          : "focus:outline-none focus:border-black"
                      }`}
                      placeholder={
                        step === -1
                          ? "Enter your name..."
                          : step <= 1
                          ? "Select an option above..."
                          : "Enter vehicle model..."
                      }
                      disabled={step > -1 && step <= 1}
                    />
                    <button
                      onClick={handleSend}
                      className="p-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button - Only bounces if it has never been clicked */}
      <motion.button
        onClick={handleOpenChat}
        animate={!hasBeenClicked ? "bounce" : "still"}
        variants={bounceVariants}
        className="fixed bottom-3 right-3 w-18 h-18 rounded-full text-white flex justify-center items-center z-50 shadow-lg"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="absolute lg:w-60 lg:h-10 lg:text-lg right-24 mr-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-md"
        >
          Hello, how may I help you?
        </motion.div>
        <img
          src="https://res.cloudinary.com/dycm7vkuq/image/upload/v1746711803/istockphoto-1180568095-612x612_urmmqy.jpg"
          alt="Chat"
          className="w-full h-full object-cover object-top rounded-full"
        />
      </motion.button>
    </div>
  );
};

export default ChatBox;