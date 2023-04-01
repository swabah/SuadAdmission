import React, { useState } from "react";

export const StepThree = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handlePasswordChanged = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChanged = (event) => {
    setPasswordConfirm(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="w-full">
          <label>Password</label>
          <input
            className="w-full required"
            placeholder="Password"
            type="password"
            onChange={handlePasswordChanged}
            value={password}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="w-full py-5">
          <label>Confirm password</label>
          <input
            className="w-full"
            placeholder="Confirm Password"
            type="password"
            onChange={handlePasswordConfirmChanged}
            value={passwordConfirm}
          />
        </div>
      </div>
    </div>
  );
};
