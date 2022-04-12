import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword , 
    user,
    loading,
    error] = useSignInWithEmailAndPassword(auth)

  const handleEmailBlur = (e) => setEmail(e.target.value);

  const handlePasswordBlur = (e) => setPassword(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="form-container">
      <h1 className="form-title"> Log In</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Your Email
          </label>
          <input
            onBlur={handleEmailBlur}
            className="input-field"
            type="text"
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
            name="password"
            id=""
          />
        </div>
        <input className="form-submit" type="submit" value="Sign Up" />
        <p style={{"color" : 'red', textAlign : "center", "marginTop": '0'}}>{error?.message}</p>
        {
          loading && <p>Loading...</p>
        }
        <p style={{ textAlign: "center", margin: "0" }}>
          New to Ema-John?
          <Link
            style={{ textDecoration: "none", color: "#FF9900" }}
            to="/register"
          >
            {" "}
            Sign Up
          </Link>{" "}
        </p>
      </form>
      
    </div>
  );
};

export default Login;
