import React from "react";

function DescriptionListCard( {image, title, description }) {
  return (
    <>
     <div className="my-10 flex flex-col items-center"> {/* Flex column container */}
      {/* Overlapping Squares */}
      <div className="flex -space-x-12 -space-y-3">
        <div className="flex flex-col bg-red z-10 h-16 w-16 rounded-md justify-center items-center">
          <img src={image} className="h-14 w-14" alt="Description" />
        </div>
        <div className="bg-light_blue z-0 h-16 w-16 rounded-md"></div>
      </div>

      {/* Text */}
      <div className="mt-2 text-center text-gray font-futura_bold text-2xl"> 
        <h1>{title}</h1>
        
      </div>
      <p className="text-dark_gray font-futura text-wrap align-middle m-5">{description}</p>
    </div>
    
    </>
  );
}

export default DescriptionListCard;
