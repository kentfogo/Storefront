import React from "react";
import { Form, Input, InputNumber, Button } from 'antd';
/*import { Container, FormContainer } from "./ContactElements"*/
import "./ContactElements.css"
const ContactForm = () =>{
  return(
    <>
    <div className="form-content-right">
      <form className="form">
        <h1>
          Get Started Today!
        </h1>
        <div className="form-inputs">
          <label htmlFor="firstName"
          className="form-label">
          Username
          </label>
          <input
          type="text"
          name="firstName"
          id="username"
          className="form-input"
          placeholder="Enter your First Name"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="lastName"
          className="form-label">
          Last Name
          </label>
          <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          placeholder="Enter your Last Name"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email"
          className="form-label"
          > Email
          </label>
          <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          placeholder="Enter your email"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="subject"
          className="form-label"
          > Subject
          </label>
          <input
          type="text"
          name="subject"
          id="subject"
          className="form-input"
          placeholder="Subject"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="message"
          className="form-label"
          > Message
          </label>
          <input
          type="text"
          name="message"
          id="message"
          className="form-input"
          placeholder="Write Your Message Here"
          />
        </div>
        <button className="form-input-btn"
        type="submit">
          Submit
        </button>

      </form>
    </div>
    </>
  );
};

export default ContactForm;
