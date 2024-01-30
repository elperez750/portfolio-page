import React from 'react'

function SocialCards( {image} ) {
  return (
    <button className='flex-row mr-5 justify-center items-center w-8 h-8 rounded-sm tablet:w-16 tablet:h-16 laptop:w-16 laptop:h-16'>
       <img src={image} />  
    </button>
  )
}

export default SocialCards