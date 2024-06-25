import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ReportFilter from './components/ReportFilter';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AddCourse from './components/AddCourse';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

 

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReportFilter/>}></Route>
        <Route path="add" element={<AddCourse/>}>
        </Route>
      </Routes>
    </BrowserRouter>

    <Contact/>

    </>
  );
}

export default App;
