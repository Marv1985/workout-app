import "/home/marv/react-projects/workout-app/src/WorkoutDataRequestPopup/Scss/WorkoutDataRequestPopup.css";

export default function WorkoutDataRequestPopup(props) {
  const { data, close, getData } = props;

  return (
    <div className="Popup-wrapper">
      <div className="popup">
        <div className="p1">
          <h1>Select a date</h1>

          {data.map((dat, index) => (
            <ul onClick={getData} key={index}>
              <li>{dat}</li>
            </ul>
          ))}
        </div>

        <div className="popup-button">
          <button onClick={close}>close</button>
        </div>
      </div>
    </div>
  );
}
