import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: 0,
    pincode: "000000",
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formdata", formData);
  };

  return (
    <form className="form-container">
      <div className="form-children">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleFormData}
          value={formData.name}
        />
      </div>
      <div className="form-children">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          onChange={handleFormData}
          value={formData.address}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
