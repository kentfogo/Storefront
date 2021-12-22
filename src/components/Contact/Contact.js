import React from 'react';
import "./ContactElements.scss"

const ContactFish = () =>{
  return(
    <>
    <div className = "form-container">
      <form className="form">
      <h1>
        Send us a Message!
      </h1>
      <div className="form-Inputs">
        <label htmlFor="firstname"
        className="form-label">
        First Name
        </label>
        <input
        type="text"
        name="firstname"
        id="firstname"
        className="form-input"
        placeholder="Enter Your First Name"
        />
      </div>
        <div className="form-Inputs">
          <label htmlFor="lastname"
          className="form-label">
          Last Name
          </label>
          <input
          type="text"
          name="lastname"
          id="lastname"
          className="form-input"
          placeholder="Enter Your Last Name"
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

export default ContactFish
