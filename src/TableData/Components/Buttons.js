import "/home/marv/react-projects/workout-app/src/TableData/Scss/Buttons/Buttons.css";

export default function Buttons(props) {
  const { adds, getData } = props;

  return (
    <div className="buttons-wrapper">
      <button type="submit" onClick={adds}>
        Submit
      </button>
      <button onClick={getData}>History</button>
    </div>
  );
}
