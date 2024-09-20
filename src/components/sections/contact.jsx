import React, { useState } from "react";
import Header from "../ui/header";
import Button from "../ui/button";
import { useForm, ValidationError } from '@formspree/react';
import Thanks from "../ui/thanks";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mzbnernp");
  
  if (state.succeeded) {
    return <Thanks />;
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Header text="Contact Me" className="text-blue-300 mb-12 text-left text-4xl lg:text-5xl" />

        <form
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-8 font-futura_demi"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-blue-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-700 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-300 ease-in-out hover:bg-gray-600"
                onChange={handleChange}
                value={formData.name}
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-blue-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                onChange={handleChange}
                value={formData.email}
                className="bg-gray-700 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-300 ease-in-out hover:bg-gray-600"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-blue-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="bg-gray-700 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition duration-300 ease-in-out hover:bg-gray-600"
              placeholder="Your message"
              onChange={handleChange}
              value={formData.message}
              required
            />
          </div>

          <div className="text-right">
            <Button 
              text="Send Message" 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;