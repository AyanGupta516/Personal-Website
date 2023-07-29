import React from 'react'
export default function UTResearch() {
    return (
        <div style = {{display: 'flex', flexDirection: 'column', aligItems: 'center', 'alignItems': 'center'}}>
            <h1 style = {{color: '#3BBA9C', width: '60vw', fontSize: '3.5vw', marginTop: '-2.5%'}}> Galaxy Classification Research </h1>
            <div style = {{width: '90vw', marginTop: '-2.5%'}}>
                <h1 style = {{color: '#BB8FCE', fontSize: '2rem', textAlign: 'left', marginTop: '4%', borderBottom: 'solid', width: '21vw'}}> Summer 2023 Work </h1>
                <ul style = {{textAlign: 'left', listStyle: 'disc', marginLeft: '-2.5%', width: '90vw', marginTop: '2%'}}>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Furtherned my knowledge of astronomical concepts through SDSS explorations, readings, and online courses</li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Built an intermediate understanding of ML through Stanford's Machine Learning Specialization CourseEra course </li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Developed a research problem to investigate in the fall, familarizing myself with the topic and potential approaches through past academic papers </li>
                </ul>
                <h1 style = {{color: '#BB8FCE', fontSize: '2rem', textAlign: 'left', marginTop: '4%', borderBottom: 'solid', width: '16vw'}}> Fall 2023 Work </h1>
                <ul style = {{textAlign: 'left', listStyle: 'disc', marginLeft: '-2.5%', width: '90vw', marginTop: '2%'}}>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Working collaboratively in a team of three, we are conducting research on the clustering of galaxies based on their emission lines </li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}>  Our study involves utilizing data from the Sloan Digital Sky Survey (SDSS) to develop a Machine Learning clustering algorithm</li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> The primary goal of this project is to write a research paper for publication </li>
                </ul>
            </div>
        </div>
    )
}