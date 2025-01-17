import React from "react";


const ProductDetailModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white text-3xl font-bold hover:text-gray-400"
      >
        &times;
      </button>

      {/* Modal Content */}
      <div className="bg-black text-white rounded-lg shadow-lg p-8 max-w-5xl w-full flex">
        {/* Left Section - Image */}
        <div className="w-1/2 flex justify-center items-center bg-cover bg-center rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Right Section - Details */}
        <div className="w-1/2 px-8">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-teal-400 text-2xl font-bold mb-6">{product.price}</p>

          {/* Product Description */}
          <div className="mb-6">
            <h3 className="text-gray-400 text-lg mb-2">PRODUCT DESCRIPTION</h3>
            <p className="text-gray-300 text-sm">This is a high-quality printed T-shirt.</p>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="text-gray-400 text-lg mb-2">SIZE</h3>
            <div className="flex space-x-3">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 rounded-full border border-gray-500 text-white font-semibold hover:bg-gray-700"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-gray-400 text-lg mb-2">QUANTITY</h3>
            <div className="flex items-center">
              <button className="w-10 h-10 rounded-full border border-gray-500 hover:bg-gray-700">
                -
              </button>
              <span className="mx-4 text-lg">0</span>
              <button className="w-10 h-10 rounded-full border border-gray-500 hover:bg-gray-700">
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-teal-500 text-black font-bold py-3 rounded-full hover:bg-teal-600 transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;