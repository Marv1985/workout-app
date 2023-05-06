import "/home/marv/react-projects/workout-app/src/WorkoutDataRequestPopup/Scss/WorkoutDataRequestPopup.css";

export default function WorkoutDataRequestPopup(props) {
  const { data, close, getData, remove } = props;

  return (
    <div className="Popup-wrapper">
      <div className="popup">
        <div className="p1">
          <h1>Select a date</h1>

          {data.map((dat, index) => (
            <div className="history" key={index}>
              <ul onClick={getData}>
                <li>{dat}</li>
              </ul>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div onClick={remove} className="delete">
                  Delete
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="popup-button">
          <button onClick={close}>close</button>
        </div>
      </div>
    </div>
  );
}
