import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
      </Router>
    </>
  );
}

export default App;
