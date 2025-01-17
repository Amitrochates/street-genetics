export interface Product {
    id: string;
    productName: string;
    productId: string;
    quantity: number;
    size: string;
    price: BigInteger;
    styleGuide: {
        images: Array<string>;
    }
    productDesc: string;
    thumb: string;
}


export interface CartState {
    items: Product[];
    subTotal: number;
    details: Details
}
export interface Details{
    contact: string;
    email: string;
    name: string;
    address: {
      location: string;
      city: string;
      state: string;
      pincode: string;
    };
}

export interface RazorpayPaymentDetails {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }

  export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Omit<Product, 'id'> }
  | { type: 'ADD_DETAILS'; payload: Details}
  | { type: 'REMOVE_FROM_CART'; payload: string } // payload is the `id`
  | { type: 'DECREASE_QUANTITY'; payload: string } // payload is the `id`
  | { type: 'INCREASE_QUANTITY'; payload: string} // payload is the `id`
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState }
  | { type: 'CHANGE_SIZE'; payload: { id: string; size: string } }
  | { type: 'EVALUATE_TOTAL' };