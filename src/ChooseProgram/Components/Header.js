import React from "react";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Header/Header.css";
import dumbbell from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/dumbbell.png";

export default function Header() {
  return (
    <div>
      <header>
        <img className="dumbbell" src={dumbbell} alt="" />
        Workout Routine Library
      </header>
    </div>
  );
}
