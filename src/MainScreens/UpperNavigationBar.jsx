import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

export default function UpperNavigationBar() {
    const [isHovered, setIsHovered] = useState(null)
    const handleHovered = (tab) => {
        setIsHovered(tab)
    }
    const removehover = () => {
        setIsHovered(null)
    }
    return (
            <div style={{position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'flex-end', width: '100vw', alignItems:'center', height: '7.5%', backgroundColor: '#252738' }}>
                <NavLink to = '/'  onMouseEnter = {() => handleHovered('Home')} onMouseLeave = {removehover} style = {{color: isHovered === 'Home' ? '#3BBA9C': 'white' , marginRight: '70px', fontWeight:'bold', fontSize: '18px'}}> Home </NavLink>
                <NavLink to = '/AboutMe' onMouseEnter = {() => handleHovered('AboutMe')} onMouseLeave = {removehover} style = {{color: isHovered === 'AboutMe' ? '#3BBA9C': 'white', marginRight: '70px', fontWeight:'bold', fontSize: '18px'}}> About</NavLink>
                <NavLink to = '/Experience' onMouseEnter = {() => handleHovered('Experience')} onMouseLeave = {removehover} style = {{color: isHovered === 'Experience' ? '#3BBA9C': 'white',  marginRight: '70px', fontWeight:'bold', fontSize: '18px'}}> Projects & Experience </NavLink>
                <NavLink to = '/Skills' onMouseEnter = {() => handleHovered('Skills')} onMouseLeave = {removehover} style = {{color: isHovered === 'Skills' ? '#3BBA9C': 'white', marginRight: '70px', fontWeight:'bold', fontSize: '18px'}}> Skills </NavLink>
                <NavLink to = '/Contact' onMouseEnter = {() => handleHovered('Contact')} onMouseLeave = {removehover} style = {{color: isHovered === 'Contact' ? '#3BBA9C': 'white', marginRight: '60px', fontWeight:'bold', fontSize: '18px'}}> Contact</NavLink>
            </div>
    )
}
