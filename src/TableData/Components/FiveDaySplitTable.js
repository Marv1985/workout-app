import "/home/marv/react-projects/workout-app/src/TableData/Scss/AllTablesCss.css";

export default function FiveDaySplitTable() {
  return (
    <div className="table-wrapper">
      <table>
        <caption>Workout Routine</caption>

        {/* table head */}
        <thead>
          <tr>
            <th className="day" scope="col">
              DAY
            </th>
            <th scope="col">Exercise</th>
            <th scope="col">Sets x Reps</th>
            <th scope="col">Weight</th>
            <th scope="col">Set 1 Reps</th>
            <th scope="col">Set 2 Reps</th>
            <th scope="col">Set 3 Reps</th>
            <th scope="col">Set 4 Reps</th>
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
            <td>4 x 3-5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Incline Bb Bench</td>
            <td>4x 10-12</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Flat Db Bench</td>
            <td>4 x 10-12</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Machine Press</td>
            <td>4 x 10-12</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cable Fly's</td>
            <td>4 x 12-15</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          {/* thursday */}
          <tr>
            <td colSpan={8} className="table-titles">
              SHOULDERS
            </td>
          </tr>
          <tr>
            <th scope="row" rowSpan={5}>
              Thursday
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>

        {/* table footer */}
        <tfoot>
          <tr>
            <th scope="row">Saturday</th>
            <td
              colSpan={7}
              Style="background-color: #ffd700; text-align: center"
            >
              Rest
            </td>
          </tr>

          <tr>
            <th scope="row">Sunday</th>
            <td
              colSpan={7}
              Style="background-color: #ffd700; text-align: center"
            >
              Rest
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
