import React from "react";
import Login from "./Components/Login/Login";
//import SignUp from "./Components/SignUp/SignUp";
import "/home/marv/react-projects/workout-app/src/LoginScreen/LoginScreenIndexScss/LoginScreenIndex.css";

export default function LoginScreenIndex() {
  return (
    <div>
      <div className="login-background">
        <div className="overlay"></div>
        {/* <SignUp /> */}
        <Login />
      </div>
    </div>
  );
}
