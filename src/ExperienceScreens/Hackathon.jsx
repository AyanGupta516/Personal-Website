import React from 'react'
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
export default function Hackathon() {
    const [LightMode] = useContext(AppContext)

    useEffect(() => {
      if (LightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [LightMode]);
    return (
        <div>
            <h1 style = {{color: LightMode ? '#5596e6': '#3BBA9C', position: 'absolute', top: '7.5%', left:'50%', transform: 'translateX(-50%)'}}> ConfessTX </h1>
            <p  style = {{color: LightMode ? 'black' : 'white', position: 'absolute', top: '20.5%', left:'50%', transform: 'translateX(-50%)', fontSize: '18px'}}> ConfessTX was a simple web-app built using React and Meteor that served as an anonymous forum for UT-Austin students. Students could make new posts that were updated in real-time and rendered on the page with no refreshes </p>
        </div>
    )
}