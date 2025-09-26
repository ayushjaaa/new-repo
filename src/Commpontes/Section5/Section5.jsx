import React from 'react'
import './Section5.css'
import { Check } from 'lucide-react';
import { X } from "lucide-react";

const Section5 = () => {

    const plans = [
        {
            name:"Silver",
          rewords: "Silver",
          price: "₹1,000",
          period: "Yearly Membership Fee",
          popular: false,
          features: [
            "Earn 4 reward points on ₹150",
            "5% cashback on travel and shopping"
          ],
          notIncluded: [
            "Fuel surcharge waiver",
            "Smart EMI",
            "Welcome benefits"
          ]
        },
     
        {name:"Gold",
            rewords: "Fuel Points Plan",
          price: "₹500+",
          period: "Joining/Renewal Fee",
          popular: false,
          features: [
            "Earn up to 50 Litres of Free Fuel annually",
            "Smart EMI",
            "Fuel Surcharge Waiver"
          ],
          notIncluded: [
            "2X Reward Points on shopping",
            "Cashback on online purchases"
          ]
        },
        {name:"Platinum",
            rewords: "Cashback Plan",
          price: "₹500+",
          period: "Joining/Renewal Fee",
          popular: false,
          features: [
            "5% Cashback on Amazon, Flipkart, Flight ",
            "Smart EMI",
            "Fuel Surcharge Waiver"
          ],
          notIncluded: [
            "Free fuel",
            "2X Reward Points"
          ]
        },
        {name:"Platinum",
            rewords: "Cashback Plan",
          price: "₹500+",
          period: "Joining/Renewal Fee",
          popular: false,
          features: [
            "5% Cashback on Amazon, Flipkart, Flight ",
            "Smart EMI",
            "Fuel Surcharge Waiver"
          ],
          notIncluded: [
            "Free fuel",
            "2X Reward Points"
          ]
        }
      ];
      
  return (
    <div className='container mx-auto text-center  p-1 flex flex-col'>
        <div className='p-1 right md:p-20'>
            <h1 className='w-full text-5xl font-bold'>The Credit Card Option</h1>
            <p className='p-4 px-0 md:px-32 text-xl leading-5 text-[#64758B]'>Select the perfect credit card that matches your lifestyle and spending habits  </p>
        </div>
      <div className='w-full h-fit   grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4  '>
        {
            plans.map((elem)=>{

return(
                    <div className='w-full h-fit bg-[#FFFFFF]  p-10 px-6 rounded-2xl  border-1 border-t-[#E5E7E8]   border-x-[#0f101145] shadow-premium  border-b-[#9D9FA6] '>
<h3 className='text-5xl font-semibold w-full leading-tight  text-[#171B26] lg:text-2xl'>{elem.name}</h3>
<h2 className='text-4xl font-bold text-[#3C84F6] pt-1 ' >₹2,500</h2>
<h4 className=' text-[#64758B]'>Annual Fee</h4>
<div className='text-center mt-4'>
<p className='leading-8 text-[#171B26] text-sm flex items-center gap-4'>  <Check className='text-blue-500 h-5 w-5 '/> {elem.rewords}</p>
{elem.features.map((fetureleme)=>{
    return(
<p className='leading-7 text-[#171B26] text-start text-sm flex justify-start gap-4'>  <Check className='text-blue-500 h-5 w-5 mt-2'/> {fetureleme}</p>   
    )
})}
{
    elem.notIncluded.map((notincludelem)=>{
        return(
            <p className='leading-8 text-[#B2B9C5] text-sm flex text-start  gap-4'>  <X className='text-blue-500 h-5 w-5 mt-2'/> {notincludelem}</p>   
        )
    })
}




</div>
<div className='pt-4'>
    <button className='border-1  w-full py-3 border-[#E2E8F0]'>Select Plan</button>
</div>

</div>
)
            })
        }
      </div>
    </div>
  )
}

export default Section5
