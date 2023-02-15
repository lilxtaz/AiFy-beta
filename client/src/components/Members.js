import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@mui/material-next/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Members = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [downBtn, setDownBtn] = useState(true);

  return (
    <div>

        <div className='card-container'>

        <motion.div transition={{layout:{duration: 1, type: "spring"}}} layout onClick={()=>{setIsOpen(!isOpen);setDownBtn(!downBtn);}} style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(33, 38, 43, 0.2)", minWidth: "40vh", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding:'3rem 2rem 2.35rem 2rem' }} className='card'>
            <motion.img src={props.image} style={{width: '25%', borderRadius: '100%', marginBottom:'2rem'}} layout="position"/>
            <motion.h1 style={{fontSize: '24px'}} layout="position" >{props.name}</motion.h1>
            {downBtn && (<motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowDropDownIcon fontSize='large' sx={{color: '#3c4752'}}/>
            </motion.div>)}
            {isOpen && 
            (<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} className='expand'>

            <p>
                {props.content}
            </p>

            <Button component={Link} to={props.page} className='card-btn' variant='text'><InstagramIcon sx={{ fontSize: 30 }}/></Button>
            <Button component={Link} to={props.page} className='card-btn' variant='text'><FacebookIcon sx={{ fontSize: 30 }}/></Button>
            <Button component={Link} to={props.page} className='card-btn' variant='text'><TwitterIcon sx={{ fontSize: 30 }}/></Button>

            </motion.div>)}

        </motion.div>


        </div>

    </div>
  )
}

export default Members