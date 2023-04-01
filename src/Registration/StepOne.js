import React, { useState } from "react";

export const StepOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChanged = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChanged = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="w-full ">
          <label>First Name</label>
          <input
            className="w-full "
            placeholder="First Name"
            type="text"
            onChange={handleFirstNameChanged}
            value={firstName}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="w-full py-5">
          <label>Last Name</label>
          <input
            className="w-full"
            placeholder="Last Name"
            type="text"
            onChange={handleLastNameChanged}
            value={lastName}
          />
        </div>
      </div>
    </div>
  );
};
