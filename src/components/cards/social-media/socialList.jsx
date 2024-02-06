import React from 'react'
import SocialCards from './socialCards'

import linkedin from "/images/socials/linkedin.png"
import github from "/images/socials/github.png"
import instagram from "/images/socials/instagram.png"

function SocialList() {
  return (
    <div>
      <SocialCards image={linkedin} href= "https://www.linkedin.com/in/elliott-perez-32782a1a4/"/>
      <SocialCards image={instagram} href= "https://www.instagram.com/elperez750/?next=%2F"/>
      <SocialCards image={github} href="https://github.com/elperez750"/>

    </div>
  )
}

export default SocialList