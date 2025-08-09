import React, { useState } from "react";
import "./VolunteerForm.css";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for offering your time! Our team will reach out to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="volunteer-container">
      <h2 className="volunteer-title">Become a Volunteer</h2>
      <p className="volunteer-description">
        Join hands with us to make a real difference in the community. Please fill in your details below and we’ll be in touch!
      </p>

      <form className="volunteer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name<span>*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address<span>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number<span>*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1234567890"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Why do you want to volunteer?<span>*</span></label>
          <textarea
            id="message"
            name="message"
            placeholder="Share your motivation or relevant experience..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
