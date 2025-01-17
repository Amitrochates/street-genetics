
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
 import SparkAnimation from "./components/SparkAnimation";
import { Carasoul } from './components/Carasoul';
import { AsliCarasoul } from './components/AsliCarasoul';
import FinalSVG from '../../public/assets/images/About-after.svg';
import { AboutHeader } from './components/AboutHeader';
import { CoolBoy } from './components/CoolBoy';
export default function Home() {
  return (
    <div className='bg-black'>
      {/* <Sidebar /> */}
      {/* <CheckoutPage /> */}
      <Navbar/>
      <HeroSection/>
      <SparkAnimation/>
      <Carasoul/>
      
    <AboutHeader svgPath={FinalSVG}/>  
    <CoolBoy/>
      <AsliCarasoul/> 
      {/*<Footer /> */}
      
    </div>
  );
}