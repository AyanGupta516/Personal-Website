
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Contact from './MainScreens/Contact' 
import Experience from './MainScreens/Experience'
import Home from './MainScreens/Home'
import Skills from './MainScreens/Skills'
import UpperNavigationBar from './MainScreens/UpperNavigationBar'
import AboutMe from './MainScreens/AboutMe'
import InternshipPage from './MainScreens/Internships'; 
import AppProvider from './AppContext';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
  <div>
    <Analytics/>
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
