import React, { useState } from 'react'
import Properties from './Properties'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';


const Stats = () => {

  const [iconOneState, setIconOneState] = useState(false);
  const [iconTwoState, setIconTwoState] = useState(false);
  const [iconThreeState, setIconThreeState] = useState(false);

  return (
    <div className='props-container'>
    <div>
      <div  className='props-icon'
            onMouseEnter={() => setIconOneState(true)}
            onMouseLeave={() => setIconOneState(false)}>
      {iconOneState?<HowToRegIcon fontSize="large"/>:<HowToRegOutlinedIcon fontSize="large"/>}</div>
      <Properties title="Accessibilty" content="Easily usable within any app."/>
      </div>
      <div>
      <div  className='props-icon'
            onMouseEnter={() => setIconTwoState(true)}
            onMouseLeave={() => setIconTwoState(false)}>
      {iconTwoState?<KeyboardVoiceIcon fontSize="large"/>:<KeyboardVoiceOutlinedIcon fontSize="large"/>}</div>
      <Properties title="Voice Control" content="A built in voice assistant for smoother sailing."/>
      </div>
      <div>
      <div  className='props-icon'
            onMouseEnter={() => setIconThreeState(true)}
            onMouseLeave={() => setIconThreeState(false)}>
      {iconThreeState?<RestorePageIcon fontSize="large"/>:<RestorePageOutlinedIcon fontSize="large"/>}</div>
      <Properties title="Record Keeping" content="Keeps history of all responses."/>
      </div>
    </div>
  )
}

export default Stats