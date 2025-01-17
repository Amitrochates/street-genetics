"use client";
import React from "react";

const PaymentForm = ({ handlePayment }: { handlePayment: () => void }) => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
                <div className="lg:col-span-2">
                    <h2 className="text-lg font-bold mb-4">PAYMENT</h2>
                    <div className="space-y-6">
                        {/* Razorpay Secure */}
                        <div className="border border-gray-700 rounded-lg p-4 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-white">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="mr-2 accent-teal-400"
                                        defaultChecked
                                    />
                                    <span className="text-teal-400">Razorpay Secure</span>
                                    <span className="text-gray-400 text-sm ml-2">
                                        (UPI, Cards, Wallets, Netbanking)
                                    </span>
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                After clicking <span className="font-semibold">“Pay Now”</span>,
                                you will be redirected to Razorpay Secure to complete your
                                purchase securely.
                            </p>
                        </div>

                        {/* Cash on Delivery */}
                        <div className="border border-gray-700 rounded-lg p-4 cursor-pointer">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="mr-2 accent-teal-400"
                                />
                                <span className="text-white font-semibold">Cash on Delivery</span>
                                <span className="text-gray-400 ml-2">(COD)</span>
                            </div>
                        </div>

                        {/* Pay Now Button */}
                        <button onClick={()=>{
                            handlePayment();
                        }} className="w-full bg-teal-500 text-black font-bold py-3 rounded-full hover:bg-teal-600 transition">
                            PAY NOW
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default PaymentForm;