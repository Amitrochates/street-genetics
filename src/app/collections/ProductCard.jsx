import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div
      className="relative w-[360px] h-[455px] rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/checkout_texture.png')", // Back texture
      }}
    >
      <div
        className="w-full h-[80%] bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${image})`, // Main Product Image
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black bg-opacity-90 p-4">
        <h3 className="font-semibold text-lg leading-tight">{name}</h3>
        <p className="text-teal-400 font-bold text-md">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;