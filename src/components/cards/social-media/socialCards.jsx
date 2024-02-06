import React from 'react'

function SocialCards( {image, href} ) {
  return (
    <a href={href} target='_blank' rel="noopener noreferrer">
    <button className='flex-row mr-5 justify-center items-center w-8 h-8 rounded-sm tablet:w-16 tablet:h-16 laptop:w-16 laptop:h-16'>
       <img src={image} />  
    </button>
    </a>
  )
}

export default SocialCards