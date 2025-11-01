import React, { useState } from "react";
import "./InputShare.css";

const InputShare = ({ addShare }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    numberOfShares: "",
    pricePerShare: "",
    carbonReduction: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShare(formData);  // Call addShare with form data
    setFormData({ companyName: "", numberOfShares: "", pricePerShare: "", carbonReduction: "" });
  };

  return (
    <div className="container mt-4 mb-5 mt-5 p-5 inputShare">
      <div className="row">
        <div className="col-6 offset-3">
          <h2 className="text-center">Add a New Share</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="form-control"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfShares">Number of Solar Shares</label>
              <input
                type="number"
                id="numberOfShares"
                name="numberOfShares"
                className="form-control"
                placeholder="Enter number of shares"
                value={formData.numberOfShares}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pricePerShare">Price per Solar Share</label>
              <input
                type="number"
                id="pricePerShare"
                name="pricePerShare"
                className="form-control"
                placeholder="Enter price per share"
                value={formData.pricePerShare}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="carbonReduction">Carbon Reduction per Share (kg)</label>
              <input
                type="number"
                id="carbonReduction"
                name="carbonReduction"
                className="form-control"
                placeholder="Enter carbon reduction per share"
                value={formData.carbonReduction}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Add Share
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputShare;
