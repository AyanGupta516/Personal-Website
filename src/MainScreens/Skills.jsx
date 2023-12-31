import React from 'react'
import {useState} from 'react'
import PythonLogo from '../assets/python.svg'
import JavaLogo from '../assets/java.svg'
import CPPLogo from '../assets/C++.svg'
import CLogo from '../assets/C.svg'
import JSLogo from '../assets/JS.svg'
import ReactLogo from '../assets/react.svg'
import HTMLLogo from '../assets/html.svg'
import CSSLogo from '../assets/css.svg'
import DSLogo from '../assets/anaconda.svg'
import GitLogo from '../assets/git.svg'
import TSLogo from '../assets/typescript.svg'
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
export default function Skills() {
    const [LightMode] = useContext(AppContext)
    const [isHovered, setIsHovered] = useState(null)
    useEffect(() => {
        if (LightMode) {
          document.body.classList.add('light-mode');
        } else {
          document.body.classList.remove('light-mode');
        }
      }, [LightMode]);
    const textstyle = {fontWeight: 'bold', color: LightMode ? 'black' :'white', fontSize: '1.75rem'}
    const imagestyle = {width: '50%', height: 'auto', justifyContent: 'center', paddingTop: '3.5rem', margin: 'auto', alignItems: 'center'}
    const imagesRow1 = [
        {id: 1, src: PythonLogo, alt : 'Python', text: 'Python', link: 'https://www.python.org/'},
        {id: 2, src: JavaLogo, alt : 'Java', text: 'Java', link: 'https://www.java.com/en/'},
        {id:3, src: CPPLogo, alt: 'C++', text: 'C++', link: 'https://cplusplus.com/'},
        {id:4, src:CLogo, alt: 'C', text: 'C', link: 'https://en.wikipedia.org/wiki/C_(programming_language)'}  
    ]
    const imagesRow2 = [
        {id: 1, src: JSLogo, alt : 'JS', text: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {id: 2, src: ReactLogo, alt : 'React', text: 'React', link: 'https://react.dev/'},
        {id:3, src: HTMLLogo, alt: 'html++', text: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {id:4, src:CSSLogo, alt: 'CSS', text: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},  
    ]
    const imagesRow3 = [
        {id:1, src:TSLogo, alt: 'TS', text: 'TypeScript', link: 'https://www.typescriptlang.org/'},
        {id: 2, src: DSLogo, alt : 'DS', text: 'Python DS & ML', link: 'https://docs.anaconda.com/free/navigator/index.html'},
        {id: 3, src: GitLogo, alt : 'Git', text: 'Git', link: 'https://git-scm.com/'},
        {id:4, src: ReactLogo, alt: 'React Native', text: 'React Native', link: 'https://reactnative.dev/'} 
    ]
    return (
        <>
           <div style = {{height: '100%', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style = {{display: 'flex', color: LightMode ? '#5596e6' : '#3BBA9C', fontSize: '3rem', fontWeight: 'bold', justifyContent: 'center', borderBottom: 'solid', width: '75%', paddingBottom: '1rem', textAlign: 'center', marginTop: '3rem'}}>
                Skills
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '0px', flexWrap: 'wrap'}}>
                {imagesRow1.map((image) => (
                <a href = {image.link} target="_blank" style = {{margin: '0px'}}>
                    <div key = {image.id} style = {{border: 'dotted', alignItems: 'center', display: 'flex', height: '15.75rem', width: '15.75rem', flexDirection: 'column', justifyContent: 'center', opacity: isHovered === image.alt ? '.65' : '1' }} onMouseEnter={() => setIsHovered(image.alt)} onMouseLeave={() => setIsHovered(null)}>
                        <img src ={image.src} alt = {image.alt} style = {imagestyle}/>
                        <p style = {textstyle}> {image.text} </p>
                    </div>
                </a>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '0px',flexWrap: 'wrap' }}>
                {imagesRow2.map((image) => (
                <a href = {image.link} target="_blank" style = {{margin: '0px'}}>
                    <div key = {image.id} style = {{border: 'dotted', height: '15.75rem', width: '15.75rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',  opacity: isHovered === image.alt ? '.65' : '1'  }} onMouseEnter={() => setIsHovered(image.alt)} onMouseLeave={() => setIsHovered(null)}>
                        <img src ={image.src} alt = {image.alt} style = {imagestyle}/>
                        <p style = {textstyle}> {image.text} </p>
                    </div>
                </a>
                ))}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '0px', flexWrap: 'wrap'}}>
                {imagesRow3.map((image) => (
                <a href = {image.link} target="_blank" style = {{margin: '0px'}}>
                    <div key = {image.id} style = {{border: 'dotted', height: '15.75rem', width: '15.75rem', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',  opacity: isHovered === image.alt ? '.65' : '1'  }} onMouseEnter={() => setIsHovered(image.alt)} onMouseLeave={() => setIsHovered(null)}>
                        <img src ={image.src} alt = {image.alt} style = {imagestyle}/>
                        <p style = {textstyle}> {image.text} </p>
                    </div>
                </a>
                ))}
            </div>
            
           </div>
        </>
        
    )
}
