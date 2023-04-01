
import MultiStep from "react-multistep";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";

import "./prog-track.css";
import "./styles.css";

const steps = [
  { name: "Name A", component: <StepOne /> },
  { name: "Email", component: <StepTwo /> },
  { name: "Password", component: <StepThree /> },
  { name: "Agreement", component: <StepFour /> }
];

function Reg() {
  return (
    <div className="App">
      <MultiStep steps={steps} />
    </div>
  );
}
export default Reg