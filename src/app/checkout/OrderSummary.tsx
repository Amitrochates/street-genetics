import React from "react";
import { CartAction, Product } from "../interfaces";


interface OrderSummaryProps {
  cartItems: Product[];
  dispatch: React.Dispatch<CartAction>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems,dispatch }) => {
    return (
        <>
        <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
        <div className="space-y-8">
          {cartItems.map((item: Product) => (
            <div
              key={item.id}
              className="flex items-center bg-black border border-gray-700 rounded-xl p-6 shadow-lg"
            >
              <img
                src={item.thumb}
                alt={item.productName}
                className="w-32 h-32 object-cover rounded-md bg-[url('/assets/images/checkout_texture.png')]"
              />
              <div className="ml-8 flex-1">
                <h3 className="font-semibold text-2xl leading-tight">{item.productName}</h3>
                <p className="text-gray-400 text-sm mb-4">Size: {item.size}</p>
                <p className="text-2xl font-bold">₹{item.price}</p>
              </div>
              <div className="flex items-center space-x-8">
                {/* Size Dropdown */}
                <div>
                  <span className="block text-gray-400 text-sm mb-2">SIZE</span>
                  <select onChange={(e)=>{
                    dispatch({
                      type: "CHANGE_SIZE",
                      payload: {
                        id: item.productId,
                        size: e.target.value
                      }
                    })
                  }} value={item.size} className="bg-black text-white border border-gray-500 px-3 py-2 rounded w-28 text-lg">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                    <option value="3XL">3XL</option>
                  </select>
                </div>
                {/* Quantity Dropdown */}
                <div>
                  <span className="block text-gray-400 text-sm mb-2">QUANTITY</span>
                  <button onClick={()=>{
                    dispatch({
                      type: "DECREASE_QUANTITY",
                      payload: item.productId
                    });
                  }} className="w-10 h-10 rounded-full border border-gray-500 hover:bg-gray-700">
                      -
                  </button>
                  <span className="mx-4 text-lg">{item.quantity}</span>
                  <button onClick={()=>{
                    dispatch({
                      type: "INCREASE_QUANTITY",
                      payload: item.productId
                    });
                  }} className="w-10 h-10 rounded-full border border-gray-500 hover:bg-gray-700">
                      +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}
export default OrderSummary;