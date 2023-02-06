import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@mui/material-next/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Card = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='card-container'>

        <motion.div transition={{layout:{duration: 1, type: "spring"}}} layout onClick={()=>setIsOpen(!isOpen)} style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(33, 38, 43, 0.2)", minWidth: "40vh"}} className='card'>

            <motion.h1 layout="position" >{props.title}</motion.h1>
            {isOpen && 
            (<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} className='expand'>

              <p>
                {props.content}
              </p>

              <Button variant='text' sx={{backgroundColor:'white', color: '#85929E', marginTop: '15px', alignItems: 'center'}}><KeyboardArrowRightIcon fontSize="small" sx={{opacity: '0'}}/>Explore<KeyboardArrowRightIcon fontSize="small"/></Button>

            </motion.div>)}

        </motion.div>

    
    </div>
  )
}

export default Card