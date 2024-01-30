import React, { useState } from "react";
import { fs } from "../config/Config";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    fs.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        toast.success('Your message has been submitted👍');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center text-center">
      <form className="h-screen flex flex-col justify-center items-center text-center" onSubmit={handleSubmit}>
        <h1 className="mb-[10px]">Contact Us 🤳</h1>
        <label className="pb-2 font-bold text-navy-900">Name</label>
        <input
         className="w-400 px-5 py-5 rounded-md shadow-sm mb-5 border border-gray-300 bg-white text-navy-900 outline-none md:w-300"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="pb-2 font-bold text-navy-900">Email</label>
        <input
        className="w-400 px-5 py-5 rounded-md shadow-sm mb-5 border border-gray-300 bg-white text-navy-900 outline-none md:w-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="pb-2 font-bold text-navy-900">Message</label>
        <textarea
        className="w-400 md:w-300 h-[150px] min-h-[100px] px-5 py-5 rounded-md shadow-sm mb-20 border border-gray-300 bg-white text-navy-900 outline-none"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
        className="w-400 md:w-300 px-5 py-5 border-none bg-gradient-to-r from-orange-500 to-yellow-500 font-medium text-white rounded-md cursor-pointer transition duration-200 ease-in-out mt-5"
          type="submit"
          style={{ background: loader ? "#ccc" : " linear-gradient(90deg, rgba(218,121,17,1) 52%, rgba(240,207,13,1) 100%)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;