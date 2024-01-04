import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch'
import { AppContext } from '../AppContext';
import { useContext} from 'react';
export default function UpperNavigationBar() {
    const [LightMode] = useContext(AppContext)
    const [isHovered, setIsHovered] = useState(null)
    const handleHovered = (tab) => {
        setIsHovered(tab)
    }
    const removehover = () => {
        setIsHovered(null)
    }
    return (
        <>
            <div style={{position: 'fixed', top: '0', left: '0', display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems:'center', height: '7.5%', backgroundColor: LightMode? '#EAEAEA':'#252738', overflow: 'auto', zIndex: 10 }}>
                
                <NavLink to = '/'  onMouseEnter = {() => handleHovered('Home')} onMouseLeave = {removehover} style = {{color: LightMode ? (isHovered === 'Home' ? '#5596e6': 'black') : (isHovered === 'Home' ? '#3BBA9C': 'white') , marginRight: '3.5%', fontWeight:'bold', fontSize: '105%', marginLeft: '47.5%'}}> Home </NavLink>
                <NavLink to = '/AboutMe' onMouseEnter = {() => handleHovered('AboutMe')} onMouseLeave = {removehover} style = {{color: LightMode ? (isHovered === 'AboutMe' ? '#5596e6': 'black') : (isHovered === 'AboutMe' ? '#3BBA9C': 'white'), marginRight: '3.5%', fontWeight:'bold', fontSize: '105%'}}> About</NavLink>
                <NavLink to = '/Projects' onMouseEnter = {() => handleHovered('Projects')} onMouseLeave = {removehover} style = {{color: LightMode ? (isHovered === 'Projects' ? '#5596e6': 'black') : (isHovered === 'Projects' ? '#3BBA9C': 'white'),  marginRight: '3.5%', fontWeight:'bold', fontSize: '105%'}}> Projects </NavLink>
                <NavLink to = '/Experience' onMouseEnter = {() => handleHovered('Experience')} onMouseLeave = {removehover} style = {{color: LightMode ? (isHovered === 'Experience' ? '#5596e6': 'black') : (isHovered === 'Experience' ? '#3BBA9C': 'white'),  marginRight: '3.5%', fontWeight:'bold', fontSize: '105%'}}> Experience </NavLink>
                <NavLink to = '/Skills' onMouseEnter = {() => handleHovered('Skills')} onMouseLeave = {removehover} style = {{color: LightMode ? (isHovered === 'Skills' ? '#5596e6': 'black') : (isHovered === 'Skills' ? '#3BBA9C': 'white'), marginRight: '3.5%', fontWeight:'bold', fontSize: '105%'}}> Skills </NavLink>
                <NavLink to = '/Contact' onMouseEnter = {() => handleHovered('Contact')} onMouseLeave = {removehover} style = {{color: LightMode ? (isHovered === 'Contact' ? '#5596e6': 'black') : (isHovered === 'Contact' ? '#3BBA9C': 'white'), marginRight: '3.5%', fontWeight:'bold', fontSize: '105%'}}> Contact</NavLink>
            </div>
        </>
    )
}
