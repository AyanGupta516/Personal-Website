import React from 'react'
import myVideo from '../assets/SUMO.mp4'
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';

export default function UHResearch() {
    const [LightMode] = useContext(AppContext)

    useEffect(() => {
      if (LightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [LightMode]);
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <h1 style = {{color: LightMode ? '#5596e6': '#3BBA9C', fontSize: '3rem', marginTop: '5%'}}> Real Time Traffic Routing </h1>
            <p  style = {{color: LightMode ? 'black' : 'white',fontSize: '110%', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-1%'}}> Using SUMO, a traffic simulator interface, to run traffic simulations on custom traffic networks through Python scripts configuring the settings of the simulation, such as start and end location, number of vehicles, etc. Working on developing a better way to calculate costs for edges to route vehicles based on Djikstra's Algorithim and possibly implement a Deep Reinforcement Learning model to also route vehicles</p>
            <div style = {{height: '45vh', width: '45vw', display: 'flex', alignItems: 'center', margin: 'auto'}}>
                <video muted controls style={{ width: '100%', height: '100%', marginTop: '5%'}} >
                    <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            
        </div>
    )
}