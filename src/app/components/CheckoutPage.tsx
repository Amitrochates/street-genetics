"use client";
import React from "react";

const CheckoutPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Name of this Printed T-Shirt",
      price: 799,
      size: "XS",
      quantity: 1,
      image: "/assets/images/tshirt1.png",
    },
    {
      id: 2,
      name: "Name of this Printed T-Shirt",
      price: 799,
      size: "XS",
      quantity: 1,
      image: "/assets/images/tshirt2.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Progress Bar */}
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center">
          {/* Progress Step 1 */}
          <div className="text-teal-400 font-bold text-lg mr-2">CART</div>
          <svg width="100" height="2" className="mx-2">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#666" strokeWidth="2" />
          </svg>
          {/* Progress Step 2 */}
          <div className="text-gray-500 font-bold text-lg mr-2">ADDRESS</div>
          <svg width="100" height="2" className="mx-2">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#666" strokeWidth="2" />
          </svg>
          {/* Progress Step 3 */}
          <div className="text-gray-500 font-bold text-lg">PAYMENT</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Order Summary */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-black border border-gray-700 rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md bg-[url('/assets/images/checkout_texture.png')]"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">Size: {item.size}</p>
                  <p className="text-lg font-bold">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-6">
  <div>
    <span className="block text-gray-400 text-xs mb-1">SIZE</span>
    <select
      defaultValue="XS"
      className="bg-transparent text-white text-center font-semibold border border-gray-500 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-3 py-1 w-20"
    >
      <option className="bg-black text-white" value="XS">XS</option>
      <option className="bg-black text-white" value="S">S</option>
      <option className="bg-black text-white" value="M">M</option>
      <option className="bg-black text-white" value="L">L</option>
      <option className="bg-black text-white" value="L">XL</option>
      <option className="bg-black text-white" value="L">2XL</option>
      <option className="bg-black text-white" value="L">3XL</option>
    </select>
  </div>

  {/* Quantity Dropdown */}
  <div>
    <span className="block text-gray-400 text-xs mb-1">QUANTITY</span>
    <select
      defaultValue="10"
      className="bg-transparent text-white text-center font-semibold border border-gray-500 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded px-3 py-1 w-20"
    >
      <option className="bg-black text-white" value="1">1</option>
      <option className="bg-black text-white" value="2">2</option>
      <option className="bg-black text-white" value="5">5</option>
      <option className="bg-black text-white" value="10">10</option>
    </select>
  </div>

  {/* Price */}
 
</div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Price Details */}
        <div className="bg-black border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Price Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-400">
              <span>Total MRP</span>
              <span>₹3995</span>
            </div>
            <div className="flex justify-between text-green-400">
              <span>Discount on MRP</span>
              <span>-₹100</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Coupon Discount</span>
              <span className="text-teal-400 cursor-pointer">APPLY COUPON</span>
            </div>
            <div className="flex justify-between text-gray-400 italic">
              <span>Delivery Charges</span>
              <span>Calculated at next step</span>
            </div>
            <hr className="border-gray-700" />
            <div className="flex justify-between text-white text-lg font-bold">
              <span>Order Total</span>
              <span>₹3895</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-teal-500 text-black font-semibold py-3 rounded-full hover:bg-teal-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
