import React from 'react'

function ProjectSkillsCard({img, skill, fontColor}) {
    return (
        <div className="flex flex-col border border-gray rounded-lg justify-center items-center shadow hover:shadow-2xl cursor-pointer w-18 h-18 desktop:w-20 desktop:h-20" >
            <img src={img} alt={skill} className="w-6 h-6 tablet:w-10 tablet:h-auto desktop:w-10 desktop:h-auto" />
    
            <h3 className="text-gray font-futura_medium text-base desktop:text-base" style={{ color: fontColor }} >{skill}</h3>
        </div>
      )
}

export default ProjectSkillsCard