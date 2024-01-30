import { React, useState } from "react";
import Header from "../ui/header";
import Button from "../ui/button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
   setFormData({...formData, [e.target.name]: e.target.value});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };


  return (
    <div
      id="contact"
      className="flex flex-col bg-gradient-to-r from-black to-blue h-screen pt-20 justify-center "
    >
      <div className="flex justify-center">
        <Header text={"Contact Me"} />
      </div>

      <form
        className="flex flex-col mt-28 justify-center items-center gap-3 font-futura_demi"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 w-1/2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray text-blue text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
            onChange={handleChange}
            value={formData.name}
            placeholder="Type your name here."
            required
          />
        </div>

        <div className="mb-5 w-1/2">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type your email here."
            onChange={handleChange}
            value={formData.email}

            className="bg-gray text-blue text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5 w-1/2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            rows="8"
            className="bg-gray text-blue text-sm rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 dark:placeholder-gray-400"
            placeholder="Type your message here."
            onChange={handleChange}
            value={formData.message}

            required
          />
        </div>

        <Button text={"Submit"} />

       
      </form>
    </div>
  );
}

export default Contact;
