'use client'
import React, { useState } from 'react';
import { contactApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUsForm({ id }) {  // <-- receive property_id as prop

  const [reqBody, setReqBody] = useState({
    property_id: id || null,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReqBody((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", reqBody);
      const res = await contactApi(reqBody);

      if (res.status === 200) {
        toast.success("Message sent successfully 🎉", {
          position: "top-center",
          autoClose: 2000,
        });
        // reset form
        setReqBody({
          property_id: id || null,
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error("Something went wrong 😥", {
          position: "top-right",
          autoClose: 3000,
        });
      }

      console.log("API Response:", res);
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Error submitting form 🚨", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="contact-content">
        <h4>We'd Love To Help You</h4>
        <p className="body-2 text-variant-1">
          Have questions or need assistance? We're here to help! Reach out to us
          for support, inquiries, or feedback. Let's make your property journey
          seamless and successful.
        </p>

        <form onSubmit={handleSubmit} className="form-contact">
          <div className="box grid-2">
            <fieldset>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                name="name"
                id="name"
                value={reqBody.name}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                id="email"
                value={reqBody.email}
                onChange={handleChange}
                required
              />
            </fieldset>
          </div>

          <div className="box grid-2">
            <fieldset>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                className="form-control style-1"
                placeholder="ex 012345678"
                name="phone"
                id="phone"
                value={reqBody.phone}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset> <label htmlFor="subject">Subject:</label> <input type="text" className="form-control style-1" placeholder="Enter Keyword" name="subject" id="subject" /> </fieldset>
          </div>

          <fieldset>
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Message"
              id="message"
              value={reqBody.message}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="send-wrap">
            <button className="tf-btn primary size-1" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default ContactUsForm;
