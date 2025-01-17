'use client'
import { details } from 'framer-motion/client';
import { createContext, useContext, useEffect, useReducer } from 'react';

// Initial cart state


const initialCartState = {
  items: [],
  subTotal: 0,
  details: {
      contact: "",
      email: "",
      name: "",
      address: {
        location: "",
        city: "",
        state: "",
        pincode: ""
      },
    }// Array of items in the cart
};

// Reducer to handle cart actions
function cartReducer(state, action) {
    console.log(action.payload);
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, {...action.payload,id: Date.now()}] };
    case 'ADD_DETAILS':
        return { ...state, details: action.payload };
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
            item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0), // Remove items with quantity 0
        };
    case 'INCREASE_QUANTITY':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'LOAD_CART':
      return action.payload;
    case 'CHANGE_SIZE':
        return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, size: action.payload.size }
                : item
            ),
          };
    case 'EVALUATE_TOTAL':
          return {
            ...state,
            subTotal: state.items.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )
          }
    default:
      return state;
  }
}

// Create Context
const CartContext = createContext();

// Custom Hook to use Cart Context
export const useCart = () => useContext(CartContext);

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  // Load cart from localStorage on app load
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
    }
  }, []);


  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
  useEffect(()=>{
    dispatch({type: 'EVALUATE_TOTAL'});
  },[cart.items])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
