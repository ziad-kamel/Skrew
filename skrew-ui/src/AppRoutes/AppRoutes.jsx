import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import One from '../Components/Cards/BasicNumbers/1/One';
import Ten from '../Components/Cards/BasicNumbers/10/Ten';
import Two from '../Components/Cards/BasicNumbers/2/Two';
import Three from '../Components/Cards/BasicNumbers/3/Three';
import Four from '../Components/Cards/BasicNumbers/4/Four';
import Five from '../Components/Cards/BasicNumbers/5/Five';
import Six from '../Components/Cards/BasicNumbers/6/Six';
import Seven from '../Components/Cards/BasicNumbers/7/Seven';
import Eight from '../Components/Cards/BasicNumbers/8/Eight';
import Nine from '../Components/Cards/BasicNumbers/9/Nine';
import CardBack from '../Components/Cards/CardBack/CardBack';
import Swap from '../Components/Cards/ComandCards/SwapCard/Swap';
import Threw from '../Components/Cards/ComandCards/ThrewCard/Threw';
import WatchOneForEveryone from '../Components/Cards/ComandCards/WatchOneForEveryoneCard/WatchOneForEveryone';
import Plus20 from '../Components/Cards/SpecialCards/+20/Plus20';
import MinusOne from '../Components/Cards/SpecialCards/-1/MinusOne';
import Screw from '../Components/Cards/SpecialCards/Screw/Screw';
import Screwdriver from '../Components/Cards/SpecialCards/ScrewDriver/Screwdriver';
import NavBar from '../Components/NavBar/NavBar';
import PlayerCardsBox from '../Components/PlayerCards/PlayerCardsBox';
import Home from '../pages/HomePage/Home';
export default function AppRoutes() {
  return (
    <Router>
      <NavBar />
        <Routes>
            <>
            <Route path='/home' element={<Home/>}/>
            <Route path='/1' element={<One/>}/>
            <Route path='/2' element={<Two/>}/>
            <Route path='/3' element={<Three/>}/>
            <Route path='/4' element={<Four/>}/>
            <Route path='/5' element={<Five/>}/>
            <Route path='/6' element={<Six/>}/>
            <Route path='/7' element={<Seven/>}/>
            <Route path='/8' element={<Eight/>}/>
            <Route path='/9' element={<Nine/>}/>
            <Route path='/10' element={<Ten/>}/>
            <Route path='/swap' element={<Swap/>}/>
            <Route path='/watchOneForEveryone' element={<WatchOneForEveryone/>}/>
            <Route path='/threw' element={<Threw/>}/>
            <Route path='/+20' element={<Plus20/>}/>
            <Route path='/-1' element={<MinusOne/>}/>
            <Route path='/screw' element={<Screw/>}/>
            <Route path='/screwdriver' element={<Screwdriver/>}/>
            <Route path='/back' element={<CardBack/>}/>
            <Route path='/playerCards' element={<PlayerCardsBox/>}/>
            </>
        </Routes>
    </Router>
  )
}
