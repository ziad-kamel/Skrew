import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from '../pages/HomePage/Home';
export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <>
            <Route path='/home' element={<Home/>}/>
            </>
        </Routes>
    </Router>
  )
}
