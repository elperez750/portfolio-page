import React from 'react'

function SkillsCard({img, skill, imgWidth, imgHeight, cardWidth, cardHeight, fontSize, fontColor}){
  return (
    <div className="flex flex-col border border-gray rounded-lg justify-center items-center shadow hover:shadow-2xl cursor-pointer" style={{ width: cardWidth, height: cardHeight}}>
        <img src={img} alt={skill} width={imgWidth} height={imgHeight} />

        <h3 className="text-gray font-futura_bold" style={{ fontSize: fontSize, color: fontColor }} >{skill}</h3>
    </div>
  )
}

export default SkillsCard