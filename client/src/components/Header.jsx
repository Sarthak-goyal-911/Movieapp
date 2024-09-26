import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


const Header = () => {
  return (
    <div>
        <nav className='flex justify-around bg-indigo-600 items-center p-2'>
            <div>
               <h1 className='text-white text-3xl'>Hi! </h1>
            </div>
           <div>
            <h1 className='text-white text-3xl'>Dashboard</h1>
           </div>
           <div>
            <img src="" alt="" />
            <button className='text-white text-3xl'><CiLogout />
            </button>
           </div>
        </nav>
    </div>
  )
}

export default Header