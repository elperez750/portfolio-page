import React from 'react'
import Check from "../../../public/images/check.png"

function Thanks() {
  return (
    <>
    <div className=" bg-gradient-to-r from-black to-blue h-full pt-36 pb-28">
       <div className="flex flex-col justify-center items-center ">
        <img src={Check} alt="check" className="w-28 h-28 "/>
        <h1 className="text-gray mt-10 text-5xl tablet:text-7xl font-futura_bold">Thank you!</h1>
        <h2 className="text-gray mt-10 text-xl tablet:text-3xl desktop:text-5xl font_futura_demi">Your form was submitted succesfully.</h2>
        <h4 className="text-dark_gray mt-10 text-xl font-futura_light mb-10">You will be contacted in 1-2 days</h4>
        </div>
    </div>
    </>
  )
}

export default Thanks