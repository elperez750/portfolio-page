import React from 'react'



export default function Button({ text, type = 'button', onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600 
        hover:bg-blue-700 
        text-white 
        font-futura_demi 
        text-lg 
        px-6 
        py-2 
        rounded-full 
        transition 
        duration-300 
        ease-in-out 
        transform 
        hover:scale-105 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:ring-opacity-50
        ${className}
      `}
    >
      {text}
    </button>
  )
}