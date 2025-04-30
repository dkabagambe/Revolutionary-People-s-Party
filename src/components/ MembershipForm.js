import React, { useState } from "react";
import "../styles/membershipForm.css";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationalId: "",
    district: "",
    phone: "",
    email: "",
    membershipType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.nationalId ||
      !formData.phone ||
      !formData.dob ||
      !formData.gender ||
      !formData.district ||
      !formData.membershipType
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Form Data:", formData);
    alert("Registration successful! Please complete payment via Mobile Money.");
    // You can post this data to a backend API here
  };

  return (
    <div className="membership-form-container">
      <h1>Membership Registration</h1>
      <p className="subheading">Join the Revolutionary Peoples Party (RPP)</p>
      <p className="description">
        Be part of the movement for justice, unity, and transformational
        leadership in Uganda.
      </p>
      <form onSubmit={handleSubmit} className="membership-form">
        <label>Full Name*:</label>
        <input type="text" name="fullName" onChange={handleChange} required />

        <label>Date of Birth*:</label>
        <input type="date" name="dob" onChange={handleChange} required />

        <label>Gender*:</label>
        <select name="gender" onChange={handleChange} required>
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>National ID Number*:</label>
        <input type="text" name="nationalId" onChange={handleChange} required />

        <label>District / Constituency*:</label>
        <input type="text" name="district" onChange={handleChange} required />

        <label>Phone Number*:</label>
        <input type="tel" name="phone" onChange={handleChange} required />

        <label>Email Address (optional):</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Preferred Membership Type*:</label>
        <div className="checkbox-group">
          <label>
            <input
              type="radio"
              name="membershipType"
              value="Regular"
              onChange={handleChange}
              required
            />{" "}
            Regular
          </label>
          <label>
            <input
              type="radio"
              name="membershipType"
              value="Youth"
              onChange={handleChange}
            />{" "}
            Youth
          </label>
          <label>
            <input
              type="radio"
              name="membershipType"
              value="Women"
              onChange={handleChange}
            />{" "}
            Women
          </label>
          <label>
            <input
              type="radio"
              name="membershipType"
              value="PWD"
              onChange={handleChange}
            />{" "}
            People with Disabilities
          </label>
        </div>

        <button type="submit">Submit Registration</button>
      </form>

      <div className="payment-info">
        <h3>Membership Fee Payment</h3>
        <p>
          To complete your registration, please pay the membership fee via
          Mobile Money or in-person:
        </p>
        <ul>
          <li>
            <strong>MTN Mobile Money Merchant Code:</strong> 123456
          </li>
          <li>
            <strong>Airtel Money Merchant Code:</strong> 654321
          </li>
          <li>
            <em>Use your National ID as payment reference</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MembershipForm;
