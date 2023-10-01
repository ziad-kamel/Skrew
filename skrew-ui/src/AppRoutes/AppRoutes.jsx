import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ViewMineCard from '../Components/Cards/BasicNumbers/ComandCards/ShowCards/ViewMineCard/ViewMineCard';
import ViewOtherCard from '../Components/Cards/BasicNumbers/ComandCards/ShowCards/viewOthersCard/ViewOtherCard';
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
            <Route path='comand/seven' element={<ViewMineCard cardNumber={7} cardScore={7} numberColor={"#05797E"} cardText={"بص في ورقتك"}/>}/>
            <Route path='comand/eight' element={<ViewMineCard cardNumber={8} cardScore={8} numberColor={"#05797E"} cardText={"بص في ورقتك"}/>}/>
            <Route path='comand/nine' element={<ViewOtherCard cardNumber={9} cardScore={9} numberColor={"#05797E"} cardText={"بص في ورقة غيرك"}/>}/>
            <Route path='comand/ten' element={<ViewOtherCard cardNumber={10} cardScore={10} numberColor={"#05797E"} cardText={"بص في ورقة غيرك"}/>}/>
            </>
        </Routes>
    </Router>
  )
}
