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

export default function ABRoutine() {
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
  const colRef = collection(db, "ABsplit");

  const getRef = query(
    collection(db, "ABsplit"),
    where("uid", "==", user),
    orderBy("date")
  );

  const getABSplit = async () => {
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
      collection(db, "ABsplit"),
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
    const docRef = doc(db, "ABsplit", `${toDelete}`);
    deleteDoc(docRef)
      .then(() => {})
      .catch(() => {});
  }, [toDelete]);

  useEffect(() => {
    const getHistory = query(
      collection(db, "ABsplit"),
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
  const addsABSplit = async () => {
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

      //tuesdays weights
      weight_t1: toSend.weight_t1 || "",
      weight_t2: toSend.weight_t2 || "",
      weight_t3: toSend.weight_t3 || "",
      weight_t4: toSend.weight_t4 || "",
      weight_t5: toSend.weight_t5 || "",
      weight_t6: toSend.weight_t6 || "",

      //thursdays weights
      weight_th1: toSend.weight_th1 || "",
      weight_th2: toSend.weight_th2 || "",
      weight_th3: toSend.weight_th3 || "",
      weight_th4: toSend.weight_th4 || "",
      weight_th5: toSend.weight_th5 || "",
      weight_th6: toSend.weight_th6 || "",

      //fridays weights
      weight_f1: toSend.weight_f1 || "",
      weight_f2: toSend.weight_f2 || "",
      weight_f3: toSend.weight_f3 || "",
      weight_f4: toSend.weight_f4 || "",
      weight_f5: toSend.weight_f5 || "",
      weight_f6: toSend.weight_f6 || "",

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
      t_setOne6: toSend.t_setOne6 || "",
      t_setTwo6: toSend.t_setTwo6 || "",
      t_setThree6: toSend.t_setThree6 || "",
      t_setFour6: toSend.t_setFour6 || "",

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
      th_setOne6: toSend.th_setOne6 || "",
      th_setTwo6: toSend.th_setTwo6 || "",
      th_setThree6: toSend.th_setThree6 || "",
      th_setFour6: toSend.th_setFour6 || "",

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
    addsABSplit();
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
        <caption>A/B Routine</caption>

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
              A
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
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
            <td>Incline Bb Bench</td>
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
            <td>Db Ohp</td>
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
            <td>Lateral Raises</td>
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
            <td>DB Skull Crushers</td>
            <td>4x10-12</td>
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
            <td>Cable Twists</td>
            <td>4x10-12</td>
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

          {/* tuesday */}
          <tr>
            <td colSpan={8} className="table-titles">
              B
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
              Tuesday
            </th>
            <td>Bb Rows</td>
            <td>4x3-5</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t1"
                value={toSend.weight_t1 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne"
                value={toSend.t_setOne || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo"
                value={toSend.t_setTwo || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree"
                value={toSend.t_setThree || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour"
                value={toSend.t_setFour || ""}
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
                id="weight_t2"
                value={toSend.weight_t2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne2"
                value={toSend.t_setOne2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo2"
                value={toSend.t_setTwo2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree2"
                value={toSend.t_setThree2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour2"
                value={toSend.t_setFour2 || ""}
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
                id="weight_t3"
                value={toSend.weight_t3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne3"
                value={toSend.t_setOne3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo3"
                value={toSend.t_setTwo3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree3"
                value={toSend.t_setThree3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour3"
                value={toSend.t_setFour3 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Leg Curls</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t4"
                value={toSend.weight_t4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne4"
                value={toSend.t_setOne4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo4"
                value={toSend.t_setTwo4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree4"
                value={toSend.t_setThree4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour4"
                value={toSend.t_setFour4 || ""}
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
                id="weight_t5"
                value={toSend.weight_t5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne5"
                value={toSend.t_setOne5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo5"
                value={toSend.t_setTwo5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree5"
                value={toSend.t_setThree5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour5"
                value={toSend.t_setFour5 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Seated Calf Raises</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_t6"
                value={toSend.weight_t6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setOne6"
                value={toSend.t_setOne6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setTwo6"
                value={toSend.t_setTwo6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setThree6"
                value={toSend.t_setThree6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="t_setFour6"
                value={toSend.t_setFour6 || ""}
                disabled={disabled}
              />
            </td>
          </tr>

          {/* wednedsday */}
          <tr>
            <th scope="row">Wednesday</th>
            <td
              colSpan={7}
              style={{ backgroundColor: "#ffd700", textAlign: "center" }}
            >
              Rest
            </td>
          </tr>

          {/* thursday */}
          <tr>
            <td colSpan={8} className="table-titles">
              A
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
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
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne"
                value={toSend.th_setOne || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo"
                value={toSend.th_setTwo || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree"
                value={toSend.th_setThree || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour"
                value={toSend.th_setFour || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Db Bench</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th2"
                value={toSend.weight_th2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne2"
                value={toSend.th_setOne2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo2"
                value={toSend.th_setTwo2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree2"
                value={toSend.th_setThree2 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour2"
                value={toSend.th_setFour2 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Db Fly's</td>
            <td>4x12-15</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th3"
                value={toSend.weight_th3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne3"
                value={toSend.th_setOne3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo3"
                value={toSend.th_setTwo3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree3"
                value={toSend.th_setThree3 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour3"
                value={toSend.th_setFour3 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Rope Pressdowns</td>
            <td>4x10+reps</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th4"
                value={toSend.weight_th4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne4"
                value={toSend.th_setOne4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo4"
                value={toSend.th_setTwo4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree4"
                value={toSend.th_setThree4 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour4"
                value={toSend.th_setFour4 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Cable Crunches</td>
            <td>4x10+reps</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th5"
                value={toSend.weight_th5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne5"
                value={toSend.th_setOne5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo5"
                value={toSend.th_setTwo5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree5"
                value={toSend.th_setThree5 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour5"
                value={toSend.th_setFour5 || ""}
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <td>Machine Calf Raises</td>
            <td>4x10-12</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="weight_th6"
                value={toSend.weight_th6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setOne6"
                value={toSend.th_setOne6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setTwo6"
                value={toSend.th_setTwo6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setThree6"
                value={toSend.th_setThree6 || ""}
                disabled={disabled}
              />
            </td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                id="th_setFour6"
                value={toSend.th_setFour6 || ""}
                disabled={disabled}
              />
            </td>
          </tr>

          {/* friday */}
          <tr>
            <td colSpan={8} className="table-titles">
              B
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
              Friday
            </th>
            <td>Deadlifts</td>
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
            <td>Goblet Squats</td>
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
            <td>4x10-12</td>
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
            <td>Seated Rows</td>
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
            <td>Db Curls</td>
            <td>4x12-15</td>
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
            <td>Rear Delt Fly's</td>
            <td>4x12-15</td>
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
        <Buttons adds={handleSubmit} getData={getABSplit} />
      ) : null}
      {toReset ? <ResetButton reset={reset} /> : null}
    </div>
  );
}
