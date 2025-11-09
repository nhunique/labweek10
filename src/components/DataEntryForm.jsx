import React, { useState } from "react";
import "./DataEntryForm.css";

export default function DataEntryForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const provinces = [
    { value: "", label: "Choose..." },
    { value: "AB", label: "Alberta" },
    { value: "BC", label: "British Columbia" },
    { value: "MB", label: "Manitoba" },
    { value: "NB", label: "New Brunswick" },
    { value: "NL", label: "Newfoundland and Labrador" },
    { value: "NS", label: "Nova Scotia" },
    { value: "ON", label: "Ontario" },
    { value: "PE", label: "Prince Edward Island" },
    { value: "QC", label: "Quebec" },
    { value: "SK", label: "Saskatchewan" },
    { value: "NT", label: "Northwest Territories" },
    { value: "NU", label: "Nunavut" },
    { value: "YT", label: "Yukon" },
  ];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // ✅ prevent page reload
    if (!formData.agree) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    setSubmittedData(formData); // ✅ show result below
  }

  return (
    <div className="form-wrapper">
      <form className="data-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Data Entry Form</h1>

        <div className="row two-col">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="row three-col">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              {provinces.map((p) => (
                <option key={p.value} value={p.label}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label>Agree Terms &amp; Conditions?</label>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* ✅ Display results here */}
      {submittedData && (
        <div className="result-box">
          <p>
            <span className="result-label">Email:</span> {submittedData.email}
          </p>
          <p>
            <span className="result-label">Full Name:</span> {submittedData.name}
          </p>
          <p>
            <span className="result-label">Address:</span> {submittedData.address}
          </p>
          {submittedData.address2 && (
            <p>
              <span className="result-label">Address 2:</span>{" "}
              {submittedData.address2}
            </p>
          )}
          <p>
            <span className="result-label">City:</span> {submittedData.city}
          </p>
          <p>
            <span className="result-label">Province:</span>{" "}
            {submittedData.province}
          </p>
          <p>
            <span className="result-label">Postal Code:</span>{" "}
            {submittedData.postalCode}
          </p>
        </div>
      )}
    </div>
  );
}
