import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button";
import SocialList from "../cards/social-media/socialList";
import DescriptionList from "../cards/description/descriptionList";

function Home({ homeRef }) {
  return (
    <section
      ref={homeRef}
      id="home"
      className="flex flex-col justify-start"
    >
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/css_background.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl"
            >
              <img
                src="/images/self_portrait.jpg"
                alt="Elliott"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h2 className="text-blue-300 text-xl md:text-2xl lg:text-3xl font-futura mb-2">
              Hi, my name is
            </h2>
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-futura_medium mb-2">
              Elliott
            </h1>
            <h3 className="text-blue-100 text-2xl md:text-3xl lg:text-4xl font-futura_demi mb-6">
              Aspiring Software Developer
            </h3>
            <div className="flex flex-col items-center gap-4">
              <a href="#contact">
                <Button text="Contact Me" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105" />
              </a>
              <SocialList />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full bg-gradient-to-b from-gray-900 to-black py-16"
      >
        <DescriptionList />
      </motion.div>
    </section>
  );
}

export default Home;