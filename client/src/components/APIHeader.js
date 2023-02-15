import React from 'react'
import Steps from './Steps'
import step1 from '../images/api_1.png'
import step2 from '../images/api_2.png'
import step3 from '../images/api_3.png'
import step4 from '../images/api_4.png'
import step5 from '../images/api_5.png'
import step6 from '../images/api_6.png'


const StartedHeader = () => {
  return (
    <div className='started-container'>
        
        <h1>API Key</h1>
        <Steps title="1. Open up the application and navigate to the settings." content="Go to the settings menu by tapping on the three bars at the top right corner, next to history." image={step1} pos='relative' w='25'/>
        <Steps title="2. Tap on 'Tap here to get API key!'" content="Click on the red higlighted text to navigate to the OpenAI API key page!" image={step2} w='30' dir='row-reverse'/>
        <Steps title="3. Login or SignUp." content="Create a new account on the OpenAI platform, or login if you already have one." image={step3} w='30'/>
        <Steps title="4. Tap on 'Create a new secret key.'" content="Tap on the button to generate your API key." image={step4} w='35' dir='row-reverse'/>
        <Steps title="5. Copy the generated API key." content="Copy the key and save it for personal use." image={step5} w='40'/>
        <Steps title="6. Paste the API key." content="Paste the key back in the setting menu under the red highlighted text section." image={step6} w='30' dir='row-reverse'/>
        
    </div>
  )
}

export default StartedHeader