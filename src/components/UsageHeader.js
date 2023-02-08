import React from 'react'
import Steps from './Steps'
import step1 from '../images/step_1.png'
import step2 from '../images/step_2.png'
import step3 from '../images/step_3.png'
import step4 from '../images/step_4.png'
import play from '../images/google-play-badge.png'
import { Link } from 'react-router-dom'


const StartedHeader = () => {
  return (
    <div className='started-container'>
        
        <h1>Using the App</h1>
        <Steps title="1. Download the Application." content="Firstly download the AiFy app from the Google Play Store" image={step1} pos='relative' w='40'/>
        <Link to={'https://play.google.com/store/apps/details?id=com.textaify'} target="_blank"><img src={play} alt='Google Play Icon' width={162} height={63} style={{position:'absolute', bottom:'48%', left:'375px'}}/></Link>
        <Steps title="2. Tap on 'Get Started'." content="Tap on the button to navigate to the next screen" image={step2} w='15' dir='row-reverse'/>
        <Steps title="3. Tap on 'Login to continue'." content="Tap on the button to navigate to 'Login Page'" image={step3} w='15'/>
        <Steps title="4. Login or Register." content="Enter your Login Credentials or create a new account to continue" image={step4} w='15' dir='row-reverse'/>
        
    </div>
  )
}

export default StartedHeader