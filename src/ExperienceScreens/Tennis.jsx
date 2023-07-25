import React from 'react'
import Radial from '../assets/RadialPlots.png'
import Box from '../assets/BoxPlots.png'
export default function Tennis() {
    return (
        <>
            <h1 style = {{color: '#3BBA9C', position: 'absolute', top: '7.5%', left:'50%', transform: 'translateX(-50%)', width: '800px'}}> Tennis Research </h1>
            <p  style = {{color: 'white', position: 'absolute', top: '20.5%', left:'50%', transform: 'translateX(-50%)', fontSize: '18px', width: '950px'}}> During High School, my interest in tennis and mathematics spurred me to pursue a project between the two. Using Jeff Sackman's database of all professional match information from 2013, I attempeted to plot the performance of my favorite tennis players using different metrics. Using pandas, matplotlib, and Jupyter Notebook, I analyzed how the performance of players changed over time and in respect to different factors such as court type, constructing features such as serve percentage and breakpoint percentage, and splicing the large dataset into smaller datasets. This project was largely explorative and introduced me to using Python for Data Science. </p> 
             <div style = {{display: 'inline-block', justifyContent: 'space-between', height: '400px', width: '1600px', marginTop: '350px', marginLeft: '-165px'}}>
                <img src= {Radial} style = {{height: '100%', width: '40%', marginRight: '50px', border: 'solid 5px', borderColor: '#3BBA9C' }} />
                <img src= {Box} style = {{height: '100%', width: '40%', border: 'solid 5px', borderColor: '#3BBA9C' }} />
             </div>
        </>
    )
}