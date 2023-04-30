import React from "react";

export default function ResetButton(props) {
  const { reset } = props;

  return (
    <div className="buttons-wrapper">
      <button type="submit" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
