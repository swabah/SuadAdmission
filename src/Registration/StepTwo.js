import React, { useState } from "react";

export const StepTwo = () => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailConfirmChanged = (event) => {
    setEmailConfirm(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="w-full">
          <label>Your email</label>
          <input
            className="w-full required"
            placeholder="test@mailbox.com"
            type="email"
            onChange={handleEmailChanged}
            value={email}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="w-full py-5">
          <label>Confirm email</label>
          <input
            className="w-full"
            placeholder="Confirm email"
            type="email"
            onChange={handleEmailConfirmChanged}
            value={emailConfirm}
          />
        </div>
      </div>
    </div>
  );
};
