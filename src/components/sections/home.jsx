import React from "react";
import cssBackground from "/images/css_background.jpeg";
import selfPortrait from "/images/self_portrait.jpg";
import Button from "../ui/button";
import SocialList from "../cards/social-media/socialList";
import DescriptionList from "../cards/description/descriptionList";

function Home() {
  return (
    <>
      <div>
        <div
          id="home"
          className="relative flex justify-center items-center bg-cover w-full h-[37rem] bg-black"
        >
          <div className="absolute inset-0">
            <img
              src={cssBackground}
              className="w-full h-full object-cover filter blur-sm"
              alt="Background"
            />
          </div>

          <div className="relative flex">
            <img
              className="rounded-full h-96 w-96  md:h-96 md:w-96 mr-10"
              src={selfPortrait}
              alt="Self Portrait"
            />
          </div>

          <div className="relative flex-col text-white text-5xl space-y-4">
            <h1 className="font-futura text-dark_gray">Hi, my name is</h1>
            <h1 className="text-red font-futura_medium">Elliott</h1>
            
              <h1 className="font-futura_demi">Aspiring Software Developer</h1>
            
            

            <Button text="Contact Me" />
            <SocialList />
          </div>
        </div>
        <div className="bg-gradient-to-l from-blue to-black">
          <DescriptionList />
        </div>
      </div>
    </>
  );
}

export default Home;
