import React from 'react'

function SkillsCard({ img, skill }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-full h-full min-h-[200px]">
      <div className="relative w-20 h-20 mb-4">
        <img 
          src={img} 
          alt={skill} 
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-center font-futura_bold text-lg sm:text-xl lg:text-2xl text-blue-300">
        {skill}
      </h3>
    </div>
  )
}

export default SkillsCard