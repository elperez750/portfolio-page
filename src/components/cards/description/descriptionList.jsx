import React from "react";
import DescriptionListCard from "./descriptionListCard";
import ui from "/images/description/ui.png";
import frontend from "/images/description/frontend.png";
import backend from "/images/description/backend.png";
import fullstack from "/images/description/fullstack.png";

function DescriptionList() {
  return (
    <div className="bg-gradient-to-l from-blue to-black w-full">
      <div className="flex-col tablet:flex tablet:flex-col laptop:flex laptop:flex-row  justify-center items-center text-center">
        <DescriptionListCard
          image={frontend}
          title="Frontend Wizard"
          description="With Knowledge of HTML, CSS, JavaScript, as well as React, I can design beautiful interfaces"
        />
        <DescriptionListCard
          image={backend}
          title="Backend Expert"
          description="My expertise in NodeJS and MongoDB will help facilitate the flow of data."
        />
        <DescriptionListCard
          image={fullstack}
          title="FullStack Guru"
          description="Combining my Frontend and Backend knowledge, I can build any fullstack application for your needs"
        />
        <DescriptionListCard
          image={ui}
          title="UI/UX Enthusiast"
          description="Creating user friendly and aesthetically pleasing interfaces is my number one goal."
        />
      </div>
    </div>
  );
}

export default DescriptionList;
