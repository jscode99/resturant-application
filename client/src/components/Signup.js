import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./signup.css";

function Signup() {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    sucessMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    sucessMsg,
    errorMsg,
    loading,
  } = formdata;

  //Event handlers
  const changeHandler = e => {
    setformdata({...formdata, [e.target.name]:e.target.value});
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div className="signup-container">
      <div className="row px-4 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="username"
                  name='username'
                  value={username}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="Email"
                  name='email'
                  value={email}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="Password"
                  name='password'
                  value={password}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="Confirm password"
                  name='password2'
                  value={password2}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
            
            <button className="btn btn-primary col-md-9" type="submit">
              Sign Up
            </button>

            <p className="text-white mx-auto">
              Already have an account ?{" "}
              <Link to="/signin" className="text-white">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
