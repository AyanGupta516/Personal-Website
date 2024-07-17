import React from 'react';
import { Chrono } from "react-chrono";


const internships = [
  {
    title: 'Hewlett Packards Enterprise',
    cardTitle: 'Software Engineering Intern',
    cardSubtitle: 'Summer 2024',
    cardDetailedText: 'SWE Intern for HPE Compute Ops Management.',
    
  },
  {
    title: 'University of Houston',
    cardTitle: 'Research Intern',
    cardSubtitle: 'Summer 2023',
    cardDetailedText: 'Optimized real-time traffic control by strategically routing vehicles in a network to satisfy vehicle deadlines and minimize average travel time, using Python & SUMO (Simulation of Urban Mobility)'
  },
];

const InternshipPage = () => {
  return (
    <div style={{ width: '800px', height: '1050px', margin: '32.5px' }}>
        <Chrono items={internships} mode="VERTICAL_ALTERNATING" hideControls = {true} theme={{
          primary: 'white',
          secondary: 'transparent',
          cardBgColor: 'white',
          titleColor: 'white',
          titleColorActive: '#3BBA9C',
        }}
       fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.75rem',
          cardTitle: '1rem',
          title: '1rem',
        }}
      />
    </div>
  );
};

export default InternshipPage;
