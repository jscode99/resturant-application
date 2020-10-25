import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="row px-5 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          <form>
            <div className="form-row">
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="username"
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
                  required
                />
              </div>
            </div>
            <button className="btn btn-primary col-md-9" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
