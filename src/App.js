import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import './App.css'
import GetID from "./Pages/GetID";
import AdmissionForm from "./Pages/AdmissionForm";


function App() {
  return <>
  <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Admission" element={<AdmissionForm/>} />
        <Route path="/GetID" element={<GetID/>} />
    </Routes>
  </Router>
  </>;
}

export default App;
