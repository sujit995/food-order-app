import React, { useState } from "react";
import { fs } from "../config/Config";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactFormWrapper, Form, ContactHeading, Input, TextArea, Title, ContactButton } from './StyleElements'


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
    <ContactFormWrapper>
      <Form onSubmit={handleSubmit}>
        <ContactHeading>Contact Us 🤳</ContactHeading>

        <Title>Name</Title>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Title>Email</Title>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Title>Message</Title>
        <TextArea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></TextArea>

        <ContactButton
          type="submit"
          style={{ background: loader ? "#ccc" : "green" }}
        >
          Submit
        </ContactButton>
      </Form>
    </ContactFormWrapper>
  );
};

export default Contact;