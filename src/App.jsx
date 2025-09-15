import React from "react";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project"

function App() {
  return (
   <>
       <Navbar/>

  <Routes>

    <Route path="/" element={<Home />}/>

     <Route path="/About" element={<About />} />  
        <Route path="/Project" element={<Project />} /> 

  </Routes>
   </>
  );
}

export default App;
