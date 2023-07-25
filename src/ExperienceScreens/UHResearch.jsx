import React from 'react'
import myVideo from '../assets/SUMO.mp4'
export default function UHResearch() {
    return (
        <>
            <h1 style = {{color: '#3BBA9C', position: 'absolute', top: '7.5%', left:'50%', transform: 'translateX(-50%)', width: '800px'}}> Real-Time Systems </h1>
            <p  style = {{color: 'white', position: 'absolute', top: '20.5%', left:'50%', transform: 'translateX(-50%)', fontSize: '18px'}}> Using SUMO, a traffic simulator interface, to run traffic simulations on custom traffic networks through Python scripts configuring the settings of the simulation, such as start and end location, number of vehicles, etc. Working on developing a better way to calculate costs for edges to route vehicles based on Djikstra's Algorithim and possibly implement a Deep Reinforcement Learning model to also route vehicles</p>
            <div style = {{height: '400px', width: '600px', marginTop: '225px'}}>
                <video muted controls style={{ width: '100%', height: '100%'}} >
                    <source src={myVideo} type="video/mp4" />
                </video>
                <p style = {{fontSize: '22px', color: '#BB8FCE', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '86%'}}> Sample Simulation </p>
            </div>
            
        </>
    )
}