"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { Product } from "../interfaces";
import axios from "axios";
import config from "../../../config";


const CollectionPage = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Add Type
    const [selectedSize, setSelectedSize] = useState("M");
    const { cart, dispatch } = useCart();
    const [products, setProducts] = useState<Product[]>([]); 
    const handleAddToCart = () => {
        console.log("hello")
        if(selectedProduct){
            selectedProduct.size = selectedSize;
        }
        dispatch({
            type: 'ADD_TO_CART',
            payload: selectedProduct,
        });
        console.log(cart);
        closeModal();
    };
    const url = config.apiUrl
    const getCollections = async () => {
        const res = await axios.get(`${url}/products/all`);
        const data = res.data;
        console.log(data);
        setProducts(data);
    }



    useEffect(() => {
        getCollections();
    }, [])
    
    // Close modal function
    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center text-white px-8 py-8"
            style={{
                backgroundImage: "url('/assets/images/collection-bg.png')", // Background image for the page
            }}
        >
            <div className="mx-auto" style={{ maxWidth: "1128px" }}>
                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-x-6 gap-y-8">
                    {products.map((product) => (
                        <div key={product.id} onClick={() => setSelectedProduct({ ...product, quantity: 1 })}>
                            <ProductCard
                                image={product ? product.thumb : ""}
                                name={product.productName}
                                price={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
                    onClick={closeModal} // Close modal when clicking outside
                >
                    {/* Stop Click Propagation to Prevent Closing Modal */}
                    <div
                        className="bg-black text-white rounded-lg shadow-lg p-8 max-w-5xl w-full flex relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400"
                        >
                            &times;
                        </button>

                        {/* Left Section - Image */}
                        <div className="w-1/2 flex justify-center items-center">
                            <img
                                src={selectedProduct.thumb}
                                alt={selectedProduct.productName}
                                className="rounded-lg shadow-md w-full object-cover"
                            />
                        </div>

                        {/* Right Section - Product Details */}
                        <div className="w-1/2 px-8">
                            <h2 className="text-3xl font-bold mb-4">{selectedProduct.productName}</h2>
                            <p className="text-teal-400 text-2xl font-bold mb-6">
                                {selectedProduct.price}
                            </p>

                            {/* Product Description */}
                            <div className="mb-6">
                                <h3 className="text-gray-400 text-lg mb-2">PRODUCT DESCRIPTION</h3>
                                <p className="text-gray-300 text-sm">{selectedProduct.productDesc}</p>
                            </div>

                            {/* Size Selector */}
                            <div className="mb-6">
                                <h3 className="text-gray-400 text-lg mb-2">SIZE</h3>
                                <div className="flex space-x-3">
                                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                setSelectedSize(size);
                                            }}
                                            className={`w-10 h-10 rounded-full border border-gray-500 text-white font-semibold hover:bg-gray-700 ${selectedSize === size ? "bg-gray-700" : ""
                                                }`}
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
                                    <button onClick={() => { setSelectedProduct(() => ({ ...selectedProduct, quantity: selectedProduct.quantity - 1 })) }} className="w-10 h-10 rounded-full border border-gray-500 hover:bg-gray-700">
                                        -
                                    </button>
                                    <span className="mx-4 text-lg">{String(selectedProduct.quantity ? selectedProduct.quantity : 0)}</span>
                                    <button onClick={() => { setSelectedProduct(() => ({ ...selectedProduct, quantity: selectedProduct.quantity + 1 })) }} className="w-10 h-10 rounded-full border border-gray-500 hover:bg-gray-700">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button onClick={handleAddToCart} className="w-full bg-teal-500 text-black font-bold py-3 rounded-full hover:bg-teal-600 transition">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollectionPage;