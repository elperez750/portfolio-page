import React from 'react'
import SocialCards from './socialCards'

import linkedin from "/images/socials/linkedin.png"
import github from "/images/socials/github.png"
import instagram from "/images/socials/instagram.png"

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