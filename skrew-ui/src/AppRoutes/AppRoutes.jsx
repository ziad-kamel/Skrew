import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import One from '../Components/Cards/BasicNumbers/GenericCard/GenericCard';
import NavBar from '../Components/NavBar/NavBar';
import Home from '../pages/HomePage/Home';
export default function AppRoutes() {
  return (
    <Router>
      <NavBar />
        <Routes>
            <>
            <Route path='/home' element={<Home/>}/>
            <Route path='/card' element={<One cardNumber={1} cardScore={1} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            </>
        </Routes>
    </Router>
  )
}
