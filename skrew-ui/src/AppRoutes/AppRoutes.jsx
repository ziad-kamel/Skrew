import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from '../Components/NavBar/NavBar';
import Home from '../pages/HomePage/Home';
export default function AppRoutes() {
  return (
    <Router>
      <NavBar />
        <Routes>
            <>
            <Route path='/home' element={<Home/>}/>
            </>
        </Routes>
    </Router>
  )
}
