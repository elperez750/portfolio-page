import React from 'react'
import SocialCards from './socialCards'

import linkedin from "/images/linkedin.png"
import github from "/images/github.png"
import instagram from "/images/instagram.png"

function SocialList() {
  return (
    <div>
      <SocialCards image={linkedin}/>
      <SocialCards image={instagram}/>
      <SocialCards image={github}/>

    </div>
  )
}

export default SocialList