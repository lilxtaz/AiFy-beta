import React, { useState } from 'react'
import { motion} from "framer-motion/dist/framer-motion";
import Button from '@mui/material-next/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Card = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [downBtn, setDownBtn] = useState(true);


  return (
    <div className='card-container'>

        <motion.div transition={{layout:{duration: 1.35, type: "spring"}}} layout onClick={()=>{setIsOpen(!isOpen);setDownBtn(!downBtn);}} style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(33, 38, 43, 0.2)", minWidth: "40vh", overflow: 'hidden'}} className='card'>

            <motion.h1 layout="position" >{props.title}</motion.h1>
            {downBtn && (<motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowDropDownIcon fontSize='large' sx={{color: '#3c4752'}}/>
            </motion.div>)}
            {isOpen && 
            (<motion.div style={{overflow: "hidden"}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} className='expand'>

              <p>
                {props.content}
              </p>

              <Button component={Link} to={props.page} className='card-btn' variant='text' ><KeyboardArrowRightIcon fontSize="small" sx={{opacity: '0'}}/>Explore<KeyboardArrowRightIcon fontSize="small"/></Button>

            </motion.div>)}

        </motion.div>

    
    </div>
  )
}

export default Card

//style={{backgroundColor:'#85929E', color: '#21262b', marginTop: '15px', alignItems: 'center'}}