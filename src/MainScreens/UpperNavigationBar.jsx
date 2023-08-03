import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import ToggleSwitch from './ToggleSwitch'

export default function UpperNavigationBar() {
    const [isHovered, setIsHovered] = useState(null)
    const handleHovered = (tab) => {
        setIsHovered(tab)
    }
    const removehover = () => {
        setIsHovered(null)
    }
    return (
        <>
            <div style={{position: 'fixed', top: '0', left: '0', display: 'flex', justifyContent: 'flex-end', width: '100vw', alignItems:'center', height: '7.5%', backgroundColor: '#252738', overflow: 'auto', zIndex: 1 }}>
                <ToggleSwitch/>
                <NavLink to = '/'  onMouseEnter = {() => handleHovered('Home')} onMouseLeave = {removehover} style = {{color: isHovered === 'Home' ? '#3BBA9C': 'white' , marginRight: '3.5%', fontWeight:'bold', fontSize: '110%', marginLeft: '47.5%'}}> Home </NavLink>
                <NavLink to = '/AboutMe' onMouseEnter = {() => handleHovered('AboutMe')} onMouseLeave = {removehover} style = {{color: isHovered === 'AboutMe' ? '#3BBA9C': 'white', marginRight: '3.5%', fontWeight:'bold', fontSize: '110%'}}> About</NavLink>
                <NavLink to = '/Experience' onMouseEnter = {() => handleHovered('Experience')} onMouseLeave = {removehover} style = {{color: isHovered === 'Experience' ? '#3BBA9C': 'white',  marginRight: '3.5%', fontWeight:'bold', fontSize: '110%'}}> Projects & Experience </NavLink>
                <NavLink to = '/Skills' onMouseEnter = {() => handleHovered('Skills')} onMouseLeave = {removehover} style = {{color: isHovered === 'Skills' ? '#3BBA9C': 'white', marginRight: '3.5%', fontWeight:'bold', fontSize: '110%'}}> Skills </NavLink>
                <NavLink to = '/Contact' onMouseEnter = {() => handleHovered('Contact')} onMouseLeave = {removehover} style = {{color: isHovered === 'Contact' ? '#3BBA9C': 'white', marginRight: '3.5%', fontWeight:'bold', fontSize: '110%'}}> Contact</NavLink>
            </div>
        </>
    )
}
