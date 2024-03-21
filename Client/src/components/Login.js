import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Register from "./Regitser";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response) {
        throw new Error("No response received from server");
      }

      setSuccessMessage("Login successful");

   
      setErrorMessage("");

      setIsLoggedIn(true);

    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <>
   
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center align-items-center">
              <img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg" width='100%' height='100%' alt="Login" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-warning p-5 rounded">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-white h6"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-white h6"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex mt-4">
                  <button type="submit" className="btn btn-outline-dark  w-50">
                  <i className="fa fa-sign-in me-1"></i> Login
                  </button>
                  <Register />
                </div>
                
                {errorMessage && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                  </div>
                )}
                <button className="btn btn-primary w-100 mb-4 mt-4">
                  <span className="fa fa-google me-2"></span> Sign up With Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span> Sign up With
                  Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
     
    </>
  );
};

export default Login;
