import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import LoginScreenIndex from "../LoginScreen/LoginScreenIndex";
import ChooseProgramIndex from "../ChooseProgram/ChooseProgramIndex";
import FiveDaySplitTable from "../TableData/Components/FiveDaySplitTable";
import FourDaySplitTable from "../TableData/Components/FourDaySplitTable";
import LegsPushPull from "../TableData/Components/LegsPushPull";
import ABRoutine from "../TableData/Components/ABRoutine";
import FullBody from "../TableData/Components/FullBody";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/ChooseProgram" element={<ChooseProgramIndex />}></Route>
        <Route path="/" element={<LoginScreenIndex />}></Route>
        <Route path="/FiveDaySplit" element={<FiveDaySplitTable />}></Route>
        <Route path="/FourDaySplit" element={<FourDaySplitTable />}></Route>
        <Route path="/LegsPushPull" element={<LegsPushPull />}></Route>
        <Route path="/ABSplit" element={<ABRoutine />}></Route>
        <Route path="/FullBodySplit" element={<FullBody />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
