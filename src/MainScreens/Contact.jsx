import React, {useRef} from 'react'
import {useState} from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false)
    const formStyle = {
        width: '35vw',
        height: '75vh',
        margin: '0 auto',
        padding: '1.25rem',
        border: '5px solid #ccc',
        borderRadius: '20px',
        marginTop: '0px',
        overflow: 'auto'
      };
    
      const labelStyle = {
        display: 'block',
        marginBottom: '.5rem',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#BB8FCE'
      };
    
      const inputStyle = {
        width: '75%',
        padding: '.5rem',
        marginBottom: '2rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
      };
    
      const textareaStyle = {
        width: '75%',
        padding: '.5rem',
        marginBottom: '1.5rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        height: '20vh',
        resize: 'none'
      };
    
      const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: isHovered ? '#6EE5CD' : '#3BBA9C',  
        color: '#fff',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '.5rem'
      };

    const form = useRef()
    const formIsValid = (formData) => {
      const RequiredFields = ['name', 'email', 'subject', 'message']
      for (const field of RequiredFields) {
        if (!formData.get(field)) {
          return false
        }
      }
      return true
    }
    const sendEmail = (e) => {
      e.preventDefault();
      const formData = new FormData(form.current)
      if (!formIsValid(formData)) {
        alert("Please fill out the required fields")
        return
      }
      emailjs.sendForm('service_3uaopmk', 'template_h0r6x32', form.current, '78z24QiCQL419f772')
        .then(() => {
            alert("Email has been Sent")
            form.current.reset()
        }, () => {
            alert("Error in sending")
        });
    };
    return (
    <>
    <h1 style = {{color:'#3BBA9C', fontSize:'3.5rem', fontWeight: 'bold', marginTop: '10%', justifyContent: 'center', display: 'flex'}}> Contact Me!</h1>
        <div style = {formStyle}>
        <form ref = {form} onSubmit = {sendEmail}>
        <div>
          <label style={labelStyle} htmlFor="name" >Name:</label>
          <input style={inputStyle} type="text"name="name" placeholder= 'Enter name' />
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">Email:</label>
          <input style={inputStyle} type="email" name="email" placeholder='Enter email' />
        </div>
        <div>
          <label style={labelStyle} htmlFor="subject">Subject:</label>
          <input style={inputStyle} type = 'text' name="subject" placeholder='Enter Subject' />
        </div>
        <div>
          <label style={labelStyle} htmlFor="message">Message:</label>
          <textarea style={textareaStyle} name="message" rows="4" placeholder='Write message' />
        </div>
        <button style={buttonStyle} type="submit" onMouseEnter={() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)}>Submit</button>
      </form>
    </div>
     </>
    )
}
