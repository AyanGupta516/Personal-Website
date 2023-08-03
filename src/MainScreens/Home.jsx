import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Insta from '../assets/Insta.svg';
import Linkedin from '../assets/Linkedin.svg';
import GitHub from '../assets/github.svg';
export default function Home() {
  const [isHovered, setIsHovered] = useState(null);

  const buttonStyleWithoutHover = {
    color: 'black',
    fontSize: '1.25rem',
    borderRadius: '20px',
    padding: '1rem 1.5rem',
    border: 'solid',
    backgroundColor: '#3BBA9C',
  };

  const buttonStyleWithHover = {
    ...buttonStyleWithoutHover,
    backgroundColor: '#6EE5CD',
  };

  const mouseOver = (tab) => {
    setIsHovered(tab);
  };

  const notmouseOver = () => {
    setIsHovered(null);
  };

  const ButtonStyle = isHovered === 'Contact' ? buttonStyleWithHover : buttonStyleWithoutHover;

  return (
    <>
      <h1 style={{ color: 'white', fontSize: '4rem', marginTop: '0', fontWeight: 'bold' }}>
        Hi, my name is Ayan.
      </h1>
      <h2
        style={{
          color: '#3BBA9C',
          fontSize: '3rem',
          borderBottom: 'solid 2px',
          paddingBottom: '1.5rem', // Adjusted padding to maintain the same size visually
          fontWeight: 'bold',
          marginTop: '-1.875rem', // Adjusted margin to maintain the same size visually
        }}
      >
        I Study CS & Math <a href="https://www.utexas.edu/" style={{ color: '#3BBA9C', fontWeight: 'bold' }}>
          @ UT-Austin
        </a>
      </h2>
      <h1 style={{ color: 'white', fontSize: '1.25rem', marginTop: '-1.25rem', fontWeight: 'bold', textAlign: 'center' }}>
        My current interests lie in Machine Learning, Backend Software Development, and Data Science.
      </h1>
      <h1 style={{ color: 'white', fontSize: '1.25rem', marginTop: '1.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2.5rem' }}>
        Reach me here: ayan.x.gupta@gmail.com
      </h1>
      <NavLink
        to="/Contact"
        onMouseEnter={() => mouseOver('Contact')}
        onMouseLeave={notmouseOver}
        style={ButtonStyle}
      >
        Contact me
      </NavLink>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          bottom: '0',
          left: '0', 
          position: 'fixed'
        }}
      >
        <a href="https://github.com/AyanGupta516" target="_blank" rel="noopener noreferrer" onMouseEnter={() => mouseOver('Git')} onMouseLeave={notmouseOver}>
          <img src={GitHub} style={{ width: '3rem', height: '3rem', opacity: isHovered === 'Git' ? '0.4' : '1' }} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayan-gupta-8042781b0/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => mouseOver('Link')}
          onMouseLeave={notmouseOver}
        >
          <img src={Linkedin} style={{ width: '3rem', height: '3rem', opacity: isHovered === 'Link' ? '0.4' : '1' }} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/ayangupta516/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => mouseOver('Insta')}
          onMouseLeave={notmouseOver}
        >
          <img src={Insta} style={{ width: '3rem', height: '3rem', opacity: isHovered === 'Insta' ? '0.4' : '1' }} alt="Instagram" />
        </a>
      </div>
    </>
  );
}