import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, such as an API call
    console.log("Login Data Submitted:", formData);
  };

  return (
    <div className="container loginpage mb-5 mt-5 p-5">
      <div className="row">
        <div className="col-6 offset-3">
          <h2 className="text-center loginText">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username " className="loginText">Username</label>
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
              <label htmlFor="password" className="loginText">Password</label>
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

            <a href="/sharelist"> <button type="button" className="btn btn-primary btn-block mt-3">
              Login
            </button></a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
