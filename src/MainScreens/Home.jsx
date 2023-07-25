import React, {useState} from 'react'
import UpperNavigationBar from './UpperNavigationBar'
import {NavLink} from 'react-router-dom'
import Insta from '../assets/Insta.svg'
import Linkedin from '../assets/Linkedin.svg'
export default function Home() {
    const [isHovered, setIsHovered] = useState(null)

    const buttonStyleWithoutHover = {color: 'black', marginTop: '15px', fontSize:'24px', borderRadius: '20px', padding: '10px', border: 'solid', backgroundColor: '#3BBA9C', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}

    const buttonStyleWithHover = {color: 'black', marginTop: '15px', fontSize:'24px', borderRadius: '20px', padding: '10px', border: 'solid', backgroundColor: '#6EE5CD', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}
    const mouseOver = (tab) => {
        setIsHovered(tab)
    }
    const notmouseOver = () => {
        setIsHovered(null)
    }
    const ButtonStyle = isHovered === 'Contact' ? buttonStyleWithHover : buttonStyleWithoutHover
    return (
        
        <>
            <UpperNavigationBar />
            <h1 style = {{color:'white', fontSize:'64px', marginTop: '0px', fontWeight: 'bold'}}> Hi, my name is Ayan. </h1>
            <h2 style = {{color:'#3BBA9C', fontSize: '48px', borderBottom:  'solid', paddingBottom: '30px', fontWeight: 'bold', marginTop: '-30px'}}> I Study CS & Math <a href= 'https://www.utexas.edu/' style = {{color:'#3BBA9C', fontWeight: 'bold'}}>@ UT-Austin </a></h2>
            <h1 style = {{color:'white', fontSize:'20px', marginTop: '-20px', fontWeight: 'bold', textAlign: 'center'}}> My current interests lie in Machine Learning, Backend Software Development, and Data Science. </h1>
            <h1 style = {{color:'white', fontSize:'20px', marginTop: '20px', fontWeight: 'bold', textAlign: 'center'}}> Reach me here: ayan.x.gupta@gmail.com </h1>
            <NavLink to = '/Contact' onMouseEnter = {() => mouseOver('Contact')} onMouseLeave={notmouseOver} style = {ButtonStyle}> 
            Contact me</NavLink>
            <div style = {{height: '50px', width: '100px', position: 'absolute', left:'0%', bottom: '0%', display: 'inline-block'}}>
            <a href="https://www.linkedin.com/in/ayan-gupta-8042781b0/" target="_blank" rel="noopener noreferrer" onMouseEnter = {() => mouseOver('Link')} onMouseLeave={notmouseOver}>
                <img src={Linkedin} style={{ width: '50%', height: '100%', opacity: isHovered === 'Link'? '.6': '1' }} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/ayangupta516/" target="_blank" rel="noopener noreferrer" onMouseEnter = {() => mouseOver('Insta')} onMouseLeave={notmouseOver}>
                <img src = {Insta} style = {{width: '50%', height: '100%', opacity: isHovered === 'Insta'? '.6': '1'}}/>
            </a>
            </div>

        </>
        
    )
}
