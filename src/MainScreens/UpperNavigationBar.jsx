import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../AppContext'

export default function UpperNavigationBar() {
  const [LightMode] = useContext(AppContext)
  const [hovered, setHovered] = useState(null)

  const navItems = [
    { to: '/',         label: 'Home',       key: 'Home' },
    { to: '/Projects', label: 'Projects',   key: 'Projects' },
    { to: '/Experience', label: 'Experience', key: 'Experience' },
    { to: '/Skills',   label: 'Skills',     key: 'Skills' },
    { to: '/Contact',  label: 'Contact',    key: 'Contact' },
  ]

  const containerStyle = {
    position: 'fixed',
    top: 0, left: 0,
    display: 'flex',
    flexWrap: 'wrap',              // allow wrapping on small screens
    justifyContent: 'center',      // center links
    alignItems: 'center',
    width: '100%',
    padding: '0.5rem 2rem',
    margin: '0 auto',
    backgroundColor: LightMode ? '#EAEAEA' : '#252738',
    zIndex: 10
  }

  const linkStyle = (key) => ({
    margin: '0.5rem 1rem',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',              // ensure single-line links
    color: LightMode
      ? (hovered === key ? '#5596e6' : 'black')
      : (hovered === key ? '#3BBA9C' : 'white'),
    transition: 'color 0.2s',
  })
  

  return (
    <div style={containerStyle}>
      {navItems.map(({ to, label, key }) => (
        <NavLink
          key={key}
          to={to}
          style={linkStyle(key)}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}
