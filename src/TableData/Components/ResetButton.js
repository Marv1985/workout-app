import React from "react";

export default function ResetButton({ reset }) {
  return (
    <div className="buttons-wrapper">
      <button data-testid="button" type="submit" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
