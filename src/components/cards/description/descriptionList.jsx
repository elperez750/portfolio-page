import React from "react";
import DescriptionListCard from "./descriptionListCard";
import ui from "/images/description/ui.png";
import frontend from "/images/description/frontend.png";
import backend from "/images/description/backend.png";
import fullstack from "/images/description/fullstack.png";

function DescriptionList() {
  const descriptions = [
    {
      image: frontend,
      title: "Frontend Wizard",
      description: "With knowledge of HTML, CSS, JavaScript, and React, I can design beautiful interfaces",
      icon: "🎨"
    },
    {
      image: backend,
      title: "Backend Expert",
      description: "My expertise in NodeJS and MongoDB will help facilitate the flow of data.",
      icon: "🔧"
    },
    {
      image: fullstack,
      title: "FullStack Guru",
      description: "Combining my Frontend and Backend knowledge, I can build any application",
      icon: "🚀"
    },
    {
      image: ui,
      title: "UI/UX Enthusiast",
      description: "Creating user-friendly and aesthetically pleasing interfaces is my number one goal.",
      icon: "🎭"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-12">My Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {descriptions.map((item, index) => (
          <DescriptionListCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default DescriptionList;