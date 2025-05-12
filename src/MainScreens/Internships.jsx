import React from 'react';
import { Chrono } from "react-chrono";

const internships = [
  {
    title: 'SpaceX',
    cardTitle: 'Software Engineering Intern',
    cardSubtitle: 'Summer 2025',
    cardDetailedText: 'Incoming Software Engineering Intern on Falcon Engineering team'
  },
  {
    title: 'Texas Convergent',
    cardTitle: 'Technical Project Lead',
    cardSubtitle: 'August 2024 - Present',
    cardDetailedText: 'Technical Project Lead for Jump Finance, a company dedicated to providing financial support for students in West Africa and enhancing the software infrastructure of their universities. Leading a team of 8 developers to build a full stack course registration platform.'
  },
  {
    title: 'University of Texas at Austin',
    cardTitle: 'Teaching Assistant',
    cardSubtitle: 'August 2024 - Present',
    cardDetailedText: 'Teaching Assistant for a Python Programming class at UT-Austin. Supporting a class of 600+ students by teaching and assisting in core programming concepts'
  },
  {
    title: 'Hewlett Packards Enterprise',
    cardTitle: 'Software Engineering Intern',
    cardSubtitle: 'Summer 2024',
    cardDetailedText: 'Worked on implementing frontend features for HPE Compute Ops Mangement Platform. In addition, develped a new FastAPI based Kubernetes microservice to forward UI Error logs to a logging service ',
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
    <div style={{ width: '90%', maxWidth: '800px', margin: '32.5px auto' }}>
      <Chrono
        items={internships}
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        theme={{
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
