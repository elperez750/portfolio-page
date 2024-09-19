import React from 'react'

function ProjectSkillsCard({img, skill}) {
    return (
        <div className="flex items-center space-x-2 bg-gray-700 rounded-full py-1 px-3 transition-all duration-300 hover:bg-gray-600">
            <img src={img} alt={skill} className="w-4 h-4 object-contain" />
            <span className="text-xs font-medium text-blue-300">{skill}</span>
        </div>
    )
}

export default ProjectSkillsCard