import React from 'react'
import PythonLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/python.svg'
import JavaLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/java.svg'
import CPPLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/C++.svg'
import CLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/C.svg'
import JSLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/JS.svg'
import ReactLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/react.svg'
import HTMLLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/html.svg'
import CSSLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/css.svg'
import DSLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/anaconda.svg'
import GitLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/git.svg'
import TSLogo from '/Users/ayan/Desktop/Dev/personal-website/src/assets/typescript.svg'
export default function Skills() {
    const textstyle = {fontWeight: 'bold', color: 'white', fontSize: '28px'}
    const imagestyle = {width: '50%', height: '50%', justifyContent: 'center', paddingTop: '50px', margin: 'auto', alignItems: 'center'}
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
           <div style = {{height: '950px', overflow: 'auto'}}>
            <h1 style = {{color:'#3BBA9C', fontSize: '48px', fontWeight: 'bold', justifyContent: 'center', position:'absolute', top:'7.5%', left: '50%', transform: 'translateX(-50%)', borderBottom: 'solid', width: '500px', paddingBottom: '15px'}}>
                Skills
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row', border: 'dotted', position: 'absolute', top: '22.5%', left: '50%', transform: 'translateX(-50%)'}}>
                {imagesRow1.map((image) => (
                <a href = {image.link}>
                    <div key = {image.id} style = {{border: 'dotted', height: '250px', width: '250px', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <img src ={image.src} alt = {image.alt} style = {imagestyle}/>
                        <p style = {textstyle}> {image.text} </p>
                    </div>
                </a>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', border: 'dotted', position: 'absolute', top: '53.2%', left: '50%', transform: 'translateX(-50%)'}}>
                {imagesRow2.map((image) => (
                <a href = {image.link}>
                    <div key = {image.id} style = {{border: 'dotted', height: '250px', width: '250px', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <img src ={image.src} alt = {image.alt} style = {imagestyle}/>
                        <p style = {textstyle}> {image.text} </p>
                    </div>
                </a>
                ))}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', border: 'dotted', position: 'absolute', top: '83.9%', left: '50%', transform: 'translateX(-50%)'}}>
                {imagesRow3.map((image) => (
                <a href = {image.link}>
                    <div key = {image.id} style = {{border: 'dotted', height: '250px', width: '250px', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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