import React from 'react'
import myVideo from '../assets/SUMO.mp4'
export default function UHResearch() {
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <h1 style = {{color: '#3BBA9C'}}> Real Time Traffic Routing </h1>
            <p  style = {{color: 'white',fontSize: '110%', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-1%'}}> Using SUMO, a traffic simulator interface, to run traffic simulations on custom traffic networks through Python scripts configuring the settings of the simulation, such as start and end location, number of vehicles, etc. Working on developing a better way to calculate costs for edges to route vehicles based on Djikstra's Algorithim and possibly implement a Deep Reinforcement Learning model to also route vehicles</p>
            <div style = {{height: '45vh', width: '45vw', display: 'flex', alignItems: 'center', margin: 'auto'}}>
                <video muted controls style={{ width: '100%', height: '100%', marginTop: '5%'}} >
                    <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            
        </div>
    )
}