import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import "/home/marv/react-projects/workout-app/src/LoginScreen/Scss/LoginScreenIndex/LoginScreenIndex.css";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const auth = getAuth();

  const { handleToggle } = props;

  const [toSend, setToSend] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // log users in

    signInWithEmailAndPassword(auth, toSend.email, toSend.password)
      .then((cred) => {
        navigate("/ChooseProgram", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
    setToSend({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form className="signup login" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          id="email"
          placeholder="Email"
          title="Please enter a valid email"
          type="text"
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
          value={toSend.password}
          onChange={handleChange}
          type="password"
          required
        />

        <button>Login</button>

        <div onClick={handleToggle}>Sign Up</div>
      </form>
    </div>
  );
}
