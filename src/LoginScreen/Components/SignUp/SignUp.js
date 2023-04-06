import { useState } from "react";
import { adds } from "/home/marv/react-projects/workout-app/src/FirebaseConfig/FirebaseConfig.js";
import "/home/marv/react-projects/workout-app/src/LoginScreen/Components/SignUp/Scss/SignUp.css";

export default function SignUp() {
  const [toSend, setToSend] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //firebaseConfig add function
    adds(toSend);
    setToSend({
      user_name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <div className="overlay">
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          id="name"
          placeholder="User name"
          title="Please enter a user name"
          name="user_name"
          pattern="[A-Za-z ]{1,32}"
          type="text"
          value={toSend.user_name}
          onChange={handleChange}
          required
        />
        <input
          id="email"
          placeholder="Email"
          title="Please enter a valid email"
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={toSend.email}
          onChange={handleChange}
          required
        />
        <input
          id="password"
          placeholder="Password"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={toSend.password}
          onChange={handleChange}
          type="password"
          required
        />
        <input
          id="confirm-password"
          placeholder="Confirm password"
          title="Confirm your password"
          name="confirm-password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={toSend.confirm_password}
          onChange={handleChange}
          type="password"
          required
        />

        <button>Sign Up</button>

        <div>Login</div>
      </form>
    </div>
  );
}
