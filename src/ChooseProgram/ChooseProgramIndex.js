import React from "react";
import Header from "./Components/Header";
import Routines from "./Components/Routines";
import platform1200 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/platform_1200.webp";
import platform1080 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/platform_1080.jpg";
import platform720 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/platform_720.jpg";
import olympic1000 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/olypic_plates1000.jpg";
import olympic720 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/olypic_plates720.jpg";
import gym2048 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/gym2048.jpeg";
import gym1080 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/gym1080.jpeg";
import gym720 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/platform_720.jpg";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Routines/Routines.css";

export default function ChooseProgramIndex() {
  const workoutData = {
    routine1: {
      plan: "5 Day Workout Split",
    },
    routine2: {
      plan: "4 Day Workout Split",
    },
    routine3: {
      plan: "3 Day Workout Split",
    }
  };

  return (
    <div className="programs-wrapper">
      <div className="sticky">
      <Header />
      </div>
      <Routines
        name={workoutData.routine1.plan}
        image1={platform1200}
        image2={platform1080}
        image3={platform720}
      />
      <Routines
        name={workoutData.routine2.plan}
        image1={olympic1000}
        image2={olympic720}
      />
      <Routines
        name={workoutData.routine3.plan}
        image1={gym2048}
        image2={gym1080}
        image3={gym720}
      />
    </div>
  );
}
