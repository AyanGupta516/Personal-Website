import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
export default function Experience() {
    const [HoveredTab, setIsHovered] = useState(null)
    const [LightMode] = useContext(AppContext)
    const experience_heading_style= {color: LightMode ? '#e65596': '#BB8FCE', fontWeight: 'bold', fontSize: '1.5rem'}
    const experience_paragraph_style= {color: LightMode ? 'black': 'white', fontSize: '1.25rem'}
    const HandleHovered = (tab) => {
        setIsHovered(tab)
    }
    useEffect(() => {
        if (LightMode) {
          document.body.classList.add('light-mode');
        } else {
          document.body.classList.remove('light-mode');
        }
      }, [LightMode]);
    return (
    <div style = {{}}>
        <h1 style = {{color: LightMode ? '#5596e6' : "#3BBA9C", fontWeight:'bold', fontSize: '2rem', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '3.5rem'}}> Experience </h1>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '2.5rem', paddingRight: '2.5rem', maxWidth: '1200px'}}>
            <NavLink  to = '/Experience/UHResearch'style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem', backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'UH' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("UH")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> University of Houston Real-Time Systems Lab</h1>
                <p style = {experience_paragraph_style}> Optimizing traffic control in real time under Professor Albert Cheng</p>
            </NavLink>
            <NavLink to = '/Experience/Qwell' style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem',  backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'Qwell' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("Qwell")} onMouseLeave={() => setIsHovered(null)}> 
                <h1 style = {experience_heading_style}> Qwell </h1>
                <p style = {experience_paragraph_style}> Working as a full stack developer for local Austin Nonprofit Qwell</p>
            </NavLink>
            <NavLink to = '/Experience/UTResearch' style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem',  backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'Astro' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("Astro")} onMouseLeave={() => setIsHovered(null)}>
                <h1 style = {experience_heading_style}> UT-Austin Astronomy & Computer Science Research</h1>
                <p style = {experience_paragraph_style}> Using ML to cluster galaxies based on their emission lines </p>
            </NavLink>
        <h1 style = {{color: LightMode ? '#5596e6' : "#3BBA9C", fontWeight:'bold', fontSize: '2rem', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '0px'}}> Projects </h1>
        <NavLink to = '/Experience/SE' style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem',  backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'SE' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("SE")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> System Emulator </h1>
                <p style = {experience_paragraph_style}> Implemented Instruction Processing and Cache Managment in C</p>
        </NavLink>
        <NavLink to = '/Experience/Huffman' style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem',  backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'HE' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("HE")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> Huffman Encoding </h1>
                <p style = {experience_paragraph_style}> Implemented Huffman's File Compression & Decompression Algorithim </p>
        </NavLink>
        <NavLink to = '/Experience/Hackathon'style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem',  backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'PW' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("PW")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> ConfessTX </h1>
                <p style = {experience_paragraph_style}> An anonymous UT-Austin Student Forum </p>
        </NavLink>
        <NavLink to = '/Experience/Tennis'style = {{display: 'block', borderRadius: '1.75rem', padding: '1rem', marginBottom: '2rem',  backgroundColor: LightMode ? '#D3D3D3' : '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'Tennis' ? 'scale(1.1)' : 'scale(1)', width: '50vw'}} onMouseEnter={() => HandleHovered("Tennis")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> Exploring Tennis Statistics </h1>
                <p style = {experience_paragraph_style}> Used data visualization in Python to explore tennis player's attributes </p>
        </NavLink>

        </div>
    </div>
    )
}