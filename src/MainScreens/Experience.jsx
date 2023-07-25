import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Experience() {
    const [HoveredTab, setIsHovered] = useState(null)
    const experience_heading_style= {color: '#BB8FCE', fontWeight: 'bold', fontSize: '24px'}
    const experience_paragraph_style= {color: 'white', fontSize: '20px'}
    const HandleHovered = (tab) => {
        setIsHovered(tab)
    }
    return (
    <>
    <div style = {{height: '1350px'}}>
        <h1 style = {{color: "#3BBA9C", fontWeight:'bold', fontSize: '32px', position: 'absolute', top: '8.5%', left: '50%', transform: 'translateX(-50%)'}}> Experience </h1>
        <div style = {{position: 'absolute', top: '17.5%', left: '50%', transform: 'translateX(-50%)'}}>
            <NavLink  to = '/Experience/UHResearch'style = {{display: 'block', borderRadius: '20px', padding: '20px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'UH' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("UH")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> University of Houston Real-Time Systems Lab</h1>
                <p style = {experience_paragraph_style}> Optimizing traffic control in real time under Professor Albert Cheng</p>
            </NavLink>
            <NavLink to = '/Experience/Qwell' style = {{display: 'block', borderRadius: '20px', padding: '20px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'Qwell' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("Qwell")} onMouseLeave={() => setIsHovered(null)}> 
                <h1 style = {experience_heading_style}> Qwell </h1>
                <p style = {experience_paragraph_style}> Working as a full stack developer for local Austin Nonprofit Qwell</p>
            </NavLink>
            <NavLink to = '/Experience/UTResearch' style = {{display: 'block', borderRadius: '20px', padding: '20px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'Astro' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("Astro")} onMouseLeave={() => setIsHovered(null)}>
                <h1 style = {experience_heading_style}> UT-Austin Astronomy & Computer Science Research</h1>
                <p style = {experience_paragraph_style}> Using ML to cluster galaxies based on their emission lines </p>
            </NavLink>
        </div>
        <h1 style = {{color: "#3BBA9C", fontWeight:'bold', fontSize: '32px', position: 'absolute', top: '79.5%', left: '50%', transform: 'translateX(-50%)'}}> Projects </h1>
        <div style = {{position: 'absolute', top: '87.5%', left: '50%', transform: 'translateX(-50%)'}}>
        <NavLink to = '/Experience/SE' style = {{display: 'block', borderRadius: '20px', padding: '15px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'SE' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("SE")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> System Emulator </h1>
                <p style = {experience_paragraph_style}> Implemented Instruction Processing and Cache Managment in C</p>
        </NavLink>
        <NavLink to = '/Experience/Huffman' style = {{display: 'block', borderRadius: '20px', padding: '15px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'HE' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("HE")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> Huffman Encoding </h1>
                <p style = {experience_paragraph_style}> Implemented Huffman's File Compression & Decompression Algorithim </p>
        </NavLink>
        <NavLink to = '/Experience/Portfolio'style = {{display: 'block', borderRadius: '20px', padding: '15px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'PW' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("PW")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> Personal Website </h1>
                <p style = {experience_paragraph_style}> Developed Personal Portfolio Page using React </p>
        </NavLink>
        <NavLink to = '/Experience/Tennis'style = {{display: 'block', borderRadius: '20px', padding: '15px', marginBottom: '30px', backgroundColor: '#454545', transition: 'transform 0.1s ease', transform: HoveredTab === 'Tennis' ? 'scale(1.1)' : 'scale(1)', height: '110px', width: '650px'}} onMouseEnter={() => HandleHovered("Tennis")} onMouseLeave={() => setIsHovered(null)} >
                <h1 style = {experience_heading_style}> Exploring Tennis Statistics </h1>
                <p style = {experience_paragraph_style}> Used data visualization in Python to explore tennis player's attributes </p>
        </NavLink>

        </div>
    </div>
    </>
    )
}