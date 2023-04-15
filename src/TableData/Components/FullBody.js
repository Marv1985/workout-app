import LogOut from "../../LogOut/LogOut";
import Buttons from "./Buttons";
import "/home/marv/react-projects/workout-app/src/TableData/Scss/AllTablesScss/AllTablesCss.css";

export default function FullBody() {
  return (
    <div className="table-wrapper">
      <LogOut />
      <table>
        <caption>Full Body Routine</caption>

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
              FULL BODY
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={7}>
              Monday
            </th>
            <td>Squats</td>
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
            <td>Bb Incline Bench</td>
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
            <td>Bb Rows</td>
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
            <td>Bb Ohp</td>
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
            <td>Rope Pushdowns</td>
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
          <tr>
            <td>Cable Crunches</td>
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
              FULL BODY
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={7}>
              Wednesday
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
            <td>Bb Curls</td>
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
            <td>Db Skull Crushers</td>
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
            <td>Seated Calf Raises</td>
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
              FULL BODY
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={7}>
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
            <td>Db bench</td>
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
          <tr>
            <td>Standing Calf Raises</td>
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
