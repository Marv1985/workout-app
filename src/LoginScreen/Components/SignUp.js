import { useState, useCallback } from "react";
import { auth } from "/home/marv/react-projects/workout-app/src/FirebaseConfig/FirebaseConfig.js";
import "/home/marv/react-projects/workout-app/src/LoginScreen/Scss/SignUp&Login/SignUp.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  updateProfile,
} from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleToggle = useCallback(() => setShow((prevShow) => !prevShow), []);

  const [toSend, setToSend] = useState({
    user_name: "",
    email: "",
  });
  const [toPass, setToPass] = useState({
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    setToPass({ ...toPass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSignInMethodsForEmail(auth, toSend.email).then((signInMethods) => {
      if (signInMethods[0] !== undefined) {
        alert("An account with that email address already exists");
      }
    })
      /* check passwords match */
      if (toSend.password !== toSend.confirm_password) {
        alert("Passwords do not match. Please try again.");
        setToPass({
          password: "",
          confirm_password: "",
        });
      } else if (toPass.password === toPass.confirm_password) {
        createUserWithEmailAndPassword(auth, toSend.email, toSend.password)
        .then((cred) => {
        updateProfile(auth.currentUser, {
          displayName: toSend.user_name,
        });
        navigate("/ChooseProgram", { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
        
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
            type="email"
            name="email"
            pattern="^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$"
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
            value={toPass.password}
            onChange={handleChange}
            type="password"
            required
          />
          <input
            id="confirm-password"
            placeholder="Confirm password"
            title="Confirm your password"
            name="confirm_password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            value={toPass.confirm_password}
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
