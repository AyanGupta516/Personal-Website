import React, {useRef} from 'react'
import {useState} from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false)
    const formStyle = {
        width: '500px',
        height: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '5px solid #ccc',
        borderRadius: '20px',
        marginTop: '150px',
      };
    
      const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#BB8FCE'
      };
    
      const inputStyle = {
        width: '75%',
        padding: '10px',
        marginBottom: '30px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      };
    
      const textareaStyle = {
        width: '75%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        height: '145px',
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
        fontSize: '16px',
        marginTop: '15px'
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
    <h1 style = {{color:'#3BBA9C', fontSize:'64px', fontWeight: 'bold', marginTop: '7%', top: '-2.5%', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}> Contact Me!</h1>
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