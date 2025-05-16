import React from 'react'
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className='flex flex-col-reverse justify-between items-center bg-black text-white h-[10%] w-full p-4 navbar-icons'>
      <div className='mr-auto'>maestro</div>
      <div className='flex flex-row space-x-6 ml-auto'>
        <GiNetworkBars />
        <IoWifi />
        <BsBattery />
      </div>
    </div>
  )
}

export default Navbar