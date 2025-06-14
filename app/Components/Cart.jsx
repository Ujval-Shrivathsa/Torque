"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { MdShoppingCart, MdDelete } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.mrp * item.quantity,
    0
  );

  const handleCheckout = () => {
    const message = cart
      .map(
        (item) =>
          `*${item.name}* - Qty: ${item.quantity}, Price: ₹${item.mrp * item.quantity}`
      )
      .join("\n");

    const finalMessage = encodeURIComponent(
      message + `\n\n*Total:* ₹${totalPrice}`
    );

    const whatsappNumber = "9686968315";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <motion.button
        onClick={() => setIsCartOpen(true)}
        whileTap={{ scale: 0.9, opacity: 0.7 }}
        transition={{ duration: 0.2 }}
        className="relative text-white text-2xl"
      >
        <MdShoppingCart />
        {cart.length > 0 && (
          <span className="absolute z-9999999 right-0 top-0 bg-red-500 text-white text-xs rounded-full px-2">
            {cart.length}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
           style={{ zIndex: 999999999999 }}
            className="fixed top-0 right-0 bottom-0 left-0 md:left-auto h-screen w-full md:w-[350px] lg:w-[400px] bg-black text-white overflow-y-auto shadow-xl px-3 md:px-5"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white pb-6 md:pb-10 py-6 md:py-10 px-2 md:px-5">
                <h2 className="text-lg font-bold">Cart</h2>
                <motion.button
                  onClick={() => setIsCartOpen(false)}
                  className="text-sm md:text-xl border border-white px-3 md:px-4 py-1 rounded-md"
                >
                  Close
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="mt-4 flex-grow overflow-y-auto">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 border-b border-white"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 md:w-14 md:h-14 object-cover rounded mr-2 md:mr-3"
                      />
                      <div className="flex-1">
                        <p className="text-xs md:text-sm">{item.name}</p>
                        <p className="text-xs text-gray-400">
                          ₹{item.mrp * item.quantity}
                        </p>
                        <div className="flex items-center mt-1 md:mt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(index, -1);
                            }}
                            className="px-2 py-0.5 md:py-1 border border-white rounded text-xs md:text-sm"
                          >
                            -
                          </button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(index, 1);
                            }}
                            className="px-2 py-0.5 md:py-1 border border-white rounded text-xs md:text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => removeFromCart(index)}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="text-red-500 text-lg md:text-xl ml-1 md:ml-2"
                      >
                        <MdDelete />
                      </motion.button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 mt-4 text-center">Cart is empty.</p>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-white pt-4 mt-auto sticky bottom-0 bg-black pb-4">
                <h3 className="text-base md:text-lg font-semibold">Total: ₹{totalPrice}</h3>
                <button
                  onClick={handleCheckout}
                  className="mt-3 w-full bg-[#00DAFF] text-white py-2 rounded-md transition"
                  disabled={cart.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;