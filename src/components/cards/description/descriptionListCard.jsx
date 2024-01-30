import React from "react";

function DescriptionListCard( {image, title, description }) {
  return (
    <>
   
     <div className="flex flex-col items-center "> 
      <div className="flex m-12 -space-x-12 -space-y-3">
        <div className="flex bg-red z-10 h-16 w-16 rounded-md justify-center items-center">
          <img src={image} className="h-14 w-14" alt="Description" />
        </div>
        <div className="bg-light_blue z-0 h-16 w-16 rounded-md"></div>
      </div>

      <div className="mt-2 text-center text-gray font-futura_bold "> 
        <h1 className="text-2xl">{title}</h1>
        <p className="text-dark_gray font-futura m-5 text-lg">{description}</p>

      </div>
    </div>
   
    </>
  );
}

export default DescriptionListCard;
