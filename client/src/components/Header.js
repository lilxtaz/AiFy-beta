import React, { useState } from 'react'
import headerimg from '../images/header-img.png';
import play from '../images/google-play-badge.png'
import extension from '../images/chrome-extension-badge.png'
import { Link } from 'react-router-dom'
import * as BiIcons from 'react-icons/bi'
import Button from '@mui/material-next/Button';
import Popup from './Popup';
import MailchimpFormContainer from './MailchimpFormContainer';

const Header = () => {

  const [newsColor, setnewsColor] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);


  return (
    <div className='container' style={{marginBottom: '1rem'}}>

        <div className='text-conatiner'><h1 className='headerTitle'>AiFy <br/></h1><h3 className='subheadingTitle'>GPT AI Chat Bot</h3></div>
        <h3 className='headerText'>Access Chat GPT from any app on your<br /> device and get instant responses to your prompts.</h3>
       <Link to={'https://play.google.com/store/apps/details?id=com.textaify'} target="_blank"><img src={play} alt='Google Play Icon' width={162} height={63}/></Link>
       <Link to={'https://play.google.com/store/apps/details?id=com.textaify'} target="_blank"><img src={extension} alt='Google Play Icon' width={150} style={{borderRadius:'10px', margin:'10px 0 0 7px'}}/></Link>
       <div onClick={()=>setButtonPopup(true)} className="newsletter-btn"><Button sx={{backgroundColor:'white', color: 'black', width: '250px', margin: '30px 0', paddingLeft:'0px', paddingRight:'12px' }}
            onMouseEnter={() => setnewsColor(true)}
            onMouseLeave={() => setnewsColor(false)}
            
            className='header-btn'
            color="tertiary"
            size="large"
            variant="elevated"
            startIcon={<BiIcons.BiNews className='downloadIcon' style={{ color: newsColor ? 'white' : 'black' }}/>}
        >Sign Up to Our Newsletter!</Button></div>
        
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

          <MailchimpFormContainer />

        </Popup>
        
        <div className="headerImg backblur"><img src={headerimg} alt="test-img" width="400" height="400" ></img></div>
        <div className="headerImg"><img src={headerimg} alt="headerImg" width="520" height="520" ></img></div>
        


    </div>
  )
}

export default Header