import React from 'react'


import Qwell from '../assets/QwellSS.png'
import Galaxy from '../assets/Galaxy.png'
import QuestImage from '../assets/Quest.png'
import Card from './Card';
import SEImage from '../assets/Pipeline.png'
import TennisImage from '../assets/Tennis_Racket_and_Balls.jpeg'
import CuraImage from '../assets/Cura.png'
import PintOSImage from '../assets/pintos.png'
import fitbitImage from '../assets/fitbit.png'
import NeuralNets from "../assets/NeuralNets.png"
import Sumo from "../assets/SUMO.png"






export default function Experience() {

    const QwellData = {
        title: 'QWELL',
        description: 'An app to connect LGBTQ+ members to allied businesses in the Greater Austin Area',
        dates: 'Jan 2023 - Dec 2023',
        imageURL : Qwell,
        link: 'Qwell'
      };

      const UTResearch = {
        title: 'Geometry of Space Research Lab',
        description: 'Developed a ML approach to further advance of field of emission line galaxy classification',
        dates: 'August 2023 - March 2024',
        imageURL : Galaxy,
        link: 'UTResearch'

      };

      const PintOS = {
        title: 'PintOS',
        description: 'Developed and integrated operating system features for the toy OS, PintOS',
        dates: 'September 2023 - November 2023',
        imageURL : PintOSImage,
        link: 'PintOS'
      };

      const UH = {
        imageUrl: "",
        title: 'University of Houston Real-Time Systems Lab',
        description: 'Optimized real-time traffic control using Python & SUMO',
        dates: 'June 2023 - July 2023',
        imageURL : Sumo,
        link: 'UHResearch'
      }

      const Quest = {
        title: 'Quest',
        description: 'An app that pushes users out of their comfort zone, gamifying trying new things',
        dates: 'October 2023',
        imageURL: QuestImage,
        link: 'Quest'
      }
      

      const Cura = {
        title: "Cura",
        description: 'An AI based App that curates personalized treatment plans for caregivers to give patients.',
        dates: 'Jan 2024 - April 2024',
        imageURL: CuraImage,
        link: 'Cura'
      }


      const HealthManagementApp = {
        title: 'Health Management Application',
        description: 'An application to streamline the data collection process for a UT Research Study',
        dates: 'Feb 2024 - April 2024',
        imageURL: fitbitImage,
        link: 'HealthManagementApp',
      }

      const NeuralNetProjects = {
        title: 'Neural Network Projects',
        description: 'A couple of projects I did leveraging Neural Networks',
        dates: 'April 2024, May 2025',
        link: 'Neural-Networks',
        imageURL: NeuralNets

      }

    
    return (
    <div style = {{}}>
        <h1 style = {{color: "#3BBA9C", fontWeight:'bold', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '3.5rem', fontSize: '40px'}}> Projects </h1>
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem', marginLeft: '8rem', marginRight: '8rem'}}>
        <Card {...NeuralNetProjects}/>
        <Card {...HealthManagementApp} />
        <Card {...Cura} />
        <Card {...UTResearch}/>
        <Card {...QwellData}/>
        <Card {...Quest}/>
        <Card {...PintOS}/>
        <Card {...UH}/>
        </div>
    </div>
    )
}