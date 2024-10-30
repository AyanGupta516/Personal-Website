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


//Modal Media
import ResearchPaper from '../assets/ResearchPaper.png'
import RadialPlots from '../assets/RadialPlots.png'
import SELab from '../assets/SE.png'
import healthkit from '../assets/healthkit.png'
import PintosModalImage from '../assets/pintos_modal_image.png'
import EmissionLine from '../assets/Emission-Line.png'




export default function Experience() {

    const QwellData = {
        title: 'QWELL',
        description: 'An app to connect LGBTQ+ members to allied businesses in the Greater Austin Area',
        dates: 'Jan 2023 - Dec 2023',
        modalDescription: 'Qwell is an Austin-based non-profit that connects LGBTQ+ members with local, inclusive businesses. As part of a cross-functional team of 10 spanning tech, design, and product, I contributed to building a mobile application for the organization. I developed several key frontend components using React.js and integrated Flask with Supabase to power the backend. Additionally, I leveraged Retool to design and implement dynamic admin pages, enabling seamless business data management.'
      };

      const UTResearch = {
        title: 'Geometry of Space Research Lab',
        description: 'Developed a ML approach to further advance of field of emission line galaxy classification',
        dates: 'August 2023 - March 2024',
        modalDescription: (
          <span>
            My team and I developed a Dense Neural Network and a Support Vector Machine to classify emission-line galaxies into Seyferts, Star-Forming, Composite, and LINERs. Data was collected from the Sloan-Digital Sky Survey, and our models were trained and built using scikit-learn, TensorFlow, and Keras. Both models achieved a classification accuracy of above 92% in classifying galaxies. We submitted our paper to the American Astronomical Research Society, and it was published in March 2024.
            <br /><br />
            Click <a href="https://iopscience.iop.org/article/10.3847/2515-5172/ad3422" target="_blank" rel="noopener noreferrer">here</a> to see our work!
          </span>
        )
      };

      const PintOS = {
        title: 'PintOS',
        description: 'Developed and integrated operating system features for the toy OS, PintOS',
        dates: 'September 2023 - November 2023',
        modalDescription: 'Using C, I implemented and deepened my understanding of several core operating system features. I developed thread scheduling algorithms and synchronization techniques like semaphores to prevent race conditions. I also implemented system calls to bridge user and kernel spaces and designed a virtual memory system with paging and swapping for efficient memory management. Additionally, I built a file system with a hierarchical directory structure, supporting essential operations like file creation, reading, and deletion.'
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
        modalDescription: 'As part of HackTX, my team and I created a React Native mobile application that gives users daily challenges to step out of their comfort zone. We created a feed system as well as leaderboard, gamifiying the experience. From user onboarding questions, we utilized ChatGPT API to craft user specific challenges, and Google Places API to identity nearby locations for task completion. Data was stored and managed using PostGres and FastAPI'
      }
      
      const Tennis = {
        imageUrl: "",
        title: 'Exploring Tennis Statistics',
        description: 'Investigated the progression of tennis players using Python DS Libraries',
        dates: 'Jan 2022 - April 2022',
        modalDescription: ' During High School, my interest in tennis and mathematics spurred me to pursue a project between the two. Using Jeff Sackmans database of all professional match information from 2013, I attempted to plot the performance of my favorite tennis players using different metrics. Using Pandas, Matplotlib, and Jupyter Notebook, I analyzed how the performance of players changed over time and in respect to different factors such as court type, constructing features such as serve percentage and breakpoint percentage, and splicing the large dataset into smaller datasets.'
      }

      const Cura = {
        title: "Cura",
        description: 'An AI based App that curates personalized treatment plans for caregivers to give patients.',
        dates: 'Jan 2024 - April 2024',
        modalDescription: ' As part of TX Convergent, my team and I developed a React Native app for a local startup called Cura, aimed at personalizing treatment plans for patients with schizophrenia. The app leverages a Retriever-Augmented Generation (RAG) model integrated with GPT, using medically approved treatment plans as contextual data to generate personalized care recommendations. This ensures that the recommendations align with established medical guidelines while being tailored to the unique needs of each patient. Furthermore, I helped implement API endpoints using FastAPI and designed frontend components using React Native'
      }

      const HealthManagementApp = {
        title: 'Health Management Application',
        description: 'An application to streamline the data collection process for a UT Research Study',
        dates: 'Feb 2024 - April 2024',
        modalDescription: 'I developed Python and Swift applications to support a research study at UT, assisting a professor in collecting and analyzing data from activity devices, specifically Fitbit and Apple Watch. I implemented backend services using Flask and Supabase, storing and retrieving API authentication tokens securely, ensuring continuous and seamless access to user data.In Swift, I designed and built an intuitive user interface (UI) to enhance the data collection process, integrating Apple’s HealthKit framework to gather health metrics from the Apple Watch.  ' 
      }

    

   
    return (
    <div style = {{}}>
        <h1 style = {{color: "#3BBA9C", fontWeight:'bold', fontSize: '2rem', display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '3.5rem', fontSize: '40px'}}> Projects </h1>
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem', marginLeft: '8rem', marginRight: '8rem'}}>
        <Card {...HealthManagementApp} imageURL = {fitbitImage} media = {healthkit} type = 'health' />
        <Card {...Cura} imageURL = {CuraImage} type = 'Cura' />
        <Card {...QwellData} imageURL={Qwell} type = 'Qwell'/>
        <Card {...UTResearch} imageURL = {Galaxy} media = {EmissionLine}  type = 'ResearchImage'/>
        <Card {...Quest} imageURL = {QuestImage} type = 'QuestSlideshow' />
        <Card {...PintOS} imageURL={PintOSImage} type = 'Pintos' media = {PintosModalImage}/>
        <Card {...SE} imageURL = {SEImage} media = {SELab} type = 'SE'  />
        <Card {...Tennis} imageURL = {TennisImage} media = {RadialPlots} type = 'Tennis' />
        </div>
    </div>
    )
}