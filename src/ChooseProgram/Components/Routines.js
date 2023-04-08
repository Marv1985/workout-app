import React from "react";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Routines/Routines.css";
import barbell from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/barbell.webp";

export default function Routines() {
  return (
    <div className="routines-wrapper">
      <div className="image-wrapper">
        <img src={barbell} alt="" />
      </div>
    </div>
  );
}
