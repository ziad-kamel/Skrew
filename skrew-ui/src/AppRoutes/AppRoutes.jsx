import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GenericCard from '../Components/Cards/BasicNumbers/GenericCard/GenericCard';
import NavBar from '../Components/NavBar/NavBar';
import Home from '../pages/HomePage/Home';

export default function AppRoutes() {
  return (
    <Router>
      <NavBar />
        <Routes>
            <>
            <Route path='/home' element={<Home/>}/>
            <Route path='/one' element={<GenericCard cardNumber={1} cardScore={1} />}/>
            <Route path='/two' element={<GenericCard cardNumber={2} cardScore={2} />}/>
            <Route path='/three' element={<GenericCard cardNumber={3} cardScore={3} />}/>
            <Route path='/four' element={<GenericCard cardNumber={4} cardScore={4} />}/>
            <Route path='/five' element={<GenericCard cardNumber={5} cardScore={5} />}/>
            <Route path='/six' element={<GenericCard cardNumber={6} cardScore={6} />}/>
            </>
        </Routes>
    </Router>
  )
}
