import auth from "../../firebase.init";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notMatchedError, setNotMatchedError] = useState("");

  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    if (e.target.password.value !== e.target.confirmPassword.value) {
      const notMatched = "Your Passwords did not Match!!";
      setNotMatchedError(notMatched)
      return ;
    } else {
        setNotMatchedError('')
      setPassword(e.target.password.value);
      createUserWithEmailAndPassword(email, password)
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Your Email
          </label>
          <input className="input-field" type="email" required name="email" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Your password
          </label>
          <input
            className="input-field"
            type="password"
            required
            name="password"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="confirm-password">
            Confirm your password
          </label>
          <input
            className="input-field"
            type="password"
            required
            name="confirmPassword"
          />
        </div>
        <input className="form-submit" type="submit" value="Sign Up" />
        <p style={{color : 'red'}}>{error && error.message}</p>
        <p style={{color: 'red'}}>{notMatchedError}</p>
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

export default Register;
