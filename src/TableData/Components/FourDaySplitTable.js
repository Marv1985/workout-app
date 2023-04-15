import LogOut from "../../LogOut/LogOut";
import Buttons from "./Buttons";
import "/home/marv/react-projects/workout-app/src/TableData/Scss/AllTablesScss/AllTablesCss.css";

export default function FourDaySplitTable() {
  return (
    <div className="table-wrapper">
      <LogOut />
      <table>
        <caption>4 Day Split</caption>

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
              CHEST + TRI'S
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
              Monday
            </th>
            <td>Flat Bb Bench</td>
            <td>4x3-5</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Incline Bb Bench</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Flat Db Bench</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Machine Press</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>DB Skull Crushers</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Machine Pressdowns</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>

          {/* tuesday */}
          <tr>
            <td colSpan={8} className="table-titles">
              BACK + BI'S
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
              Tuesday
            </th>
            <td>Bb Rows</td>
            <td>4x3-5</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Db Rows</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Lat Pulldowns</td>
            <td>4x12-15</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Seated Cable Rows</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Ez Bar Curls</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Db Curls</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
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
              SHOULDERS + ABS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
              Thursday
            </th>
            <td>Bb Ohp</td>
            <td>4x3-5</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Db Press</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Lateral Raises</td>
            <td>4x12-15</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Rear Delt Fly's</td>
            <td>4x12-15</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Cable Crunches</td>
            <td>4x10+reps</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Cable Twists</td>
            <td>4x10+reps</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>

          {/* friday */}
          <tr>
            <td colSpan={8} className="table-titles">
              LEGS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={6}>
              Friday
            </th>
            <td>Deadlifts</td>
            <td>4x3-5</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Leg Press</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Goblet Squats</td>
            <td>4x10-12</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Leg Curls</td>
            <td>4x12-15</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Seated Calf Raises</td>
            <td>4x12-15</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
            </td>
          </tr>
          <tr>
            <td>Standing Calf Raises</td>
            <td>4x12-15</td>
            <td>
              <input type="text" id="weight" />
            </td>
            <td>
              <input type="text" id="set-one" />
            </td>
            <td>
              <input type="text" id="set-two" />
            </td>
            <td>
              <input type="text" id="set-three" />
            </td>
            <td>
              <input type="text" id="set-four" />
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
      <Buttons />
    </div>
  );
}
