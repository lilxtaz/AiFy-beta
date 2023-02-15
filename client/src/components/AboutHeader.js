import React from 'react'
import bEye from '../images/bullseye.png'
import Members from './Members'
import sandesh from '../images/sandesh.jpg'
import hamza from '../images/hamza.jpg'

const AboutHeader = () => {
  return (
    <div>
      <div className='started-container'>
          <div className='header-container'>
            <div className='about-wierd'>
            <h1>About Us</h1>
              <div style={{margin:'2rem 0'}}><p className='about-hidden-p' style={{fontSize: '32px', height:'24px'}}>❝</p> 
              <p style={{lineHeight:"3rem", fontSize: '24px', letterSpacing: '0.04rem', margin: '0 2rem'}}><p className='about-hidden-p'>Welcome to our application! We're so glad you're here. Our goal is to provide you with a cutting-edge tool that harnesses the power of OpenAI's API to deliver advanced artificial intelligence capabilities to you. We believe that everyone should have access to the power of AI, and that's why we've built our application using OpenAI's API. This means that you don't need to be an AI expert to use our application. Whether you're looking to generate text, translate languages, answer questions, or something else entirely, we're here to help you get the most out of OpenAI's technology. If you have any questions, don't hesitate to reach out to our support team. We're always here to help!</p><p className='about-visible-p'>Our team has worked tirelessly to create an intuitive and user-friendly interface, coupled with robust functionality and performance, to make this application a must-have tool for anyone looking to harness the full potential of AI technology. </p></p>
              <p className='about-hidden-p' style={{padding: '0 0 0 92%', fontSize: '32px'}}>❞</p></div>
            </div>
            <img src={bEye} alt='header-img' width={320} height={320} className='about-img'></img>
          </div>
          
      </div>
      <div><h1 className='tutorial-text'>Our Team</h1></div>
      <div className='tutorial-container'>
              <Members name='Sandesh Veerani' content='I am Sandesh' image={sandesh}/>
              <Members name='Hamza Saleem' content='I am Hamza' image={hamza}/>
      </div>
    </div>
  )
}

export default AboutHeader