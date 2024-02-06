import React from 'react'

function Button({text}) {
  return (
  
      <button type="submit" className='bg-red px-2 py-2 tablet:px-10 tablet:py-2 laptop:px-10 laptop:py-2 rounded-sm font-futura_demi text-lg text-white'>{text} </button>
  
  )
}

export default Button
