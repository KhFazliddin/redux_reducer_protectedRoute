import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import "./signin.css";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();

  const submitBtn = (e) => {
    e.preventDefault();

    const checked = user.some((item) => {
      return item.email === email && item.password === password;
    });
    if (checked) {
      dispatch(addUser());
      navigate("/");
    } else {
      alert("Please, check your email or password");
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="login">
      <h1>Log In your Account</h1>

      <form>
        {/* Labels and inputs for form data */}

        <label className="label">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
          ref={inputRef}
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

export default Signin;
