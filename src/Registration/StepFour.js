import React, { useState } from "react";

export const StepFour = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckedChanged = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="row">
        <div className="ten w-full columns terms w-full">
          <span>By clicking "Accept" I agree that:</span>
          <ul className="docs-terms w-full py-5">
            <li>
              I have read and accepted the <a href="#">User Agreement</a>
            </li>
            <li>
              I have read and accepted the <a href="#">Privacy Policy</a>
            </li>
            <li>I am at least 18 years old</li>
          </ul>
          <label>
            <input
            className="w-5 h-5"
              type="checkbox"
              checked={checked}
              onChange={handleCheckedChanged}
              autoFocus
            />
            <span> Accept </span>
          </label>
        </div>
      </div>
    </div>
  );
};
