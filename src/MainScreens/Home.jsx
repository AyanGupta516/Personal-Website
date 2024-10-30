import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Insta from '../assets/Insta.svg';
import Linkedin from '../assets/Linkedin.svg';
import GitHub from '../assets/github.svg';
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
import Face from '../assets/Headshot.jpeg';
import Typed from 'react-typed';
export default function Home() {
  const [LightMode] = useContext(AppContext)

  useEffect(() => {
    if (LightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [LightMode]);


  const [isHovered, setIsHovered] = useState(null);
  const buttonStyleWithoutHover = {
    color: 'black',
    fontSize: '1.25rem',
    borderRadius: '20px',
    padding: '1rem 1.5rem',
    border: 'solid',
    margin: '10px 0', // Add space above and below NavLink
    backgroundColor: LightMode ? '#5596e6' : '#3BBA9C',
    marginTop: '100px'

  };

  const buttonStyleWithHover = {
    ...buttonStyleWithoutHover,
    backgroundColor: LightMode ? '#69AAFA': '#6EE5CD',
  };

  const mouseOver = (tab) => {
    setIsHovered(tab);
  };

  const notmouseOver = () => {
    setIsHovered(null);
  };

  const imageStyle = {
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '6px solid #000', // Set the border color and width as per your requirement
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  };

  const textContainerStyle = {
    paddingTop: '30px',
    paddingBottom: '60px',
    paddingLeft: '45px',
    paddingRight: '200px',
    textAlign: 'left',
  };

  const ButtonStyle = isHovered === 'Experience' ? buttonStyleWithHover : buttonStyleWithoutHover;

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style = {{borderBottom: '2px solid #FFF', paddingBottom: '20px', fontSize: '24px'}}>HELLO MY NAME IS</h2>
          <Typed
            strings={['Ayan Gupta']}
            typeSpeed={60}
            backSpeed={80}
            loop={false}
            showCursor={false}
          >
            <h1 style={{ fontSize: '84px', marginTop: '-5px' }}></h1>
          </Typed>
          <h3 style = {{fontSize: '20px', marginTop: '-35px'}}>CS & MATHEMATICS STUDENT @ <a href = 'https://www.utexas.edu/' target='_blank' rel='noopener noreferrer' style={{ color: 'inherit', fontWeight: 'bold' }}> UT-AUSTIN</a></h3>
          <div style={{ marginTop: '50px' }}>
            <NavLink
              to="/Projects"
              onMouseEnter={() => mouseOver('Experience')}
              onMouseLeave={notmouseOver}
              style={ButtonStyle}
            >
              VIEW MY WORK
            </NavLink>
          </div>
        </div>
        <div>
          <img src={Face} alt="Ayan Gupta" style={imageStyle} />
        </div>
      </div>
      
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