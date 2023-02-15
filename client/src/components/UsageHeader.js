import React from 'react'
import Steps from './Steps'
import step1 from '../images/usage_1.png'
import step2 from '../images/usage_2.png'
import step3 from '../images/usage_3.png'
import step4 from '../images/usage_4.png'
import step5 from '../images/usage_5.jpg'
import step6 from '../images/usage_6.jpg'


const StartedHeader = () => {
  return (
    <div className='started-container'>
        
        <h1>Using the App</h1>
        <Steps title="1. Navigate to any application." content="AiFy works on any app!" image={step1} pos='relative' w='40'/>
        <Steps title="2. Select text to be AiFy'ed" content="Highlight the part of the text for which you want to generate an AiFy query." image={step2} w='40' dir='row-reverse'/>
        <Steps title="3. Tap on three buttons." content="Tap on the button to navigate to AiFy menu" image={step3} w='40'/>
        <Steps title="4. Tap on AiFy." content="Tap on the button to be navigated to the AiFy application for generation of request." image={step4} w='10' dir='row-reverse'/>
        <Steps title="5. Generation of response." content="AiFy will generate the required GPT-3 response." image={step5} w='18'/>
        <Steps title="6. And you're done." content="Select and copy the output. " image={step6} w='18' dir='row-reverse'/>
        
    </div>
  )
}

export default StartedHeader