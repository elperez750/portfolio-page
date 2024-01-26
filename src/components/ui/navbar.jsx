import React from 'react'

function Navbar() {
  return (
    <div className='bg-black w-full flex h-20 items-center justify-center fixed top-0 z-50 shadow'>
        <ul className="flex space-x-48 text-3xl font-futura_bold cursor-pointer ">
            <li className='text-red ml-96'><a href="#">Home</a></li>
            <li className='text-gray'><a href="#about">About</a></li>
            <li className='text-gray'><a href="#projects">Projects</a></li>
            <li className='text-gray'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
