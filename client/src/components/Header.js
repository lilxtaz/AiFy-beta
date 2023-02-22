import React, { useState } from 'react'
import headerimg from '../images/header-img_2 copy.png';
import greenBox from '../images/real-green-box.png'
import redBox from '../images/red-box.png'
import characterBox from '../images/features_1.png'
import play from '../images/google-play-badge.png'
import extension from '../images/chrome-extension-badge.png'
import { Link } from 'react-router-dom'
import * as BiIcons from 'react-icons/bi'
import Button from '@mui/material-next/Button';
import Popup from './Popup';
import MailchimpFormContainer from './MailchimpFormContainer';
import { motion} from "framer-motion/dist/framer-motion";

const Header = () => {

  const [newsColor, setnewsColor] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='container' style={{marginBottom: '1rem'}}>

        <motion.div 

        initial={{ x: -30 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.8}}
         
        className='text-conatiner'><h1 className='headerTitle'>AiFy <br/></h1><h3 className='subheadingTitle'>GPT AI Chat Bot</h3></motion.div>
        <motion.h3 
        
        initial={{ x: -30 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.8}}
        
        className='headerText'>Access Chat GPT from any app on your<br /> device and get instant responses to your prompts.</motion.h3>
       <Link to={'https://play.google.com/store/apps/details?id=com.textaify'} target="_blank"><motion.img 
       
       initial={{ x: 30 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.8}}
       
       src={play} alt='Google Play Icon'/></Link>
       <Link to={'https://play.google.com/store/apps/details?id=com.textaify'} target="_blank"><motion.img 
       
       initial={{ x: 30 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.8}}
       
       src={extension} alt='Google Extension Icon' style={{borderRadius:'10px', margin:'10px 0 0 7px'}}/></Link>
       <motion.div 

            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
       
            onClick={()=>setButtonPopup(true)} className="newsletter-btn"><Button sx={{backgroundColor:'white', color: 'black', width: '250px', margin: '30px 0', paddingLeft:'0px', paddingRight:'12px' }}
            onMouseEnter={() => setnewsColor(true)}
            onMouseLeave={() => setnewsColor(false)}
            
            className='header-btn'
            color="tertiary"
            size="large"
            variant="elevated"
            startIcon={<BiIcons.BiNews className='downloadIcon' style={{ color: newsColor ? 'white' : 'black' }}/>}
        >Sign Up to Our Newsletter!</Button></motion.div>
        
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

          <MailchimpFormContainer />

        </Popup>
        
        <div className="backblur">
          <img src={headerimg} alt="test-img" width="400" height="400" />

        </div>
        <motion.div className="headerImg">
          <motion.div
          
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          
          >
          
          <img src={greenBox} alt="test-img" width="240" height="427" className='green-box'/></motion.div>

          <motion.div
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          
          >
          
          <img src={redBox} alt="test-img" width="240" height="427" className='red-box'/></motion.div>

          <motion.div
          
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          
          >
          
          <img src={characterBox} alt="test-img" width="240" height="146" className='character-box'/></motion.div>

          <motion.div
          
          initial={{ y: 300 }}
          whileInView={{ y: 0 }}
          transition= {{type: "spring",bounce: 0.4,duration: 0.8, ease:'linear'}}
          viewport={{ once: true }}
          
          >
          
          <img src={headerimg} alt="headerImg" width="1000px" height="700px" className='iphone' /></motion.div>

        </motion.div>
        


    </div>
  )
}

export default Header