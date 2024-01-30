import React from "react";
import cssBackground from "/images/css_background.jpeg";
import selfPortrait from "/images/self_portrait.jpg";
import Button from "../ui/button";
import SocialList from "../cards/social-media/socialList";
import DescriptionList from "../cards/description/descriptionList";

function Home() {
  return (
    <>
      <div
        id="home"
        className="relative flex flex-col justify-center items-center tablet:flex-row bg-black w-full h-[37rem] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${cssBackground})`,
            backgroundSize: 'cover',
            filter: 'blur(10px)' 
          }}
        ></div>

        <div className="relative z-10 flex flex-col tablet:flex-row items-center">
          <img
            className="rounded-full hidden mr-10 h-40 w-40 tablet:h-72 tablet:block tablet:w-72 laptop:w-96 laptop:h-96 laptop:block desktop:block"
            src={selfPortrait}
            alt="Self Portrait"
          />
          <div className="text-white text-xl text-center tablet:text-2xl tablet:text-left laptop:text-4xl desktop:text-7xl space-y-4">
            <h1 className="font-futura text-dark_gray">Hi, my name is</h1>
            <h1 className="text-red font-futura_medium">Elliott</h1>
            <h1 className="font-futura_demi">Aspiring Software Developer</h1>
            <Button text="Contact Me" />
            <SocialList />
          </div>
        </div>
      </div>
      
        <DescriptionList />
     
    </>
  );
}

export default Home;
