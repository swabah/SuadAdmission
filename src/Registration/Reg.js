
import MultiStep from "react-multistep";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";

// import "./prog-track.css";
import "./styles.css";

const steps = [
  { name: "Personal Info", component: <StepOne/> },
  { name: "Company Info", component: <StepTwo/> },
  { name: "Business Hours", component: <StepThree /> },
  { name: "Email Setup", component: <StepFour /> },
];
const prevStyle = {
  background: "#F7FAFC",
  borderWidth: "0px",
  color: "#333333",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "600",
  padding: "0.55em 2em",
  border: "1px solid #EEEEEE",
  marginRight: "1rem",
};
const nextStyle = {
  background: "#dd2f6e",
  borderWidth: "0px",
  color: "#fff",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "600",
  padding: "0.55em 2em",
};

function Reg() {
  return (
    <div className="App">
       <MultiStep
        //  showNavigation={true}
         steps={steps}
         prevStyle={prevStyle}
         nextStyle={nextStyle}
      />
    </div>
  );
}
export default Reg