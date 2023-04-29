import LogOut from "../../LogOut/LogOut";
import Buttons from "./Buttons";
import "/home/marv/react-projects/workout-app/src/TableData/Scss/AllTablesScss/AllTablesCss.css";
import { useState } from "react";
import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../FirebaseConfig/FirebaseConfig";
import moment from "moment";
import WorkoutDataRequestPopup from "../../WorkoutDataRequestPopup/WorkoutDataRequestPopup";

export default function FiveDaySplitTable() {
  //history data
  const [history, setHistory] = useState([]);

  //popup state
  const [toShow, setToShow] = useState(false);

  //table input state
  const [toSend, setToSend] = useState({});

  //onchange handler
  const handleChange = (e) => {
    setToSend((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.id]: e.target.value,
      };
    });
  };

  //close popup function
  function close() {
    setToShow(false);
  }

  //get dates for data from firestore
  const colRef = collection(db, "FiveDay");

  const getRef = query(
    collection(db, "FiveDay"),
    where("date", ">=", "April 01")
  );

  const getFiveDaySplit = async () => {
    let data = [];
    await getDocs(getRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push(doc.data().date);
        setHistory(data);
      });
    });
    setToShow(true);
  };
  console.log(history);
  //get time and date
  const date = moment().format("MMMM Do YYYY h:mm:ss a");

  //add data to firebase
  const addsFiveSaySplit = async () => {
    const newComment = {
      date: date,

      //mondays weights
      weight_m1: toSend.weight_m1 || "",
      weight_m2: toSend.weight_m2 || "",
      weight_m3: toSend.weight_m3 || "",
      weight_m4: toSend.weight_m4 || "",
      weight_m5: toSend.weight_m5 || "",

      //tuesdays weights
      weight_t1: toSend.weight_t1 || "",
      weight_t2: toSend.weight_t2 || "",
      weight_t3: toSend.weight_t3 || "",
      weight_t4: toSend.weight_t4 || "",
      weight_t5: toSend.weight_t5 || "",

      //wednesdays weights
      weight_w1: toSend.weight_w1 || "",
      weight_w2: toSend.weight_w2 || "",
      weight_w3: toSend.weight_w3 || "",
      weight_w4: toSend.weight_w4 || "",
      weight_w5: toSend.weight_w5 || "",

      //thursdays weights
      weight_th1: toSend.weight_th1 || "",
      weight_th2: toSend.weight_th2 || "",
      weight_th3: toSend.weight_th3 || "",
      weight_th4: toSend.weight_th4 || "",
      weight_th5: toSend.weight_th5 || "",

      //fridays weights
      weight_f1: toSend.weight_f1 || "",
      weight_f2: toSend.weight_f2 || "",
      weight_f3: toSend.weight_f3 || "",
      weight_f4: toSend.weight_f4 || "",
      weight_f5: toSend.weight_f5 || "",

      //mondays sets and reps
      m_setOne: toSend.m_setOne || "",
      m_setTwo: toSend.m_setTwo || "",
      m_setThree: toSend.m_setThree || "",
      m_setFour: toSend.m_setFour || "",
      m_setOne2: toSend.m_setOne2 || "",
      m_setTwo2: toSend.m_setTwo2 || "",
      m_setThree2: toSend.m_setThree2 || "",
      m_setFour2: toSend.m_setFour2 || "",
      m_setOne3: toSend.m_setOne3 || "",
      m_setTwo3: toSend.m_setTwo3 || "",
      m_setThree3: toSend.m_setThree3 || "",
      m_setFour3: toSend.m_setFour3 || "",
      m_setOne4: toSend.m_setOne4 || "",
      m_setTwo4: toSend.m_setTwo4 || "",
      m_setThree4: toSend.m_setThree4 || "",
      m_setFour4: toSend.m_setFour4 || "",
      m_setOne5: toSend.m_setOne5 || "",
      m_setTwo5: toSend.m_setTwo5 || "",
      m_setThree5: toSend.m_setThree5 || "",
      m_setFour5: toSend.m_setFour5 || "",

      //tuesdays sets and reps
      t_setOne: toSend.t_setOne || "",
      t_setTwo: toSend.t_setTwo || "",
      t_setThree: toSend.t_setThree || "",
      t_setFour: toSend.t_setFour || "",
      t_setOne2: toSend.t_setOne2 || "",
      t_setTwo2: toSend.t_setTwo2 || "",
      t_setThree2: toSend.t_setThree2 || "",
      t_setFour2: toSend.t_setFour2 || "",
      t_setOne3: toSend.t_setOne3 || "",
      t_setTwo3: toSend.t_setTwo3 || "",
      t_setThree3: toSend.t_setThree3 || "",
      t_setFour3: toSend.t_setFour3 || "",
      t_setOne4: toSend.t_setOne4 || "",
      t_setTwo4: toSend.t_setTwo4 || "",
      t_setThree4: toSend.t_setThree4 || "",
      t_setFour4: toSend.t_setFour4 || "",
      t_setOne5: toSend.t_setOne5 || "",
      t_setTwo5: toSend.t_setTwo5 || "",
      t_setThree5: toSend.t_setThree5 || "",
      t_setFour5: toSend.t_setFour5 || "",

      //wednesdays sets and reps
      w_setOne: toSend.w_setOne || "",
      w_setTwo: toSend.w_setTwo || "",
      w_setThree: toSend.w_setThree || "",
      w_setFour: toSend.w_setFour || "",
      w_setOne2: toSend.w_setOne2 || "",
      w_setTwo2: toSend.w_setTwo2 || "",
      w_setThree2: toSend.w_setThree2 || "",
      w_setFour2: toSend.w_setFour2 || "",
      w_setOne3: toSend.w_setOne3 || "",
      w_setTwo3: toSend.w_setTwo3 || "",
      w_setThree3: toSend.w_setThree3 || "",
      w_setFour3: toSend.w_setFour3 || "",
      w_setOne4: toSend.w_setOne4 || "",
      w_setTwo4: toSend.w_setTwo4 || "",
      w_setThree4: toSend.w_setThree4 || "",
      w_setFour4: toSend.w_setFour4 || "",
      w_setOne5: toSend.w_setOne5 || "",
      w_setTwo5: toSend.w_setTwo5 || "",
      w_setThree5: toSend.w_setThree5 || "",
      w_setFour5: toSend.w_setFour5 || "",

      //thurdays sets and reps
      th_setOne: toSend.th_setOne || "",
      th_setTwo: toSend.th_setTwo || "",
      th_setThree: toSend.th_setThree || "",
      th_setFour: toSend.th_setFour || "",
      th_setOne2: toSend.th_setOne2 || "",
      th_setTwo2: toSend.th_setTwo2 || "",
      th_setThree2: toSend.th_setThree2 || "",
      th_setFour2: toSend.th_setFour2 || "",
      th_setOne3: toSend.th_setOne3 || "",
      th_setTwo3: toSend.th_setTwo3 || "",
      th_setThree3: toSend.th_setThree3 || "",
      th_setFour3: toSend.th_setFour3 || "",
      th_setOne4: toSend.th_setOne4 || "",
      th_setTwo4: toSend.th_setTwo4 || "",
      th_setThree4: toSend.th_setThree4 || "",
      th_setFour4: toSend.th_setFour4 || "",
      th_setOne5: toSend.th_setOne5 || "",
      th_setTwo5: toSend.th_setTwo5 || "",
      th_setThree5: toSend.th_setThree5 || "",
      th_setFour5: toSend.th_setFour5 || "",

      //fridays sets and reps
      f_setOne: toSend.f_setOne || "",
      f_setTwo: toSend.f_setTwo || "",
      f_setThree: toSend.f_setThree || "",
      f_setFour: toSend.f_setFour || "",
      f_setOne2: toSend.f_setOne2 || "",
      f_setTwo2: toSend.f_setTwo2 || "",
      f_setThree2: toSend.f_setThree2 || "",
      f_setFour2: toSend.f_setFour2 || "",
      f_setOne3: toSend.f_setOne3 || "",
      f_setTwo3: toSend.f_setTwo3 || "",
      f_setThree3: toSend.f_setThree3 || "",
      f_setFour3: toSend.f_setFour3 || "",
      f_setOne4: toSend.f_setOne4 || "",
      f_setTwo4: toSend.f_setTwo4 || "",
      f_setThree4: toSend.f_setThree4 || "",
      f_setFour4: toSend.f_setFour4 || "",
      f_setOne5: toSend.f_setOne5 || "",
      f_setTwo5: toSend.f_setTwo5 || "",
      f_setThree5: toSend.f_setThree5 || "",
      f_setFour5: toSend.f_setFour5 || "",
    };
    try {
      await addDoc(colRef, newComment);
    } catch (err) {
      console.log(err);
    }
    setToSend({});
  };

  //submit to firebase
  const handleSubmit = (event) => {
    event.preventDefault();
    addsFiveSaySplit();
  };

  return (
    <div className="table-wrapper">
      <LogOut />
      <table>
        <caption>5 Day Split</caption>

        {/* table head */}
        <thead>
          <tr>
            <th scope="col">DAY</th>
            <th scope="col">Exercise</th>
            <th className="width" scope="col">
              Sets x Reps
            </th>
            <th className="width" scope="col">
              Weight
            </th>
            <th className="width" scope="col">
              Set 1 Reps
            </th>
            <th className="width" scope="col">
              Set 2 Reps
            </th>
            <th className="width" scope="col">
              Set 3 Reps
            </th>
            <th className="width" scope="col">
              Set 4 Reps
            </th>
          </tr>
        </thead>

        {/* table body */}
        {/* monday */}
        <tbody>
          <tr>
            <td colSpan={8} className="table-titles">
              CHEST
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={5}>
              Monday
            </th>
            <td>Flat Bb Bench</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m1"
                value={toSend.weight_m1 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne"
                value={toSend.m_setOne || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo"
                value={toSend.m_setTwo || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree"
                value={toSend.m_setThree || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour"
                value={toSend.m_setFour || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Incline Bb Bench</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m2"
                value={toSend.weight_m2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne2"
                value={toSend.m_setOne2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo2"
                value={toSend.m_setTwo2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree2"
                value={toSend.m_setThree2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour2"
                value={toSend.m_setFour2 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Flat Db Bench</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m3"
                value={toSend.weight_m3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne3"
                value={toSend.m_setOne3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo3"
                value={toSend.m_setTwo3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree3"
                value={toSend.m_setThree3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour3"
                value={toSend.m_setFour3 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Machine Press</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m4"
                value={toSend.weight_m4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne4"
                value={toSend.m_setOne4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo4"
                value={toSend.m_setTwo4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree4"
                value={toSend.m_setThree4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour4"
                value={toSend.m_setFour4 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Cable Fly's</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m5"
                value={toSend.weight_m5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne5"
                value={toSend.m_setOne5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo5"
                value={toSend.m_setTwo5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree5"
                value={toSend.m_setThree5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour5"
                value={toSend.m_setFour5 || ""}
              />
            </td>
          </tr>

          {/* tuesday */}
          <tr>
            <td colSpan={8} className="table-titles">
              BACK
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={5}>
              Tuesday
            </th>
            <td>Deadlifts</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t1"
                value={toSend.weight_t1 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne"
                value={toSend.t_setOne || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo"
                value={toSend.t_setTwo || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree"
                value={toSend.t_setThree || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour"
                value={toSend.t_setFour || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Bb Rows</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t2"
                value={toSend.weight_t2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne2"
                value={toSend.t_setOne2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo2"
                value={toSend.t_setTwo2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree2"
                value={toSend.t_setThree2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour2"
                value={toSend.t_setFour2 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Db Rows</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t3"
                value={toSend.weight_t3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne3"
                value={toSend.t_setOne3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo3"
                value={toSend.t_setTwo3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree3"
                value={toSend.t_setThree3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour3"
                value={toSend.t_setFour3 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Seated Cable Rows</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t4"
                value={toSend.weight_t4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne4"
                value={toSend.t_setOne4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo4"
                value={toSend.t_setTwo4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree4"
                value={toSend.t_setThree4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour4"
                value={toSend.t_setFour4 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Lat Pulldowns</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t5"
                value={toSend.weight_t5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne5"
                value={toSend.t_setOne5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo5"
                value={toSend.t_setTwo5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree5"
                value={toSend.t_setThree5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour5"
                value={toSend.t_setFour5 || ""}
              />
            </td>
          </tr>

          {/* wednedsday */}
          <tr>
            <td colSpan={8} className="table-titles">
              LEGS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={5}>
              Wednesday
            </th>
            <td>Squats</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w1"
                value={toSend.weight_w1 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne"
                value={toSend.w_setOne || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo"
                value={toSend.w_setTwo || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree"
                value={toSend.w_setThree || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour"
                value={toSend.w_setFour || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Leg Press</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w2"
                value={toSend.weight_w2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne2"
                value={toSend.w_setOne2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo2"
                value={toSend.w_setTwo2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree2"
                value={toSend.w_setThree2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour2"
                value={toSend.w_setFour2 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Goblet Squats</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w3"
                value={toSend.weight_w3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne3"
                value={toSend.w_setOne3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo3"
                value={toSend.w_setTwo3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree3"
                value={toSend.w_setThree3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour3"
                value={toSend.w_setFour3 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Leg Extensions</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w4"
                value={toSend.weight_w4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne4"
                value={toSend.w_setOne4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo4"
                value={toSend.w_setTwo4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree4"
                value={toSend.w_setThree4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour4"
                value={toSend.w_setFour4 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Leg Curls</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w5"
                value={toSend.weight_w5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne5"
                value={toSend.w_setOne5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo5"
                value={toSend.w_setTwo5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree5"
                value={toSend.w_setThree5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour5"
                value={toSend.w_setFour5 || ""}
              />
            </td>
          </tr>

          {/* thursday */}
          <tr>
            <td colSpan={8} className="table-titles">
              SHOULDERS + ABS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={5}>
              Thursday
            </th>
            <td>Bb Ohp</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th1"
                value={toSend.weight_th1 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne"
                value={toSend.th_setOne || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo"
                value={toSend.th_setTwo || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree"
                value={toSend.th_setThree || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour"
                value={toSend.th_setFour || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Db Press</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th2"
                value={toSend.weight_th2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne2"
                value={toSend.th_setOne2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo2"
                value={toSend.th_setTwo2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree2"
                value={toSend.th_setThree2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour2"
                value={toSend.th_setFour2 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Lateral Raises</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th3"
                value={toSend.weight_th3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne3"
                value={toSend.th_setOne3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo3"
                value={toSend.th_setTwo3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree3"
                value={toSend.th_setThree3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour3"
                value={toSend.th_setFour3 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Rear Delt Fly's</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th4"
                value={toSend.weight_th4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne4"
                value={toSend.th_setOne4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo4"
                value={toSend.th_setTwo4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree4"
                value={toSend.th_setThree4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour4"
                value={toSend.th_setFour4 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Abs</td>
            <td>4x10+reps</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th5"
                value={toSend.weight_th5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne5"
                value={toSend.th_setOne5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo5"
                value={toSend.th_setTwo5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree5"
                value={toSend.th_setThree5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour5"
                value={toSend.th_setFour5 || ""}
              />
            </td>
          </tr>

          {/* friday */}
          <tr>
            <td colSpan={8} className="table-titles">
              ARMS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={5}>
              Friday
            </th>
            <td>Db Curls</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f1"
                value={toSend.weight_f1 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne"
                value={toSend.f_setOne || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo"
                value={toSend.f_setTwo || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree"
                value={toSend.f_setThree || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour"
                value={toSend.f_setFour || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Preacher Curls</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f2"
                value={toSend.weight_f2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne2"
                value={toSend.f_setOne2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo2"
                value={toSend.f_setTwo2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree2"
                value={toSend.f_setThree2 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour2"
                value={toSend.f_setFour2 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Db Skull-Crushers</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f3"
                value={toSend.weight_f3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne3"
                value={toSend.f_setOne3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo3"
                value={toSend.f_setTwo3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree3"
                value={toSend.f_setThree3 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour3"
                value={toSend.f_setFour3 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Rope Pressdowns</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f4"
                value={toSend.weight_f4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne4"
                value={toSend.f_setOne4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo4"
                value={toSend.f_setTwo4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree4"
                value={toSend.f_setThree4 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour4"
                value={toSend.f_setFour4 || ""}
              />
            </td>
          </tr>
          <tr>
            <td>Calves</td>
            <td>4x10+reps</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f5"
                value={toSend.weight_f5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne5"
                value={toSend.f_setOne5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo5"
                value={toSend.f_setTwo5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree5"
                value={toSend.f_setThree5 || ""}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour5"
                value={toSend.f_setFour5 || ""}
              />
            </td>
          </tr>
        </tbody>

        {/* table footer */}
        <tfoot>
          <tr>
            <th scope="row">Saturday</th>
            <td
              colSpan={7}
              style={{ backgroundColor: "#ffd700", textAlign: "center" }}
            >
              Rest
            </td>
          </tr>

          <tr>
            <th scope="row">Sunday</th>
            <td
              colSpan={7}
              style={{ backgroundColor: "#ffd700", textAlign: "center" }}
            >
              Rest
            </td>
          </tr>
        </tfoot>
      </table>
      {toShow ? <WorkoutDataRequestPopup data={history} close={close} /> : null}
      <Buttons adds={handleSubmit} getData={getFiveDaySplit} />
    </div>
  );
}
