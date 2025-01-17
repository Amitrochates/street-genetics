"use client";
import React, { useState, useEffect } from "react";
import PaymentForm from "./PaymentForm"; // Import your PaymentForm component
import OrderSummary from "./OrderSummary";
import AddressForm from "./AddressForm"
import { useCart } from "../context/CartContext";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { RazorpayPaymentDetails } from "../interfaces";
import axios from "axios";
import config from "../../../config";
const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const router = useRouter();
  const [formStage, setFormStage] = useState(0);
  const [details, setDetails] = useState(cart.details);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const url = config.apiUrl;
  const handlePayment = async () => {
   const response = await axios.post(`${url}/cart/create-order`, {
      cart: cart
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const order = response.data;
    console.log(order);
    if (!window.Razorpay) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_4Gj17Eyed2OzN8',
      amount: order.amount,
      currency: 'INR',
      name: 'Street Genetics',
      description: 'Test Transaction',
      order_id: order.razorpayOrderId, // Order ID generated from Razorpay backend
      handler: async(response: RazorpayPaymentDetails)=> {
        console.log('Payment handler response:', response);
        const verifyResponse = await axios.post(`${url}/cart/verify-payment`, {
          razorpay_payment_id: response.razorpay_payment_id,
          order_id: order.razorpayOrderId, // Send the correct order ID
          razorpay_signature: response.razorpay_signature,
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        

        const verifyData = await verifyResponse.data;

        if (verifyResponse.status === 200) {
          toast.success('Payment Successful! 🎉');
          dispatch({type: 'CLEAR_CART'})
        } else {
          toast.error(`Payment Verification Failed: ${verifyData.message}`);
        }
        router.push('/');
        
        // Optional: Add logic to verify payment on your backend here
      },
      prefill: {
        name: details.name,
        email: details.email,
        contact: details.contact,
      },
      notes: {
        address: details.address
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-black text-white px-12 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold tracking-wide">Street Genetics</h1>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center">
          <div className={`cursor-pointer font-bold text-lg mr-2  ${formStage === 0 ? "text-teal-400" : "text-gray-500"}`} onClick={() => { if (formStage > 0) setFormStage(0) }}>
            CART
          </div>
          <div className=" w-32 h-[2px] bg-gray-500"></div>
          <div onClick={() => { if (formStage > 1) { setFormStage(1) } }} className={`cursor-pointer font-bold text-lg mx-2 ${formStage === 1 ? "text-teal-400" : "text-gray-500"}`}>
            ADDRESS
          </div>
          <div className="w-32 h-[2px] bg-gray-500"></div>
          <div className={`cursor-pointer font-bold text-lg text-${formStage === 2 ? "teal-400" : "gray-500"}`}>PAYMENT</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {formStage === 0 ? <OrderSummary dispatch={dispatch} cartItems={cart.items} /> : formStage === 1 ? (
            <AddressForm details={details} setDetails={setDetails} />
          ) : (
            <>
              {/* Payment Form Component */}
              <PaymentForm handlePayment={handlePayment} />
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="bg-black border border-gray-700 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Price Details</h2>
          <div className="space-y-6 text-lg">
            <div className="flex justify-between text-gray-400">
              <span>Total MRP</span>
              <span>{cart.subTotal + 101}</span>
            </div>
            <div className="flex justify-between text-green-400">
              <span>Discount on MRP</span>
              <span>-100</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Coupon Discount</span>
              <span>-₹100</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span>₹99</span>
            </div>
            <hr className="border-gray-700" />
            <div className="flex justify-between text-white text-2xl font-bold">
              <span>Order Total</span>
              <span>₹{cart.subTotal}</span>
            </div>
          </div>
          {(formStage !== 2) && <button
            onClick={() => {
              if (formStage === 1) {
                console.log(details);
                dispatch({
                  type: "ADD_DETAILS",
                  payload: details
                })
              }
              setFormStage((formStage + 1) % 3);
            }}
            className="mt-8 w-full bg-teal-500 text-black font-semibold py-4 rounded-full hover:bg-teal-600 transition text-lg"
          >
            {formStage === 0 ? "PROCEED TO CHECKOUT" : (formStage === 1) ? "PROCEED TO PAYMENT" : "PAY"}
          </button>}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;