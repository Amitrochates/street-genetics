"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import { useRouter } from 'next/navigation'
import { Product } from "../interfaces";
 
// interface CartItem {
//   id: number;
//   name: string;
//   size: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const {cart, dispatch} = useCart();
  const increaseQuantity = (id: string) => {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: id
      });
  };

  useEffect(()=>{
    console.log(cart);
  },[])

  const decreaseQuantity = (id: string) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id
    });
  };

  // Function to remove an item from the cart
  const removeItem = (id: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });
  };

  // Calculate subtotal
  const [subtotal,setSubtotal] = useState(0);
  useEffect(()=>{
    setSubtotal(cart.items.reduce(
      (acc : number, item : Product) => acc + Number(item.price) * item.quantity,
      0
    ))
  },[cart])


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 sm:w-80 md:w-96 lg:w-[28rem] bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold">YOUR CART</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white text-2xl">
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart?.items?.map((item : Product) => (
            <div
              key={item.id}
              className="flex px-4 sm:px-6 py-4 border-b border-gray-700 items-center"
            >
              {/* Image */}
              <img
                src={item.thumb}
                alt={item.productName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover mr-4"
              />
              {/* Details */}
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm font-medium">{item.productName}</h3>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                  SIZE: {item.size}
                </p>
                <p className="text-sm sm:text-base font-bold mt-1">
                  ₹{item.price}
                </p>
              </div>
              {/* Quantity and Remove */}
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.productId)}
                    className="border border-white w-5 h-5 sm:w-6 sm:h-6 text-xs sm:text-sm flex items-center justify-center hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="mx-1 sm:mx-2 text-sm">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.productId)}
                    className="border border-white w-5 h-5 sm:w-6 sm:h-6 text-xs sm:text-sm flex items-center justify-center hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="mt-2 text-gray-400 hover:text-red-500"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 border-t border-gray-700">
          <div className="flex justify-between mb-4">
            <span className="text-base sm:text-lg font-semibold">
              SUBTOTAL :
            </span>
            <span className="text-base sm:text-lg font-bold">₹{subtotal}</span>
          </div>
          <button className="w-full py-2 mb-2 text-black bg-gray-300 rounded-full hover:bg-gray-400">
            VIEW CART
          </button>
          <button onClick={()=>{
            router.push('/checkout')
          }} className="w-full py-2 text-white bg-black border rounded-full hover:bg-gray-800">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
