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
import kettlebells from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/kettlebells.jpg";
import protein2940 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/protein2940.jpg";
import protein1080 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/protein1080.jpg";
import protein720 from "/home/marv/react-projects/workout-app/src/ChooseProgram/Images/protein720.jpg";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/Routines/Routines.css";
import "/home/marv/react-projects/workout-app/src/ChooseProgram/Scss/ChooseProgramIndex.scss/ChooseProgramIndex.css";
import Instructions from "./Components/Instructions";
import LogOut from "../LogOut/LogOut";

export default function ChooseProgramIndex() {
  const workoutData = {
    routine1: {
      plan: "5 Day Body Part Split",
    },
    routine2: {
      plan: "4 Day Body Part Split",
    },
    routine3: {
      plan: "Legs / Push / Pull",
    },
    routine4: {
      plan: "A / B Routine",
    },
    routine5: {
      plan: "Full Body",
    },
  };

  return (
    <div className="program-wrapper">
      <LogOut />
      <div className="instructions">
        <Instructions />
      </div>
      <div className="menu">
        <div>
          <Header />
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
            image3={olympic720}
          />
          <Routines
            name={workoutData.routine3.plan}
            image1={gym2048}
            image2={gym1080}
            image3={gym720}
          />
          <div className="no-overlay">
            <Routines
              name={workoutData.routine4.plan}
              image1={kettlebells}
              image2={kettlebells}
              image3={kettlebells}
            />
          </div>
          <Routines
            name={workoutData.routine5.plan}
            image1={protein2940}
            image2={protein1080}
            image3={protein720}
          />
        </div>
      </div>
    </div>
  );
}
