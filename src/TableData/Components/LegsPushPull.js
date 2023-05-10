import LogOut from "../../LogOut/LogOut";
import Buttons from "./Buttons";
import "/home/marv/react-projects/workout-app/src/TableData/Scss/AllTablesScss/AllTablesCss.css";
import { useEffect, useState } from "react";
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, onAuthStateChanged } from "../../FirebaseConfig/FirebaseConfig";
import moment from "moment";
import WorkoutDataRequestPopup from "../../WorkoutDataRequestPopup/WorkoutDataRequestPopup";
import ResetButton from "./ResetButton";
import { animateScroll as scroll } from "react-scroll";
import { getAuth } from "firebase/auth";

export default function LegsPushPull() {
  //disable input fields
  const [disabled, setDisabled] = useState(false);

  //history data
  const [history, setHistory] = useState([]);

  //display data
  const [displayHistory, setDisplayHistory] = useState();

  //popup state
  const [toShow, setToShow] = useState(false);

  //table input state
  const [toSend, setToSend] = useState({});

  //buttons state
  const [toReset, setToReset] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  //data to delete state
  const [toDelete, setToDelete] = useState();

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

  //get uid
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser();
      }
    });
  }, []);

  //get dates for data from firestore
  const colRef = collection(db, "LegsPushPullDay");

  const getRef = query(
    collection(db, "LegsPushPullDay"),
    where("uid", "==", user),
    orderBy("date")
  );

  const getLegsPushPullSplit = async () => {
    let data = [];
    await getDocs(getRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push(doc.data().date);
        setHistory(data);
      });
    });
    setToShow(true);
  };

  //click on menu to get and add firebase data to table
  const getData = (e) => {
    e.preventDefault();
    const collection = e.target.innerText;
    setDisplayHistory(collection);
    close();
    setToReset(true);
    setShowButtons(false);
    setDisabled(true);
    scroll.scrollToTop({
      duration: 800,
    });
  };

  //delete function
  function remove(e) {
    //get date text and remove excess text
    const tea = e.target.parentNode.parentNode.innerText.replace("Delete", "");
    var cleanerArray = [];
    cleanerArray.push(tea.trim());

    //query database using date text
    const getHistory = query(
      collection(db, "LegsPushPullDay"),
      where("date", "==", `${cleanerArray}`)
    );

    //Deletes locally. Checks if cleanerArray value matches history value and then return the popup menu's
    //values minus the cleanerArray value
    if (history.includes(`${cleanerArray}`)) {
      setHistory(history.filter((e) => e !== `${cleanerArray}`));
    }

    //get id
    getDocs(getHistory).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setToDelete(doc.id);
      });
    });
  }

  useEffect(() => {
    //use id to delete from firestore database
    const docRef = doc(db, "LegsPushPullDay", `${toDelete}`);
    deleteDoc(docRef)
      .then(() => {})
      .catch(() => {});
  }, [toDelete]);

  useEffect(() => {
    const getHistory = query(
      collection(db, "LegsPushPullDay"),
      where("date", "==", `${displayHistory}`)
    );

    if (displayHistory !== "") {
      getDocs(getHistory).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setToSend({ ...doc.data(), id: doc.id });
        });
      });
      if (displayHistory === "") {
        getDocs(getHistory).then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setToSend({ ...doc.data(), id: doc.id });
          });
        });
      }
    }
  }, [displayHistory]);

  //get time and date
  const date = moment().format("MMMM Do YYYY h:mm:ss a");

  //add data to firebase
  const addsLegsPushPullSplit = async () => {
    const newComment = {
      date: date,
      uid: user,

      //mondays weights
      weight_m1: toSend.weight_m1 || "",
      weight_m2: toSend.weight_m2 || "",
      weight_m3: toSend.weight_m3 || "",
      weight_m4: toSend.weight_m4 || "",
      weight_m5: toSend.weight_m5 || "",
      weight_m6: toSend.weight_m6 || "",
      weight_m7: toSend.weight_m7 || "",

      //wednesdays weights
      weight_w1: toSend.weight_w1 || "",
      weight_w2: toSend.weight_w2 || "",
      weight_w3: toSend.weight_w3 || "",
      weight_w4: toSend.weight_w4 || "",
      weight_w5: toSend.weight_w5 || "",
      weight_w6: toSend.weight_w6 || "",
      weight_w7: toSend.weight_w7 || "",
      weight_w8: toSend.weight_w8 || "",

      //fridays weights
      weight_f1: toSend.weight_f1 || "",
      weight_f2: toSend.weight_f2 || "",
      weight_f3: toSend.weight_f3 || "",
      weight_f4: toSend.weight_f4 || "",
      weight_f5: toSend.weight_f5 || "",
      weight_f6: toSend.weight_f6 || "",
      weight_f7: toSend.weight_f7 || "",

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
      m_setOne6: toSend.m_setOne6 || "",
      m_setTwo6: toSend.m_setTwo6 || "",
      m_setThree6: toSend.m_setThree6 || "",
      m_setFour6: toSend.m_setFour6 || "",
      m_setOne7: toSend.m_setOne7 || "",
      m_setTwo7: toSend.m_setTwo7 || "",
      m_setThree7: toSend.m_setThree7 || "",
      m_setFour7: toSend.m_setFour7 || "",

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
      w_setOne6: toSend.w_setOne6 || "",
      w_setTwo6: toSend.w_setTwo6 || "",
      w_setThree6: toSend.w_setThree6 || "",
      w_setFour6: toSend.w_setFour6 || "",
      w_setOne7: toSend.w_setOne7 || "",
      w_setTwo7: toSend.w_setTwo7 || "",
      w_setThree7: toSend.w_setThree7 || "",
      w_setFour7: toSend.w_setFour7 || "",
      w_setOne8: toSend.w_setOne8 || "",
      w_setTwo8: toSend.w_setTwo8 || "",
      w_setThree8: toSend.w_setThree8 || "",
      w_setFour8: toSend.w_setFour8 || "",

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
      f_setOne6: toSend.f_setOne6 || "",
      f_setTwo6: toSend.f_setTwo6 || "",
      f_setThree6: toSend.f_setThree6 || "",
      f_setFour6: toSend.f_setFour6 || "",
      f_setOne7: toSend.f_setOne7 || "",
      f_setTwo7: toSend.f_setTwo7 || "",
      f_setThree7: toSend.f_setThree7 || "",
      f_setFour7: toSend.f_setFour7 || "",
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
    if (Object.keys(toSend).length === 0) {
      alert("Please fill in some information before submitting!");
    }
    addsLegsPushPullSplit();
  };

  //reset table
  function reset() {
    setToSend({});
    setToReset(false);
    setShowButtons(true);
    scroll.scrollToTop({
      duration: 800,
    });
    setDisabled(false);
  }

  return (
    <div className="table-wrapper">
      <LogOut />
      <table>
        <caption>Legs Push Pull</caption>

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
              LEGS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={7}>
              Monday
            </th>
            <td>Deadlifts</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m1"
                value={toSend.weight_m1 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne"
                value={toSend.m_setOne || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo"
                value={toSend.m_setTwo || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree"
                value={toSend.m_setThree || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour"
                value={toSend.m_setFour || ""}
                disabled={disabled}
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
                id="weight_m2"
                value={toSend.weight_m2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne2"
                value={toSend.m_setOne2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo2"
                value={toSend.m_setTwo2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree2"
                value={toSend.m_setThree2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour2"
                value={toSend.m_setFour2 || ""}
                disabled={disabled}
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
                id="weight_m3"
                value={toSend.weight_m3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne3"
                value={toSend.m_setOne3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo3"
                value={toSend.m_setTwo3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree3"
                value={toSend.m_setThree3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour3"
                value={toSend.m_setFour3 || ""}
                disabled={disabled}
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
                id="weight_m4"
                value={toSend.weight_m4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne4"
                value={toSend.m_setOne4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo4"
                value={toSend.m_setTwo4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree4"
                value={toSend.m_setThree4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour4"
                value={toSend.m_setFour4 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Seated Calf Raises</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m5"
                value={toSend.weight_m5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne5"
                value={toSend.m_setOne5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo5"
                value={toSend.m_setTwo5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree5"
                value={toSend.m_setThree5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour5"
                value={toSend.m_setFour5 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Standing Calf Raises</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m6"
                value={toSend.weight_m6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne6"
                value={toSend.m_setOne6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo6"
                value={toSend.m_setTwo6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree6"
                value={toSend.m_setThree6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour6"
                value={toSend.m_setFour6 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Cable Crunches</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_m7"
                value={toSend.weight_m7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setOne7"
                value={toSend.m_setOne7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setTwo7"
                value={toSend.m_setTwo7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setThree7"
                value={toSend.m_setThree7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="m_setFour7"
                value={toSend.m_setFour7 || ""}
                disabled={disabled}
              />
            </td>
          </tr>

          {/* tuesday */}
          <tr>
            <th scope="row">Tuesday</th>
            <td
              colSpan={7}
              style={{ backgroundColor: "#ffd700", textAlign: "center" }}
            >
              Rest
            </td>
          </tr>

          {/* wednedsday */}
          <tr>
            <td colSpan={8} className="table-titles">
              PUSH
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={8}>
              Wednesday
            </th>
            <td>Flat Bb Bench</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w1"
                value={toSend.weight_w1 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne"
                value={toSend.w_setOne || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo"
                value={toSend.w_setTwo || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree"
                value={toSend.w_setThree || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour"
                value={toSend.w_setFour || ""}
                disabled={disabled}
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
                id="weight_w2"
                value={toSend.weight_w2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne2"
                value={toSend.w_setOne2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo2"
                value={toSend.w_setTwo2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree2"
                value={toSend.w_setThree2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour2"
                value={toSend.w_setFour2 || ""}
                disabled={disabled}
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
                id="weight_w3"
                value={toSend.weight_w3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne3"
                value={toSend.w_setOne3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo3"
                value={toSend.w_setTwo3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree3"
                value={toSend.w_setThree3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour3"
                value={toSend.w_setFour3 || ""}
                disabled={disabled}
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
                id="weight_w4"
                value={toSend.weight_w4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne4"
                value={toSend.w_setOne4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo4"
                value={toSend.w_setTwo4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree4"
                value={toSend.w_setThree4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour4"
                value={toSend.w_setFour4 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Db Ohp</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w5"
                value={toSend.weight_w5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne5"
                value={toSend.w_setOne5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo5"
                value={toSend.w_setTwo5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree5"
                value={toSend.w_setThree5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour5"
                value={toSend.w_setFour5 || ""}
                disabled={disabled}
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
                id="weight_w6"
                value={toSend.weight_w6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne6"
                value={toSend.w_setOne6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo6"
                value={toSend.w_setTwo6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree6"
                value={toSend.w_setThree6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour6"
                value={toSend.w_setFour6 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>DB Skull Crushers</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w7"
                value={toSend.weight_w7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne7"
                value={toSend.w_setOne7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo7"
                value={toSend.w_setTwo7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree7"
                value={toSend.w_setThree7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour7"
                value={toSend.w_setFour7 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Machine Pressdowns</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_w8"
                value={toSend.weight_w8 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setOne8"
                value={toSend.w_setOne8 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setTwo8"
                value={toSend.w_setTwo8 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setThree8"
                value={toSend.w_setThree8 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="w_setFour8"
                value={toSend.w_setFour8 || ""}
                disabled={disabled}
              />
            </td>
          </tr>

          {/* thursday */}
          <tr>
            <th scope="row">Thursday</th>
            <td
              colSpan={7}
              style={{ backgroundColor: "#ffd700", textAlign: "center" }}
            >
              Rest
            </td>
          </tr>

          {/* friday */}

          <tr>
            <td colSpan={8} className="table-titles">
              PULL
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={7}>
              Friday
            </th>
            <td>Bb Rows</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f1"
                value={toSend.weight_f1 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne"
                value={toSend.f_setOne || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo"
                value={toSend.f_setTwo || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree"
                value={toSend.f_setThree || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour"
                value={toSend.f_setFour || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Db Rows</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f2"
                value={toSend.weight_f2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne2"
                value={toSend.f_setOne2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo2"
                value={toSend.f_setTwo2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree2"
                value={toSend.f_setThree2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour2"
                value={toSend.f_setFour2 || ""}
                disabled={disabled}
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
                id="weight_f3"
                value={toSend.weight_f3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne3"
                value={toSend.f_setOne3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo3"
                value={toSend.f_setTwo3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree3"
                value={toSend.f_setThree3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour3"
                value={toSend.f_setFour3 || ""}
                disabled={disabled}
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
                id="weight_f4"
                value={toSend.weight_f4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne4"
                value={toSend.f_setOne4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo4"
                value={toSend.f_setTwo4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree4"
                value={toSend.f_setThree4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour4"
                value={toSend.f_setFour4 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Ez Bar Curls</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f5"
                value={toSend.weight_f5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne5"
                value={toSend.f_setOne5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo5"
                value={toSend.f_setTwo5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree5"
                value={toSend.f_setThree5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour5"
                value={toSend.f_setFour5 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Db Curls</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_f6"
                value={toSend.weight_f6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne6"
                value={toSend.f_setOne6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo6"
                value={toSend.f_setTwo6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree6"
                value={toSend.f_setThree6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour6"
                value={toSend.f_setFour6 || ""}
                disabled={disabled}
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
                id="weight_f7"
                value={toSend.weight_f7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setOne7"
                value={toSend.f_setOne7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setTwo7"
                value={toSend.f_setTwo7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setThree7"
                value={toSend.f_setThree7 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="f_setFour7"
                value={toSend.f_setFour7 || ""}
                disabled={disabled}
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
      {toShow ? (
        <WorkoutDataRequestPopup
          data={history}
          close={close}
          getData={getData}
          remove={remove}
        />
      ) : null}
      {showButtons ? (
        <Buttons adds={handleSubmit} getData={getLegsPushPullSplit} />
      ) : null}
      {toReset ? <ResetButton reset={reset} /> : null}
    </div>
  );
}
