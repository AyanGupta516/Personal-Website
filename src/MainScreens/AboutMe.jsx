import React from 'react'
export default function AboutMe() {
    const headingstyle = {color: '#BB8FCE', fontSize: '32px'}
    const paragraphstyle = {color: 'lightgrey', padding: '5px'}
    return (
    <>
        <div>
            <h1 style = {{color: '#3BBA9C', marginTop: '20px'}}> About Me </h1>
            <p style = {{color: 'white', fontSize: '20px', textAlign: 'center', marginTop: '-20px', display: 'flex', justifyContent: 'center'}}> I'm a student at UT-Austin studying Computer Science & Mathematics. What I enjoy most about programming is the 
                ability to take complex tasks and break them into small pieces, to create cool things or solve interesting problems. I am 
                most interested in backend algorithimic design as well as Machine Learning but also enjoy the process of constructing a web
                or mobile application. My goal right now is to learn as much as possible and to continue exploring my interests as much as I can. 
            </p>
            <h1 style = {{color: '#3BBA9C', fontSize: '32px', textAlign: 'left', marginTop: '20px'}}> Academic & Personal Interests </h1>
        </div>
        <div> 
        <div style = {{display: 'inline-block', borderRadius: '20px', backgroundColor:'#454545', marginRight: '50px', width: '500px', marginLeft: '-15px'}}>
            <h1 style = {headingstyle}> Mathematics</h1> 
            <p style = {paragraphstyle}> Throughout Highschool, I competed in the Math Olympiad and local tournaments while placing well</p>
        </div>
        <div style = {{display: 'inline-block', borderRadius: '20px', backgroundColor:'#454545', width: '500px'}}>
            <h1 style = {headingstyle}> Coding </h1> 
            <p style = {paragraphstyle}> My favorite language to use in general is Python and ReactJS for web development </p>
        </div>
        <div style = {{display: 'inline-block', borderRadius: '20px', backgroundColor:'#454545', width: '500px', marginRight: '50px', marginTop: '50px' }}>
            <h1 style = {headingstyle}> Tennis </h1> 
            <p style = {paragraphstyle}> I played Varsity Tennis in High School and continue to enjoy watching the sport </p>
        </div>
        <div style = {{display: 'inline-block', borderRadius: '20px', backgroundColor:'#454545', width: '500px' }}>
            <h1 style = {headingstyle}> Watching Movies </h1> 
            <p style = {paragraphstyle}> A self proclaimed movie critic who enjoys a complex and a well thoughtout story </p>
        </div>
        </div>
        
    </>
    )
}