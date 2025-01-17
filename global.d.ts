// global.d.ts
export {};

declare global {
  interface Window {
    Razorpay: any; // Replace `any` with the appropriate type if available
  }
}
