import React from "react";

function DescriptionListCard({ image, title, description, icon }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-blue-300 mb-2 text-center">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
      <div className="bg-gray-700 p-4">
        <img src={image} alt={title} className="w-12 h-12 mx-auto object-contain" />
      </div>
    </div>
  );
}

export default DescriptionListCard;