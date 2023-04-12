import React from "react";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Instructions/Instructions.css";

export default function Instructions() {
  return (
    <div className="instructions-wrapper">
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
