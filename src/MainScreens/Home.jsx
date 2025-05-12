import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Insta from '../assets/Insta.svg';
import Linkedin from '../assets/Linkedin.svg';
import GitHub from '../assets/github.svg';
import Face from '../assets/Headshot.jpeg';
import Typed from 'react-typed';

export default function Home() {
  const [isHovered, setIsHovered] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  const textContainerStyle = {
    flex: '1 1 300px',
    minWidth: '300px',
    padding: '20px',
    textAlign: 'left',
  };

  const imageContainerStyle = {
    flex: '1 1 300px',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  };

  const imageStyle = {
    borderRadius: '100%',
    border: '6px solid #5596e6',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '400px',
    height: '400px',
    objectFit: 'cover',
  };

  const buttonBase = {
    color: '#fff',
    fontSize: '1.25rem',
    borderRadius: '20px',
    padding: '1rem 1.5rem',
    border: 'none',
    textDecoration: 'none',
    backgroundColor: '#5596e6',
    transition: 'background-color 0.2s',
  };

  const socialContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    gap: '10px',
  };

  const mouseOver = (tab) => setIsHovered(tab);
  const mouseOut  = () => setIsHovered(null);

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '10px', fontSize: '24px' }}>
            HELLO MY NAME IS
          </h2>

          <Typed
            strings={['Ayan Gupta']}
            typeSpeed={60}
            backSpeed={80}
            loop={false}
            showCursor={false}
          >
            <h1 style={{ fontSize: '84px', marginTop: '-5px' }} />
          </Typed>

          <h3 style={{ fontSize: '20px', marginTop: '-35px' }}>
            CS & MATHEMATICS STUDENT @ UT-AUSTIN
          </h3>

          <div style={{ marginTop: '50px' }}>
            <NavLink
              to="/Projects"
              style={{
                ...buttonBase,
                backgroundColor: isHovered === 'Experience' ? '#69AAFA' : buttonBase.backgroundColor,
              }}
              onMouseEnter={() => mouseOver('Experience')}
              onMouseLeave={mouseOut}
            >
              VIEW MY WORK
            </NavLink>
          </div>
        </div>

        <div style={imageContainerStyle}>
          <img src={Face} alt="Ayan Gupta" style={imageStyle} />
        </div>
      </div>

      <div style={socialContainerStyle}>
        {[
          { href: 'https://github.com/AyanGupta516',   img: GitHub, key: 'Git',  alt: 'GitHub'   },
          { href: 'https://linkedin.com/in/ayan-gupta-8042781b0/', img: Linkedin, key: 'Link', alt: 'LinkedIn' },
          { href: 'https://instagram.com/ayangupta101/',        img: Insta,    key: 'Insta',alt: 'Instagram'}
        ].map(({ href, img, key, alt }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => mouseOver(key)}
            onMouseLeave={mouseOut}
          >
            <img
              src={img}
              alt={alt}
              style={{
                width: '3rem',
                height: '3rem',
                opacity: isHovered === key ? 0.4 : 1,
                transition: 'opacity 0.2s'
              }}
            />
          </a>
        ))}
      </div>
    </>
  );
}
