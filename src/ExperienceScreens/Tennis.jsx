import React from 'react';
import Radial from '../assets/RadialPlots.png';
import Box from '../assets/BoxPlots.png';

export default function Tennis() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#3BBA9C', fontSize: '3rem', marginTop: '0' }}>Tennis Research</h1>
      <p style={{ color: 'white', fontSize: '1.15rem', width: '75%', marginBottom: '5%', marginTop: '0%' }}>
        During High School, my interest in tennis and mathematics spurred me to pursue a project between the two. Using
        Jeff Sackman's database of all professional match information from 2013, I attempted to plot the performance of my
        favorite tennis players using different metrics. Using pandas, matplotlib, and Jupyter Notebook, I analyzed how
        the performance of players changed over time and in respect to different factors such as court type, constructing
        features such as serve percentage and breakpoint percentage, and splicing the large dataset into smaller datasets.
        This project was largely explorative and introduced me to using Python for Data Science.
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'space-between', marginRight: '17.5%' }}>
          <img src={Radial} style={{ height: '100%', width: '60.5%', border: 'solid 5px', borderColor: '#3BBA9C', marginRight: '2.5%' }} alt="Radial Plots" />
          <img src={Box} style={{ height: '100%', width: '57.5%', border: 'solid 5px', borderColor: '#3BBA9C' }} alt="Box Plots" />
      </div>
    </div>
  );
}
