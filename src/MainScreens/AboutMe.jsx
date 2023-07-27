import React from 'react'
export default function AboutMe() {
    const headingstyle = {color: '#BB8FCE', fontSize: '2rem'}
    const paragraphstyle = {color: 'lightgrey', padding: '.25rem'}
    const cardStyle = {
        display: 'inline-block',
        borderRadius: '20px',
        backgroundColor: '#454545',
        width: '40%',
        margin: '1rem',
        padding: '.5rem',
      };
    return (
    <>
        <div>
            <h1 style = {{color: '#3BBA9C', marginTop: '0rem'}}> About Me </h1>
            <p style = {{color: 'white', fontSize: '1.25rem', textAlign: 'center', marginTop: '-20px', display: 'flex', justifyContent: 'center'}}> I'm a student at UT-Austin studying Computer Science & Mathematics. What I enjoy most about programming is the 
                ability to take complex tasks and break them into small pieces, to create cool things or solve interesting problems. I am 
                most interested in backend algorithimic design as well as Machine Learning but also enjoy the process of constructing a web
                or mobile application. My goal right now is to learn as much as possible and to continue exploring my interests as much as I can. 
            </p>
            <h1 style = {{color: '#3BBA9C', fontSize: '2rem', textAlign: 'left', marginTop: '1.25rem'}}> Academic & Personal Interests </h1>
        </div>
        <div> 
        <div style = {cardStyle}>
            <h1 style = {headingstyle}> Mathematics</h1> 
            <p style = {paragraphstyle}> During high school, I actively took part in the Math Olympiad and local tournaments, earning accolades for my performances.</p>
        </div>
        <div style = {cardStyle}>
            <h1 style = {headingstyle}> Coding </h1> 
            <p style = {paragraphstyle}> In general, I favor Python and Java as my top choices for programming and React being my go to language for web-dev </p>
        </div>
        <div style = {cardStyle}>
            <h1 style = {headingstyle}> Tennis </h1> 
            <p style = {paragraphstyle}> In high school, I was part of my school's varsity tennis team, and even now, I find great pleasure in watching and playing the sport </p>
        </div>
        <div style = {cardStyle}>
            <h1 style = {headingstyle}> Watching Movies </h1> 
            <p style = {paragraphstyle}> I enjoy watching movies and immersing myself in the captivating stories being told on the big screen </p>
        </div>
        </div>
        
    </>
    )
}