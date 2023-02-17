import React from 'react'
import { motion } from 'framer-motion'

const Steps = (props) => {
  return (
    <motion.div 
    
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8 }}
    
    className='step' style={{flexDirection:props.dir, position:props.pos}}>
      <div className='step-text'>
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
      </div>
      <img className='step-img' src={props.image} alt="steps" style={{width:props.w+'%', height:props.h+'%'}}/>

    </motion.div>
  )
}

export default Steps