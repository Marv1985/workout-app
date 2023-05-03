import { useState, useCallback, useRef } from "react";
import { signUp } from "/home/marv/react-projects/workout-app/src/FirebaseConfig/FirebaseConfig.js";
import "/home/marv/react-projects/workout-app/src/LoginScreen/Scss/SignUp&Login/SignUp.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const pwd = useRef();
  const [show, setShow] = useState(true);

  const handleToggle = useCallback(() => setShow((prevShow) => !prevShow), []);

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

    /* check passwords match */
    if (toSend.password !== toSend.confirm_password) {
      pwd.current.setCustomValidity("Passwords do not match");
    } else if (toSend.password === toSend.confirm_password) {
      signUp(toSend);
      navigate("/ChooseProgram", { replace: true });
    }
  };

  return (
    <div>
      {show ? (
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
            ref={pwd}
            placeholder="Confirm password"
            title="Confirm your password"
            name="confirm_password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            value={toSend.confirm_password}
            onChange={handleChange}
            type="password"
            required
          />

          <button type="submit">Sign Up</button>

          <div onClick={handleToggle}>Login</div>
        </form>
      ) : (
        <Login handleToggle={handleToggle} />
      )}
    </div>
  );
}
