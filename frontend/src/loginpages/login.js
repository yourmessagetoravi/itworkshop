
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate correctly
import axios from 'axios';
import { Link } from 'react-router-dom';




const Login = () => {

  // Access login form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Use the correct hook for navigation
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

    // Handle login functionality
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/login', formData);
  
        if (response.status === 200) {
          // Store user information in client-side storage
          localStorage.setItem('user', JSON.stringify(response.data.user));
          // Redirect to the admin page using navigate
          navigate('/admin');
        } else {
          console.log(response.data.error);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>
                    <form className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>


                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>
                          Login
                        </button>
                      </div>
                    </form>

                    <label className="form-check-label" htmlFor="form2Example3">
                      I dont have an Account{" "}
                      <Link to="/register">Sign Up</Link>
                    </label>





                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Login;