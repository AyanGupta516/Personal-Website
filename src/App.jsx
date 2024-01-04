
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Contact from './MainScreens/Contact' 
import Experience from './MainScreens/Experience'
import Home from './MainScreens/Home'
import Skills from './MainScreens/Skills'
import UpperNavigationBar from './MainScreens/UpperNavigationBar'
import AboutMe from './MainScreens/AboutMe'
import Qwell from './ExperienceScreens/Qwell'
import Huffman from './ExperienceScreens/Huffman'
import Hackathon from './ExperienceScreens/Hackathon'
import SE from './ExperienceScreens/SE'
import UTResearch from './ExperienceScreens/UTResearch'
import UHResearch from './ExperienceScreens/UHResearch'
import Tennis from './ExperienceScreens/Tennis'
import InternshipPage from './MainScreens/Internships'; 
import AppProvider from './AppContext';
import { AppContext } from './AppContext';
import { useContext} from 'react';
function App() {
  return (
  <div>
    <BrowserRouter>
    <AppProvider>
      <UpperNavigationBar/>
      <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/AboutMe' element = {<AboutMe/>} />
          <Route path = '/Projects' element = {<Experience/>} />
          <Route path = '/Skills' element = {<Skills/>} />
          <Route path = '/Contact' element = {<Contact/>} />
          <Route path = '/Experience' element = {<InternshipPage/>} />
      </Routes>
    </AppProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
