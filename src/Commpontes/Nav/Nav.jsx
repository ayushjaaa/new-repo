import React from 'react'
import { Menu, X, Star } from "lucide-react";
import Button from '../Button.jsx/Button';
const Nav = () => {

    const navarray = [
        {lable:"Home"},
        {lable:"About Us"},
        {lable:"Features"},
        {lable:"Blog"},
        {lable:"Contact Us"}
      ]
    
  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-6 relative">
     
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
        <span className="text-white font-bold">C</span>
      </div>
      <h1 className=" text-2xl font-bold text-gray-800">Credigi</h1>
    </div>

 
    <div className="w-1/2  flex gap-8 justify-end items-center">
      <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium">
     {
      navarray.map((elen)=>{
        return(
        <div>
             <a className="text-text-primary hover:text-[#1C756B]" href="#">{elen.lable}</a>
        </div>
        )
      })
     }
 
      
      </nav>
      <Button style={"primary"} buttonText = {"Get Started"}/>


    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden text-gray-700 focus:outline-none"
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>

   
  </header>

  )
}

export default Nav
