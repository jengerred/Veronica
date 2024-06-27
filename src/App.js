import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Ghost from './Pages/Ghost';
import NavBar from "./Components/Navbar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ghost" element={<Ghost />} />
      </Routes>
    </Router>
  );
}

export default App;