import React, { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Layout from "./assets/Layout";
import Home from "./Pages/Home";
import './App.css'
import GetID from "./Pages/GetID";
import AdmissionForm from "./Pages/AdmissionForm";


function App() {
  const [IsAuth,setIsAuth] = useState(localStorage.getItem("IsAuth",false))
  return <>
  <Router>
    <Routes>
        <Route path="/" element={<Home/>} IsAuth={IsAuth} setIsAuth={setIsAuth}/>
        <Route path="/Admission" IsAuth={IsAuth} element={<AdmissionForm/>} />
        <Route path="/GetID" setIsAuth={setIsAuth} IsAuth={IsAuth} element={<GetID/>} />
    </Routes>
  </Router>
  </>;
}

export default App;
