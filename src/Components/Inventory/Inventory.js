import React, { useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Inventory = () => {

  const [user] = useAuthState(auth)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleNameBlur = (e) => setName(e.target.value);
  const handleAdressBlur = (e) => setAddress(e.target.value);
  const handlePhoneNumberBlur = (e) => setPhoneNumber(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail(user?.email)
    const shippingInfo = { name, email, phoneNumber, address}
    console.log(shippingInfo);
  };

  return (
    <div className="form-container">
      <h1 className="form-title"> Shipping Information</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Your Name
          </label>
          <input
            required
            onBlur={handleNameBlur}
            className="input-field"
            type="text"
            name="name"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Your Email
          </label>
          <input
            value={user?.email}
            readOnly
            className="input-field"
            type="email"
            name="email"
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Your Phone Number
          </label>
          <input
            onBlur={handlePhoneNumberBlur}
            className="input-field"
            type="text"
            name="phone-number"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Your Adress
          </label>
          <input
            onBlur={handleAdressBlur}
            className="input-field"
            type="address"
            name="address"
            id=""
            required
          />
        </div>
        <input className="form-submit" type="submit" value="Add Shipping" />
      </form>
    </div>
  );
};

export default Inventory;
