import React from 'react'

function SocialCards( {image} ) {
  return (
    <button className='flex-col mr-5 rounded-sm w-10 h-10 justify-center items-center'>
       <img src={image} />  
    </button>
  )
}

export default SocialCards