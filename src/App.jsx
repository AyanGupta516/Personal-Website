
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
import Portfolio from './ExperienceScreens/Portfolio'
import SE from './ExperienceScreens/SE'
import UTResearch from './ExperienceScreens/UTResearch'
import UHResearch from './ExperienceScreens/UHResearch'
import Tennis from './ExperienceScreens/Tennis'

function App() {
  return (
  <>
    <BrowserRouter>
      <UpperNavigationBar/>
      <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/AboutMe' element = {<AboutMe/>} />
          <Route path = '/Experience' element = {<Experience/>} />
          <Route path = '/Skills' element = {<Skills/>} />
          <Route path = '/Contact' element = {<Contact/>} />
          <Route path = '/Experience/UHResearch' element = {<UHResearch/>} />
          <Route path = '/Experience/Qwell' element = {<Qwell/>} />
          <Route path = '/Experience/UTResearch' element = {<UTResearch/>} />
          <Route path = '/Experience/SE' element = {<SE/>} />
          <Route path = '/Experience/Huffman' element = {<Huffman/>} />
          <Route path = '/Experience/Portfolio' element = {<Portfolio/>} />
          <Route path = '/Experience/Tennis' element = {<Tennis/>} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
