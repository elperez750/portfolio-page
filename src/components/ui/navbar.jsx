import React from 'react'

function Navbar() {
  return (
    <div className='bg-black w-full flex h-20 items-center justify-center'>
        <ul className="flex space-x-48 text-3xl font-futura cursor-pointer ">
            <li className='text-red ml-96'>Home</li>
            <li className='text-gray'>About</li>
            <li className='text-gray'>Projects</li>
            <li className='text-gray'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
