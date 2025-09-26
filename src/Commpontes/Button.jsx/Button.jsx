import React from 'react'

const Button = (props) => {
const ButtonText = props.buttonText
const image = props.image
console.log("image",image)
const icone1 = props.icone1
// console.log(icone1)
const style = props.style
const Styles = {
    primary:"bg-button text-white",

secondary:"bg-transparent text-text-primary  flex flex-row-reverse"

// tertiary

// fourth
}
  return (
    <div>
   
     <button className={`hover:scale-105 w-fit flex gap-[8px] items-center justify-between lg:px-8  py-4  ${Styles[style]} px-6  rounded-full  hover:bg-[#195E54] transition`}>
{image ? <div className='h-8 w-8'>  
  <img className='h-full w-full object-cover' src={image} alt="" /></div> : <div className='flex tedt-white'>{icone1 ? icone1 :null}</div> }
<h3 className='text-xl'> {ButtonText}</h3>

      </button>

    </div>
  )
}

export default Button
