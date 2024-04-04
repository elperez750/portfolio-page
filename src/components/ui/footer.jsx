import React from "react";
import SocialList from "../cards/social-media/socialList";
import githubFooter from "../../../public/images/socials/github_footer.png";
import instagramFooter from "../../../public/images/socials/instagram_footer.png";
import linkedinFooter from "../../../public/images/socials/linkedin_footer.png";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-dark_gray h-full">
      <h1 className="text-center font-futura_bold mb-10 text-5xl pt-10 text-gray">
        Elliott
      </h1>
      <div className="flex gap-4 pb-10">
        <a href="https://github.com/dashboard" target="_blank" rel="noreferrer">
          <img src={githubFooter} alt="github footer" className="h-11 w-11" />
        </a>
        <a
          href="https://www.instagram.com/elperez750/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramFooter}
            alt="instagram footer"
            className="h-10 w-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/elliott-perez-32782a1a4/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinFooter}
            alt="linkedin footer"
            className="h-10 w-10"
          />
        </a>
      </div>
      <h3 className="font-futura pb-10 text-gray text-xl">
        ©2024 copyright all right reserved
      </h3>
    </div>
  );
}

export default Footer;
