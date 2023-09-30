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
            <Route path='/one' element={<One cardNumber={1} cardScore={1} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            <Route path='/two' element={<One cardNumber={2} cardScore={2} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            <Route path='/three' element={<One cardNumber={3} cardScore={3} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            <Route path='/four' element={<One cardNumber={4} cardScore={4} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            <Route path='/five' element={<One cardNumber={5} cardScore={5} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            <Route path='/six' element={<One cardNumber={6} cardScore={6} numberColor={"#3f1561"} cardBaseColor={"white"}/>}/>
            </>
        </Routes>
    </Router>
  )
}
