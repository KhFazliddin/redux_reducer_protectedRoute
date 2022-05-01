import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import "./signup.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const inputRef = useRef();

  const submitBtn = (e) => {
    e.preventDefault();
    const newObj = { name, email, password };
    console.log(newObj);
    dispatch(addUser(newObj));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="register">
      <h1>Create new Account</h1>
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          type="text"
          ref={inputRef}
        />

        <label className="label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
        />

        <label className="label">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
        />

        <button onClick={submitBtn} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
