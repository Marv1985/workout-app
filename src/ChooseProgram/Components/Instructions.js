import React from "react";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Instructions/Instructions.css";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export default function Instructions() {
  //get user name
  const [user, setUser] = useState(null);

  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    if (user) {
      const injectDisplayName = () => {
        if (auth.currentUser.displayName === null) {
          setTimeout(() => {
            injectDisplayName();
          }, 500);
        } else {
          setUser(auth.currentUser.displayName);
        }
      };
      injectDisplayName();
    }
  });

  return (
    <div className="instructions-wrapper">
      <p>Hi {user},</p>
      <p>
        Please select one of the workout programs to get started!
        <br />
        <br />
        Hit the "Submit" button when you've completed a workout to store your
        progress.
        <br />
        <br />
        Then when you want to review your workouts just press the "History"
        button and select a date.
      </p>
    </div>
  );
}
