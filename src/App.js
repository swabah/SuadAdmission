import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Layout from "./assets/Layout";
import Home from "./Pages/Home";
import './App.css'
import GetID from "./Pages/GetID";
import Admission from "./Pages/Admission";


function App() {
  return <>
  <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Admission"  element={<Admission/>} />
        <Route path="/GetID" element={<GetID/>} />
    </Routes>
  </Router>
  </>;
}

export default App;
