import React from 'react'
export default function UTResearch() {
    return (
        <div style = {{display: 'flex', flexDirection: 'column', aligItems: 'center', 'alignItems': 'center', marginBottom: '3%'}}>
            <h1 style = {{color: '#3BBA9C', width: '60%', fontSize: '3rem'}}> Galaxy Classification Research </h1>
            <div style = {{width: '90vw', marginTop: '-2.5%'}}>
                <h1 style = {{color: '#BB8FCE', fontSize: '2rem', textAlign: 'left', marginTop: '4%', borderBottom: 'solid', width: '24%'}}> Summer 2023 Work </h1>
                <ul style = {{textAlign: 'left', listStyle: 'disc', paddingLeft: '2.5%', width: '82.5%', marginTop: '2%'}}>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Furtherned my knowledge of astronomical concepts through SDSS explorations, readings, and online courses</li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Built an intermediate understanding of ML through Stanford's Machine Learning Specialization CourseEra course </li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Developed a research problem to investigate in the fall, familarizing myself with the topic and potential approaches through past academic papers </li>
                </ul>
                <h1 style = {{color: '#BB8FCE', fontSize: '2rem', textAlign: 'left', marginTop: '4%', borderBottom: 'solid', width: '18.5%'}}> Fall 2023 Work </h1>
                <ul style = {{textAlign: 'left', listStyle: 'disc', paddingLeft: '2.5%', width: '82.5%', marginTop: '2%'}}>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> Working collaboratively in a team of three, we are conducting research on the clustering of galaxies based on their emission lines </li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}>  Our study involves utilizing data from the Sloan Digital Sky Survey (SDSS) to develop a Machine Learning clustering algorithm</li>
                    <li style = {{color: 'lightgrey', fontSize: '1.15rem', marginBottom: '1.25rem'}}> The primary goal of this project is to write a research paper for publication </li>
                </ul>
            </div>
        </div>
    )
}