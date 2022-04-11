import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title"> Log In</h1>
      <form>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Your Email
          </label>
          <input className="input-field" type="text" name="email" id="" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Your password
          </label>
          <input
            className="input-field"
            type="password"
            name="password"
            id=""
          />
        </div>
        <input className="form-submit" type="submit" value="Sign Up" />
        <p style={{ textAlign: "center", margin: "0" }}>
          Already Registered?
          <Link
            style={{ textDecoration: "none", color: "#FF9900" }}
            to="/login"
          >
            {" "}
            Log In
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
