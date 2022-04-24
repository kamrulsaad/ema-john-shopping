import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user || googleUser) navigate(from, {replace: true})
  },[user,googleUser, from, navigate])

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleEmailBlur = (e) => setEmail(e.target.value);

  const handleResetPassword = () => {
    sendPasswordResetEmail(email);
    setClicked(true);
  };

  const handlePasswordBlur = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

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
        <p style={{ color: "red", textAlign: "center", marginTop: "0" }}>
          {error?.message}
        </p>
        {loading && <p>Loading...</p>}
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
      <p
        onClick={handleResetPassword}
        style={{ color: "red", textAlign: "center", cursor: "pointer" }}
      >
        {clicked
          ? "Please Check Your Email for resetting password"
          : "Forgot Password?"}
      </p>

      <div onClick={() => signInWithGoogle()} className="google-sign-in">
        <img
          src="https://4.bp.blogspot.com/-K1IdqgDmrJU/W1tubjO-LrI/AAAAAAAABN4/kIB_xbkes2MMSxqXF7gBxuJSr4FDuufPwCLcBGAs/s1600/Google-logo-2015-G-icon.png"
          alt="google"
        />
        <p>Sign in with Google Instead</p>
      </div>
    </div>
  );
};

export default Login;
