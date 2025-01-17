import type { Metadata } from "next";
import { Geist, Geist_Mono, Belleza } from "next/font/google";
import {CartProvider} from "./context/CartContext"
import "./globals.css";
import ToastProvider from "./components/ToastProvider"
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${belleza.variable}`}>
      <body
        className={`antialiased`}
      >
        <CartProvider >
          <ToastProvider />
           {/* <Sidebar isOpen={false} onClose={}/> */}
           <Navbar/>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
