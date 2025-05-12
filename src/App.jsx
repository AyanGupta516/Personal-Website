import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from './MainScreens/Contact' 
import Experience from './MainScreens/Experience'
import Home from './MainScreens/Home'
import Skills from './MainScreens/Skills'
import UpperNavigationBar from './MainScreens/UpperNavigationBar'
import InternshipPage from './MainScreens/Internships'; 
import AppProvider from './AppContext';
import { Analytics } from "@vercel/analytics/react"
import NeuralNetworks from './ExperienceScreens/NeuralNetworks';
import HealthApp from './ExperienceScreens/HealthApp';
import Cura from './ExperienceScreens/Cura';
import Qwell from './ExperienceScreens/Qwell';
import Quest from './ExperienceScreens/Quest';
import UTResearchProject from './ExperienceScreens/UTResearch';
import PintOSProject from './ExperienceScreens/Pintos';
import UHResearch from './ExperienceScreens/UHResearch';


function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <AppProvider>
          <UpperNavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Experience />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Experience' element={<InternshipPage />} />
            <Route path ='/Projects/Neural-Networks' element={<NeuralNetworks />} />
            <Route path ='/Projects/HealthManagementApp' element={<HealthApp />} />
            <Route path ='/Projects/Cura' element={<Cura />} />
            <Route path ='/Projects/Qwell' element={<Qwell />} />
            <Route path = '/Projects/Quest' element={<Quest />} />
            <Route path = '/Projects/UTResearch' element={<UTResearchProject />} />
            <Route path = '/Projects/PintOS' element={<PintOSProject />} />
            <Route path = '/Projects/UHResearch' element={<UHResearch />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
      </>
  )
}

export default App
