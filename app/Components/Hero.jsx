"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaTimes, FaCopy } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navlinks from "../Navlinks/Navlinks";
import { useRouter } from "next/navigation";
import GlitchText from "./GlitchText";
import Link from "next/link";
import Glitch from "./Glitchtext1";

const Hero = () => {
  const [progress, setProgress] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hackText, setHackText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formError, setFormError] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  // Video ref for manual control
  const videoRef = useRef(null);
  const playAttemptRef = useRef(0);
  const maxPlayAttempts = 5;
  
  // Characters for the hacking effect
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  const finalCodeLength = 8;
  const hackingInterval = useRef(null);
  const hackingDuration = 1500;

  // Detect iOS device
  useEffect(() => {
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) || 
                         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(isIOSDevice);
      console.log('iOS detected:', isIOSDevice);
      return isIOSDevice;
    };
    
    detectIOS();
  }, []);

  // Fixed popup tracking with proper sessionStorage usage
  const hasPopupBeenShown = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('popupShown') === 'true';
    }
    return false;
  };

  const markPopupAsShown = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('popupShown', 'true');
    }
  };

  // Enhanced video play function with multiple strategies
  const playVideo = async () => {
    const video = videoRef.current;
    if (!video || !videoLoaded) {
      console.log('Video not ready for playback');
      return false;
    }

    try {
      playAttemptRef.current += 1;
      console.log(`Play attempt ${playAttemptRef.current}/${maxPlayAttempts}`);

      // Reset video to beginning
      video.currentTime = 0;
      
      // Ensure all properties are set correctly
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.loop = true;
      video.playsInline = true;
      
      // For iOS, sometimes we need to load again
      if (isIOS && video.readyState < 2) {
        console.log('iOS: Reloading video...');
        video.load();
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        console.log('✅ Video playing successfully');
        setVideoPlaying(true);
        playAttemptRef.current = 0; // Reset counter on success
        return true;
      }
    } catch (error) {
      console.log(`❌ Play attempt ${playAttemptRef.current} failed:`, error);
      
      // If we haven't exceeded max attempts, try again with delay
      if (playAttemptRef.current < maxPlayAttempts) {
        setTimeout(() => {
          playVideo();
        }, 1000 * playAttemptRef.current); // Increasing delay
      } else {
        console.log('Max play attempts reached, setting up interaction listeners');
        setupInteractionListeners();
      }
      
      return false;
    }
  };

  // Setup interaction listeners for iOS with multiple event types
  const setupInteractionListeners = () => {
    if (hasInteracted) return;

    console.log('Setting up interaction listeners for video play...');
    
    const handleFirstInteraction = async (event) => {
      if (hasInteracted) return;
      
      console.log('🎯 First interaction detected:', event.type);
      setHasInteracted(true);
      
      // Remove all listeners immediately
      removeInteractionListeners();
      
      // Wait a moment then try to play
      setTimeout(async () => {
        const success = await playVideo();
        if (!success) {
          console.log('Play failed after interaction, will retry on next interaction');
          setHasInteracted(false); // Allow another attempt
          setTimeout(setupInteractionListeners, 1000);
        }
      }, 100);
    };

    // More comprehensive event list for iOS
    const events = [
      'touchstart', 'touchend', 'touchmove',
      'click', 'mousedown', 'mouseup',
      'scroll', 'wheel',
      'keydown', 'keyup',
      'focus', 'blur'
    ];

    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { 
        once: true, 
        passive: event.includes('touch') || event === 'scroll' || event === 'wheel'
      });
    });

    // Store cleanup function
    window.removeVideoInteractionListeners = () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };

    // Auto-cleanup after 30 seconds to prevent memory leaks
    setTimeout(() => {
      if (!hasInteracted) {
        removeInteractionListeners();
      }
    }, 30000);
  };

  const removeInteractionListeners = () => {
    if (window.removeVideoInteractionListeners) {
      window.removeVideoInteractionListeners();
      delete window.removeVideoInteractionListeners;
    }
  };

  // Enhanced video setup effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('🎬 Initializing video setup...');

    // Set all video properties immediately
    const configureVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = false;
      video.disablePictureInPicture = true;
      video.preload = 'metadata'; // Changed from 'auto' for better iOS compatibility
      
      // Set multiple attributes for maximum iOS compatibility
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
      video.setAttribute('muted', 'true');
      video.setAttribute('autoplay', 'true');
      video.setAttribute('loop', 'true');
      
      // iOS specific attributes
      video.setAttribute('x-webkit-airplay', 'allow');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('playsinline', '');
    };

    configureVideo();

    let loadAttempts = 0;
    const maxLoadAttempts = 3;

    const handleVideoLoad = () => {
      console.log('📹 Video loaded and ready');
      setVideoLoaded(true);
    };

    const handleCanPlay = async () => {
      console.log('▶️ Video can play');
      setVideoLoaded(true);
      
      // Small delay for iOS stability
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const success = await playVideo();
      if (!success && !hasInteracted) {
        setupInteractionListeners();
      }
    };

    const handlePlay = () => {
      console.log('🎵 Video started playing');
      setVideoPlaying(true);
    };

    const handlePause = () => {
      console.log('⏸️ Video paused');
      setVideoPlaying(false);
      
      // Auto-restart if paused unexpectedly (not by user)
      if (videoLoaded && !document.hidden) {
        setTimeout(() => {
          if (!videoPlaying) {
            playVideo();
          }
        }, 500);
      }
    };

    const handleError = (e) => {
      console.error('❌ Video error:', e);
      console.error('Video error details:', video.error);
      
      // Try to reload the video
      if (loadAttempts < maxLoadAttempts) {
        loadAttempts++;
        console.log(`Attempting to reload video (attempt ${loadAttempts}/${maxLoadAttempts})`);
        setTimeout(() => {
          video.load();
        }, 1000 * loadAttempts);
      }
    };

    const handleStalled = () => {
      console.log('📶 Video stalled, attempting restart...');
      setTimeout(() => {
        if (video.readyState < 2) {
          video.load();
        }
      }, 1000);
    };

    const handleWaiting = () => {
      console.log('⏳ Video waiting for data...');
    };

    const handleLoadStart = () => {
      console.log('🔄 Video load started');
    };

    // Add all event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('loadedmetadata', handleVideoLoad);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('waiting', handleWaiting);

    // Force load the video
    video.load();

    // Cleanup function
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('loadedmetadata', handleVideoLoad);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('waiting', handleWaiting);
      removeInteractionListeners();
    };
  }, [isIOS]);

  // Visibility change handler to restart video
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current && videoLoaded) {
        console.log('👁️ Page became visible, restarting video...');
        setTimeout(() => {
          playVideo();
        }, 300);
      }
    };

    const handleFocus = () => {
      if (videoRef.current && videoLoaded && !videoPlaying) {
        console.log('🎯 Window focused, restarting video...');
        setTimeout(() => {
          playVideo();
        }, 200);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('pageshow', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pageshow', handleFocus);
    };
  }, [videoLoaded, videoPlaying]);

  // Progress bar effect
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(interval);
      if (hackingInterval.current) {
        clearInterval(hackingInterval.current);
      }
    };
  }, []);

  // Fixed popup timer - only show if not shown before
  useEffect(() => {
    console.log("Checking if popup should show..."); // Debug log
    
    // Only set the timer if popup hasn't been shown before
    if (!hasPopupBeenShown()) {
      console.log("Setting up popup timer..."); // Debug log
      
      const popupTimer = setTimeout(() => {
        console.log("Popup timer triggered, showing popup"); // Debug log
        setShowPopup(true);
        markPopupAsShown();
      }, 15000); // 15 seconds

      return () => {
        clearTimeout(popupTimer);
      };
    } else {
      console.log("Popup already shown, skipping..."); // Debug log
    }
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("second");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupClosed(true);
    setShowCode(false);
    setDiscountCode("");
    setCopied(false);
    setIsGenerating(false);
    setShowForm(false);
    setUserName("");
    setUserPhone("");
    setFormError("");
    if (hackingInterval.current) {
      clearInterval(hackingInterval.current);
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!userName.trim() || !userPhone.trim()) {
      setFormError("Please fill in all fields");
      return;
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userPhone.trim())) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }
    
    setFormError("");
    setShowForm(false);
    generateDiscountCode();
  };

  const generateDiscountCode = () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    setShowCode(true);
    setHackText("");
    
    let startTime = Date.now();
    let finalCode = "";
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < finalCodeLength; i++) {
      finalCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    hackingInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / hackingDuration, 1);
      
      let currentText = "";
      for (let i = 0; i < finalCodeLength; i++) {
        if (i < Math.floor(progress * finalCodeLength)) {
          currentText += finalCode[i];
        } else {
          currentText += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }
      
      setHackText(currentText);
      
      if (progress >= 1) {
        clearInterval(hackingInterval.current);
        setDiscountCode(finalCode);
        setIsGenerating(false);
        redirectToWhatsApp(finalCode);
      }
    }, 50);
  };

  const redirectToWhatsApp = (code) => {
    const message = `Hi, I'm ${userName}. I'd like to claim my 30% discount (code: ${code}) for Torque Detailing Studio services.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919998899789?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
      closePopup();
    }, 4000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Debug log to check popup state
  console.log("Popup state:", { showPopup, popupClosed, isComplete, hasBeenShown: hasPopupBeenShown() });
 
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Navbar */}
      <motion.div className="absolute top-0 left-0 w-full px-4 md:px-10 z-50">
        <Navlinks isComplete={isComplete} />
      </motion.div>

      {/* Enhanced video element with maximum iOS compatibility */}
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        poster=""
        controls={false}
        disablePictureInPicture
        crossOrigin="anonymous"
        src="https://res.cloudinary.com/dycm7vkuq/video/upload/v1744367852/100_MB_skq4tw.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          // Force hardware acceleration
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          // Additional iOS-specific styles
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Multiple source formats for better compatibility */}
        <source 
          src="https://res.cloudinary.com/dycm7vkuq/video/upload/v1744367852/100_MB_skq4tw.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Interaction overlay for iOS - more prominent for debugging */}
      {!hasInteracted && isIOS && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 z-20 bg-black cursor-pointer flex items-center justify-center"
          onClick={() => {
            console.log('🎯 Overlay clicked');
            if (!hasInteracted) {
              setHasInteracted(true);
              playVideo();
            }
          }}
          onTouchStart={(e) => {
            console.log('👆 Overlay touched');
            e.preventDefault();
            if (!hasInteracted) {
              setHasInteracted(true);
              playVideo();
            }
          }}
        >
          {/* Optional: Add a subtle play button for iOS users */}
          <div className="text-white text-center opacity-50">
            <div className="text-4xl mb-2">▶️</div>
            <div className="text-sm">Tap to play video</div>
          </div>
        </motion.div>
      )}

      {/* Video status indicator (for debugging - remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-20 left-4 z-50 bg-black bg-opacity-50 text-white p-2 rounded text-xs">
          <div>iOS: {isIOS ? '✅' : '❌'}</div>
          <div>Loaded: {videoLoaded ? '✅' : '❌'}</div>
          <div>Playing: {videoPlaying ? '✅' : '❌'}</div>
          <div>Interacted: {hasInteracted ? '✅' : '❌'}</div>
          <div>Attempts: {playAttemptRef.current}</div>
        </div>
      )}

      {/* Heading & Subtitle */}
      <motion.div
        className="absolute mx-5 top-[45%] hidden md:top-[58%] my-20 md:my-0 md:flex flex-col items-start md:items-center md:text-center z-10 "
        initial="hidden"
        animate={isComplete ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {/* Your commented heading code here */}
      </motion.div>

      {/* Discount Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[99999999999999999999999] flex items-center justify-center px-4"
          >
            <div 
              className="fixed inset-0 bg-black bg-opacity-50" 
              onClick={closePopup}
            />
            
            <motion.div 
              className="relative bg-black border-2 border-[#00DAFF] rounded-lg p-6 w-full max-w-md shadow-2xl z-[101]"
              whileHover={{ scale: 1.02 }}
            >
              <button 
                onClick={closePopup}
                className="absolute top-3 right-3 text-white hover:text-[#00DAFF] transition-colors"
              >
                <FaTimes size={20} />
              </button>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  SPECIAL OFFER
                </h2>
                
                <motion.div 
                  className="text-5xl font-extrabold my-4 text-[#00DAFF]"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  30% OFF
                </motion.div>
                
                <p className="text-white mb-2">
                  Limited time offer on all premium services!
                </p>
                
                <div className="text-white mb-6">
                  <p className="font-semibold text-[#00DAFF]">Torque Detailing Studio</p>
                  <p className="text-sm">Call us: <a href="tel:9998899789" className="hover:text-[#00DAFF] transition-colors">9998899789</a></p>
                </div>
                
                {!showForm && !showCode && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#00DAFF] to-blue-600 text-white py-3 px-8 rounded-lg font-bold tracking-wide"
                    onClick={handleShowForm}
                  >
                    CLAIM NOW
                  </motion.button>
                )}
                
                {showForm && (
                  <motion.form 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 mb-4"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="mb-3">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-[#00DAFF]"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="tel" 
                        placeholder="Your Phone Number" 
                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-[#00DAFF]"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                      />
                    </div>
                    {formError && (
                      <p className="text-red-400 text-sm mb-3">{formError}</p>
                    )}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#00DAFF] to-blue-600 text-white py-2 px-8 rounded-lg font-bold tracking-wide"
                    >
                      SUBMIT
                    </motion.button>
                  </motion.form>
                )}
                
                {showCode && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 bg-gray-900 rounded-lg p-4 border border-[#00DAFF]"
                  >
                    <p className="text-gray-300 text-sm mb-2">Your discount code:</p>
                    <div className="flex items-center justify-center bg-gray-800 rounded px-4 py-2">
                      <span className="text-[#00DAFF] font-mono text-xl font-bold mr-3">
                        {isGenerating ? hackText : discountCode}
                      </span>
                      {!isGenerating && (
                        <motion.button
                          onClick={copyToClipboard}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-white hover:text-[#00DAFF]"
                          title="Copy to clipboard"
                        >
                          <FaCopy size={18} />
                        </motion.button>
                      )}
                    </div>
                    {copied && !isGenerating && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-green-400 text-xs mt-1"
                      >
                        Copied to clipboard!
                      </motion.p>
                    )}
                    {isGenerating ? (
                      <p className="text-gray-400 text-xs mt-3 animate-pulse">
                        Generating secure discount code...
                      </p>
                    ) : (
                      <div>
                        <p className="text-gray-400 text-xs mt-2">
                          Your discount has been applied to your account
                        </p>
                        <p className="text-gray-300 text-xs mt-1">
                          Thank you <span className="font-semibold">{userName}</span> for choosing Torque Detailing Studio!
                        </p>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-400 font-semibold text-sm mt-3"
                        >
                          Thank you for your submission!
                        </motion.p>
                        <p className="text-gray-300 text-xs mt-1">
                          Redirecting you to WhatsApp...
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
                
                <p className="text-gray-400 text-sm mt-4">
                  *Offer valid until August 31, 2025
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;

/*Elha mensagem*/