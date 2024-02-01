import React from 'react'

function SkillsCard({img, skill, fontColor}){
  return (
    <div className="flex flex-col border border-gray rounded-lg justify-center items-center shadow hover:shadow-2xl cursor-pointer w-28 h-28 desktop:w-48 desktop:h-48" >
        <img src={img} alt={skill} className="w-12 h-12 tablet:w-18 tablet:h-auto desktop:w-32 desktop:h-auto" />

        <h3 className="text-gray font-futura_bold text-xl desktop:text-3xl" style={{ color: fontColor }} >{skill}</h3>
    </div>
  )
}

export default SkillsCard