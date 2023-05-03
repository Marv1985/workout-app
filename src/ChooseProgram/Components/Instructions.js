import React from "react";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Instructions/Instructions.css";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Instructions() {

   //get user name
   const [user, setUser] = useState(null);
   useEffect(() => {
    const aut = getAuth()
    const use = aut.currentUser.displayName;
    setUser(use)
   }, []);

  return (
    <div className="instructions-wrapper">
      <p>Hi {user},</p>
      <p>
        Please select one of the workout programs to get started!
        <br />
        <br />
        Hit the "Done" button when you've completed a workout to store your
        progress.
        <br />
        <br />
        Then when you want to review your workouts just press the "History"
        button and select a date.
      </p>
    </div>
  );
}
