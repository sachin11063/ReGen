import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., API call
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container signPage mb-5 p-5 mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <h2 className="text-center signText">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="signText">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="signText">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="signText">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <a href="/sharelist"><button type="button" className="btn btn-primary btn-block mt-3">
              Sign Up
            </button></a>


            

            <a href="/login"> <button type="button" className="btn btn-success btn-block mt-3 loginButton">
              Log in
            </button></a>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
