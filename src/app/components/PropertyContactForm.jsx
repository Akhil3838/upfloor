'use client'
import React, { useState } from 'react';
import { contactApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PropertyContactForm({ id }) {
  const [reqBody, setReqBody] = useState({
    property_id: id,
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
    e.preventDefault(); // stop page reload
    try {
      console.log("Sending data:", reqBody);
      const res = await contactApi(reqBody);

      if (res.status === 200) {
        toast.success("Message sent successfully 🎉", {
          position: "top-right",
          autoClose: 2000,
        });
        // ✅ reset form
        setReqBody({
          property_id: id,
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
      <div className="widget-box single-property-contact">
        <h5 className="title fw-6">Contact Us</h5>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="ip-group">
            <input
              type="text"
              name="name"
              value={reqBody.name}
              onChange={handleChange}
              placeholder="Jony Dane"
              className="form-control"
              required
            />
          </div>
          <div className="ip-group">
            <input
              type="text"
              name="phone"
              value={reqBody.phone}
              onChange={handleChange}
              placeholder="ex 0123456789"
              className="form-control"
              required
            />
          </div>
          <div className="ip-group">
            <input
              type="email"
              name="email"
              value={reqBody.email}
              onChange={handleChange}
              placeholder="themesflat@gmail.com"
              className="form-control"
              required
            />
          </div>
          <div className="ip-group">
            <textarea
              name="message"
              value={reqBody.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="form-control"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="tf-btn btn-view primary hover-btn-view w-100"
          >
            Send Message <span className="icon icon-arrow-right2"></span>
          </button>
        </form>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </>
  );
}

export default PropertyContactForm;
