import React from "react";
import { useState } from "react";
import {
  login,
  signingOut,
  signUp,
} from "/home/marv/react-projects/workout-app/src/FirebaseConfig/FirebaseConfig.js";

export default function ExampleEmail() {
  // sign up
  const [toData, setData] = useState({
    email: "",
    pwd: "",
  });

  const handleChange = (e) => {
    setData({ ...toData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signUp(toData);

    setData({
      email: "",
      pwd: "",
    });
  };

  // login
  const [toLogin, setLogin] = useState({
    email: "",
    pwd: "",
  });

  const handleLoginChange = (e) => {
    setLogin({ ...toLogin, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(toLogin);

    setLogin({
      email: "",
      pwd: "",
    });
  };

  // logout
  const handleLogout = (e) => {
    e.preventDefault();
    signingOut();
  };

  return (
    <div>
      {/* sign up */}
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          placeholder="email"
          title="Please enter email"
          name="email"
          type="email"
          value={toData.email}
          onChange={handleChange}
          required
        />
        <input
          id="pwd"
          placeholder="pwd"
          title="Please enter pwd"
          type="password"
          name="pwd"
          value={toData.pwd}
          onChange={handleChange}
          required
        />

        <div className="wrapper">
          <button type="submit">
            <span>sign up</span>
          </button>
        </div>
      </form>

      {/* login */}
      <form onSubmit={handleLogin}>
        <input
          placeholder="email"
          title="Please enter email"
          name="email"
          type="email"
          value={toLogin.email}
          onChange={handleLoginChange}
          required
        />
        <input
          placeholder="pwd"
          title="Please enter pwd"
          type="password"
          name="pwd"
          value={toLogin.pwd}
          onChange={handleLoginChange}
          required
        />

        <div className="wrapper">
          <button type="submit">
            <span>login</span>
          </button>
        </div>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
}
