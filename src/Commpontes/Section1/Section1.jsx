import React from 'react'
import Button from '../Button.jsx/Button'
import { Menu, X, Star } from "lucide-react";
const Section1 = () => {
  return (
  
      <div className="h-fit  w-full   md:relative">
<div  className=" rotate-5  md:top-0 absolute hidden lg:block  lg:top-[36%] left-80"> <img className="w-fulll h-full object-contain" src="./Fonts/underline-swoshes.png" alt="" /></div>
  <div className=" px-20 py-8 w-full flex  flex-col-reverse lg:flex lg:flex-row lg:justify-between  ">
    <div className="relative reight  pt-20 w-full text-center md:text-center lg:text-start md:pt-20  lg:w-1/2 lg:pl-4  flex-col">
 <h1 className="text-2xl w-full text-text-primary pt-12 md:pr-0 md:text-3xl  lg:text-7xl  font-semibold lg:pt-0 ">The Best Choice for Online <span className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent  ">Credit Card</span> Payment</h1>
 

<div className="">
<p className="text-xl  leading-7 pt-[3vw] text-p-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar</p>


</div>

<div className="flex flex-col pt-8 gap-2 sm:justify-center items-center lg:flex lg:justify-start   lg:flex-row "> 
  <Button style={"primary"} image={"../public/Images/hand.png"}  buttonText={"Apply Credit Card"} />
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
      <img src="../public/Images/gard.png" alt="dd" />
    </div>
    </div>
  
  </div>

</div>
 
  )
}

export default Section1
