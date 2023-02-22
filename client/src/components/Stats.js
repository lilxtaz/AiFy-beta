import React, { useState } from 'react'
import Properties from './Properties'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import { motion} from "framer-motion/dist/framer-motion";


const Stats = () => {

  const [iconOneState, setIconOneState] = useState(false);
  const [iconTwoState, setIconTwoState] = useState(false);
  const [iconThreeState, setIconThreeState] = useState(false);

  return (
    <div className='props-container'>
      <motion.div 

        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.5}}
      
      className='prop'>
        <div  className='props-icon'
              onMouseEnter={() => setIconOneState(true)}
              onMouseLeave={() => setIconOneState(false)}>
        {iconOneState?<HowToRegIcon fontSize="large"/>:<HowToRegOutlinedIcon fontSize="large"/>}</div>
        <Properties title="Accessibilty" content="Easily usable within any app."/>
        </motion.div>
        <motion.div 

        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:1}}
        
        className='prop'>
        <div  className='props-icon'
              onMouseEnter={() => setIconTwoState(true)}
              onMouseLeave={() => setIconTwoState(false)}>
        {iconTwoState?<KeyboardVoiceIcon fontSize="large"/>:<KeyboardVoiceOutlinedIcon fontSize="large"/>}</div>
        <Properties title="Voice Control" content="A built in voice assistant for smoother sailing."/>
        </motion.div>
        <motion.div 
        
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:1.35}}
        
        className='prop'>
        <div  className='props-icon'
              onMouseEnter={() => setIconThreeState(true)}
              onMouseLeave={() => setIconThreeState(false)}>
        {iconThreeState?<RestorePageIcon fontSize="large"/>:<RestorePageOutlinedIcon fontSize="large"/>}</div>
        <Properties title="Record Keeping" content="Keeps history of all responses."/>
        </motion.div>
    </div>
  )
}

export default Stats