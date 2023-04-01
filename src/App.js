import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Layout from "./assets/Layout";
import Home from "./Pages/Home";
import './App.css'
import GetID from "./Pages/GetID";
import Admition from "./Pages/Admition";


function App() {
  return <>
  <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admition"  element={<Admition/>} />
        <Route path="/GetID" element={<GetID/>} />
    </Routes>
  </Router>
  </>;
}

export default App;
