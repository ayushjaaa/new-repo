import { lazy, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import Nav from "./Commpontes/Nav/Nav";
import Section4 from './Commpontes/Section4/Section4'
import 'remixicon/fonts/remixicon.css';


import "./index.css";
import Button from "./Commpontes/Button.jsx/Button";
import Section2 from "./Commpontes/secotion2/Section2";
import Section3 from "./Commpontes/section/Section3";
import Section5 from "./Commpontes/Section5/Section5";
import Section6 from "./Commpontes/Section6/Section6";
// import ContactUs from "./Commpontes/Form/ContactUs";
export default function HeroSection() {
  const [open, setOpen] = useState(false);



  return (
    <div  className="overflow-x-hidden bg bg-[linear-gradient(10deg,rgba(249,249,249,1)_45%,rgba(190,228,205,1)_100%)] min-h-screen">

<Nav/>
<div className="h-fit  w-full   md:relative">
<div  className=" rotate-5  md:top-0 absolute hidden lg:block  lg:top-[36%] left-80"> <img className="w-fulll h-full object-contain" src="./Fonts/underline-swoshes.png" alt="" /></div>
  <div className=" px-20 py-8 w-full flex  flex-col-reverse lg:flex lg:flex-row lg:justify-between  ">
    <div className="relative reight  pt-20 w-full text-center md:text-center lg:text-start md:pt-20  lg:w-1/2 lg:pl-4  flex-col">
 <h1 className="text-2xl w-full text-text-primary pt-12 md:pr-0 md:text-3xl  lg:text-7xl  font-semibold lg:pt-0 ">The Best Choice for Online <span className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent  ">Credit Card</span> Payment</h1>
 

<div className="">
<p className="text-xl  leading-7 pt-[3vw] text-p-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar</p>


</div>

<div className="flex flex-col pt-8 gap-2 sm:justify-center items-center lg:flex lg:justify-start   lg:flex-row "> 
  <Button style={"primary"} image={"./Fonts/hand.png"}  buttonText={"Apply Credit Card"} />
  <Button style={"secondary"} icone1={<i class="ri-arrow-right-line"></i>}  buttonText={"Learn More"} />
</div>
<div className="w-full h-fit justify-center items-center md:gap-0  md:justify-center md:items-start   md:pl-2 pt-0 lg:pt-4 flex flex-col lg:justify-start  md:flex-row gap-10">
  <div className="flex flex-row pr-20 md:pt-0 relative bg-amber-500">
<div className="h-10 w-10 bg-amber-200 rounded-full absolute top-0 left-0 border-2 border-white"> 
  <img className="h-full w-full object-cover" src="" alt="" />
</div>
<div className="h-10 w-10 bg-amber-300 rounded-full absolute top-0 left-4 border-white"> 
<img className="h-full w-full object-cover" src="" alt="" />
</div>
<div className="h-10 w-10 bg-amber-400 rounded-full absolute top-0 left-10 border-white ">
<img className="h-full w-full object-cover" src="" alt="" /> </div>
</div>
  
  <div className="px-10  flex flex-col justify-center items-center">
<div className="flex flex-row">
<Star className="w-6 h-6 text-yellow-500 fill-amber-500" />
<Star className="w-6 h-6 text-yellow-500 fill-amber-500"  />
<Star className="w-6 h-6 text-yellow-500 fill-amber-500" />
<Star className="w-6 h-6 text-yellow-500 fill-amber-500" />
<Star className="w-6 h-6 text-yellow-500 fill-amber-500" />
</div>
    <h3 className=" text-p-light">Over <span className="text-black">2k+ </span>Active User’s</h3>
  </div>
  </div>
    </div>
    <div className="lg:left lg:w-1/2 lg:pl-36  ">
    <div className="w-[78vw] h-[80vw]  md:w-[90vw] lg:w-[37vw] lg:h-[30vw] ">
      <img src="../public/Fonts/gard.png" alt="dd" />
    </div>
    </div>
  
  </div>

</div>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
<div className="bg-white text-gray-800 font-sans min-h-screen">
      


      {/* 2. Hero Section: Direct & Bold */}
      <main className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
          Simplify Your Finances. <br className="hidden md:inline" />Find the Right Card for You.
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We help you navigate the world of credit cards to find the perfect match for your financial goals.
        </p>
        <a href="#benefits" className="mt-8 md:mt-12 inline-block bg-blue-600 text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
          Explore Benefits
        </a>
      </main>

      {/* 3. The Four Core Benefits: Asymmetrical Layout */}
      <section id="benefits" className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Our Core Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-blue-600 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">Rewards</h3>
              <p className="text-gray-600">Get good reward points on every purchase to use on flights, products, and more.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-green-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Cash Back</h3>
              <p className="text-gray-600">Earn a percentage of your spending back as cash, deposited directly into your account.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-yellow-600 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">Balance Transfer</h3>
              <p className="text-gray-600">Ideal for transferring balances with a low or 0% intro APR to consolidate debt.</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-purple-600 text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-2">Travel</h3>
              <p className="text-gray-600">Enjoy travel-specific offers, lounge access, and vouchers with your card.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Additional Advantages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            More Reasons to Choose CardDelta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">Zero Percent</h3>
              <p className="mt-2 text-gray-600">Best zero percent credit cards</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">Low Interest</h3>
              <p className="mt-2 text-gray-600">Low interest free card or apply</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">Secured Card</h3>
              <p className="mt-2 text-gray-600">Secured cards provide by Bank</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">Easy Apply</h3>
              <p className="mt-2 text-gray-600">Card Apply process is quite simple</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section id="apply" className="bg-blue-600 text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Your Card?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Start your application now and get approved in minutes.
          </p>
          <a href="#" className="bg-white text-blue-600 font-bold text-lg py-4 px-16 rounded-full shadow-lg hover:bg-gray-200 transition-colors transform hover:scale-105">
            Apply Now
          </a>
        </div>
      </section>


<div className="h-screen w-full">
<h2 className="text-button">ayush</h2>
{/* <ContactUs/> */}
</div>
    </div>
    </div>
  );
}
