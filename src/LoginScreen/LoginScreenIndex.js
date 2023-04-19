import React from "react";
import SignUp from "/home/marv/react-projects/workout-app/src/LoginScreen/Components/SignUp.js";
import "/home/marv/react-projects/workout-app/src/LoginScreen/Scss/LoginScreenIndex/LoginScreenIndex.css";
import barbell_1500 from "/home/marv/react-projects/workout-app/src/LoginScreen/Images/barbell.webp";
import barbell_1080 from "/home/marv/react-projects/workout-app/src/LoginScreen/Images/barbell-1080.jpg";
import barbell_720 from "/home/marv/react-projects/workout-app/src/LoginScreen/Images/barbell-720.jpg";

export default function LoginScreenIndex() {
  return (
    <div>
      <div className="login-background">
        <img
          src={barbell_1500}
          srcSet={`${barbell_1500} 1500w,${barbell_1080} 1080w, ${barbell_720} 720w`}
          alt="background"
        />
        <SignUp />
      </div>
    </div>
  );
}
