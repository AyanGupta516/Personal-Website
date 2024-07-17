import React from 'react'


import Qwell from '../assets/QwellSS.png'
import Galaxy from '../assets/Galaxy.png'
import QuestImage from '../assets/Quest.png'
import HuffmanImage from '../assets/HuffmanImage.png'
import Card from './Card';
import SEImage from '../assets/Pipeline.png'
import TennisImage from '../assets/Tennis_Racket_and_Balls.jpeg'
import CuraImage from '../assets/Cura.png'
import fitbitImage from '../assets/fitbit.png'


//Modal media
import HuffImage from '../assets/Huffman.png'
import ResearchPaper from '../assets/ResearchPaper.png'
import RadialPlots from '../assets/RadialPlots.png'
import SELab from '../assets/SE.png'
import healthkit from '../assets/healthkit.png'




export default function Experience() {

    const QwellData = {
        title: 'QWELL',
        description: 'An app to connect LGBTQ+ members to allied businesses in the Greater Austin Area',
        dates: 'Jan 2023 - Dec 2023',
        modalDescription: 'Qwell is an Austin based non-profit that connects LGBTQ+ members to local friendly businesses. I was a tech member on a team of 10 tech, design, and prouduct members who helped carry out a project to build a mobile application. For front-end we used React Native and Supabase for the back-end. To construct a UI for businesses and admin to view and edit their data we used Retool.'
      };

      const UTResearch = {
        title: 'Geometry of Space Research Lab',
        description: 'Developed a ML approach to further advance of field of emission line galaxy classification',
        dates: 'August 2023 - Dec 2023',
        modalDescription: 'We developed a Dense Neural Network and a Support Vector Machine to classify emission-line galaxies into Seyferts, Star-Forming, Composite, and LINERs. Data was collected from the Sloan-Digital-Sky Survey, and our models were trained and built using sckit-learn, Tensorflow, and Keras. Both models achieved an classification accurracy of above 92% in classifying galaxies. We have written a research paper and submitted for publication in AAS Research Notes.'
      };

      const Huffman = {
        title: 'Huffman Encoding',
        description: 'Implemented Huffman Compression & Decompression Algorithim in Java',
        dates: 'November 2022',
        modalDescription: 'Using Java, I implemented Huffmans Compression & Decompression Algorithim, which encondes more common characters with less bits. I constructed a Huffman tree, by reading 8 bits at a time, and storing the frequencies of characters to create new encondings. To compress, I traversed the Huffman Tree, and wrote new encondings to an output file that was the compressed document version. Files could be compressed or decompressed using a simple GUI.'
      };

      const SE = {
        imageUrl: "",
        title: 'System Emulator',
        description: 'Developed a System Emulator that processed ARM Assembly Instructions & a Cache Emulator',
        dates: 'March 2023 - April 2023',
        modalDescription: 'Using C, I implemented a basic System Emulator that processed Assembly instructions and replicated a cache system.  I implemented Instruction Pipelining, including fetching, decoding, and executing assembly instructions that were given. In addition, I handled any data or control hazards that arose while processing. In addition, I implemented a basic cache system, that used the LRU policy to evict and bring in new cache lines into the cache.'
      }

      const Quest = {
        title: 'Quest',
        description: 'An app that pushes users out of their comfort zone, gamifying trying new things',
        dates: 'October 2023',
        modalDescription: 'As part of HackTX, we created a React Native mobile application that gives users daily challenges to step out of their comfort zone. We created a feed system as well as leaderboard, gamifiying the experience. From user onboarding questions, we utilized ChatGPT API to craft user specific challenges, and Google Places API to identity nearby locations for task completion. Data was stored and managed using Supabase.  '
      }
      
      const Tennis = {
        imageUrl: "",
        title: 'Exploring Tennis Statistics',
        description: 'Investigated the progression of tennis players using Python DS Libraries',
        dates: 'Jan 2022 - April 2022',
        modalDescription: ' During High School, my interest in tennis and mathematics spurred me to pursue a project between the two. Using Jeff Sackmans database of all professional match information from 2013, I attempted to plot the performance of my favorite tennis players using different metrics. Using pandas, matplotlib, and Jupyter Notebook, I analyzed how the performance of players changed over time and in respect to different factors such as court type, constructing features such as serve percentage and breakpoint percentage, and splicing the large dataset into smaller datasets.'
      }

      const Cura = {
        title: "Cura",
        description: 'An AI based App that curates personalized treatment plans for caregivers to give patients.',
        dates: 'Jan 2024 - April 2024',
        modalDescription: ' As part of TXConvergent, we created a React Native Mobile Application for the startup Cura that uses RAG paired with GPT to personalize treatement plans for patients with schizophrenia. The RAG model uses medically approved treatement plans as context for GPT plan personalization. The app has an intuitive UI that allows caregivers to better manage and view the treatement of their patients.'
      }

      const HealthManagementApp = {
        title: 'Health Management Application',
        description: 'An application to streamline the data collection process for a UT Research Study',
        dates: 'Feb 2024 - April 2024',
        modalDescription: 'I created Python & Swift Applications that facilitated the transmission of Fitbit & Apple Watch data from study participants to the principal investigator. I used Supabase & Flask to store and retrieve API Authentication tokens, and used Fitbit API to retrieve data. Engineered an intuitive UI in Swift, using the Healthkit Framework to retrieve Apple Watch health data' 
      }

    

   
    return (
    <div style = {{}}>
        <h1 style = {{color: "#3BBA9C", fontWeight:'bold', fontSize: '2rem', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '3.5rem', fontSize: '40px'}}> Projects </h1>
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem', marginLeft: '8rem', marginRight: '8rem'}}>
        <Card {...HealthManagementApp} imageURL = {fitbitImage} media = {healthkit} type = 'health' />
        <Card {...Cura} imageURL = {CuraImage} type = 'Cura' />
        <Card {...QwellData} imageURL={Qwell} type = 'Qwell'/>
        <Card {...UTResearch} imageURL = {Galaxy} media = {ResearchPaper}  type = 'ResearchImage'/>
        <Card {...Quest} imageURL = {QuestImage} type = 'QuestSlideshow' />
        <Card {...SE} imageURL = {SEImage} media = {SELab} type = 'SE'  />
        <Card {...Huffman}  imageURL = {HuffmanImage} media = {HuffImage} type = 'image' />
        <Card {...Tennis} imageURL = {TennisImage} media = {RadialPlots} type = 'Tennis' />
        </div>
    </div>
    )
}