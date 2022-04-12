import auth from "../../firebase.init";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notMatchedError, setNotMatchedError] = useState("");

  const [sendEmailVerification] = useSendEmailVerification(
    auth
  );

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => setEmail(e.target.value);

  const handleConfirmPasswordBlur = (e) => setConfirmPassword(e.target.value);

  const handlePasswordBlur = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const notMatched = "Your Passwords did not Match!!";
      setNotMatchedError(notMatched);
      return;
    } else {
      setNotMatchedError("");
      setPassword(password);
      createUserWithEmailAndPassword(email, password);
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
          <input
            onBlur={handleEmailBlur}
            className="input-field"
            type="email"
            required
            name="email"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Your password
          </label>
          <input
            onBlur={handlePasswordBlur}
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
            onBlur={handleConfirmPasswordBlur}
            className="input-field"
            type="password"
            required
            name="confirmPassword"
          />
        </div>
        <input className="form-submit" type="submit" value="Sign Up" />
        <p style={{ color: "red" }}>{error?.message}</p>
        <p style={{ color: "red" }}>{notMatchedError}</p>
        <p style={{ textAlign: "center", margin: "0" }}>{loading && 'loading...'}</p>
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
