import { useState } from "react";
import { adds } from "/home/marv/react-projects/workout-app/src/FirebaseConfig/FirebaseConfig.js";
import "/home/marv/react-projects/workout-app/src/LoginScreen/Components/SignUp/Scss/SignUp.css";

export default function Login() {
  const [toSend, setToSend] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //firebaseConfig add function
    adds(toSend);
    setToSend({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Login</h1>

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

        <button>Login</button>

        <div>Sign Up</div>
      </form>
    </div>
  );
}
