import React, { useState } from 'react'
import Button from '@mui/material-next/Button';
import GoogleIcon from '@mui/icons-material/Google';
import headerimg from '../images/header-img.png';

const Header = () => {

    const [downloadbtnColor, setdownloadbtnColor] = useState(false);

  return (
    <div className='container'>

        <div className='text-conatiner'><h1 className='headerTitle'>AiFy <br/><h3 className='subheadingTitle'>GPT AI Chat Bot</h3></h1></div>
        <h3 className='headerText'>Access Chat GPT from any app on your<br /> device and get instant responses to your prompts.</h3>
        <Button sx={{backgroundColor:'white', color: 'black', width: '150px', margin: '30px 0' }}
            onMouseEnter={() => setdownloadbtnColor(true)}
            onMouseLeave={() => setdownloadbtnColor(false)}
            className='header-btn'
            color="tertiary"
            size="large"
            variant="elevated"
            startIcon={<GoogleIcon  className='downloadIcon' style={{ color: downloadbtnColor ? 'white' : 'black' }}/>}
        >Download</Button>
        <div className="headerImg backblur"><img src={headerimg} alt="test-img" width="400" height="400" ></img></div>
        <div className="headerImg"><img src={headerimg} alt="headerImg" width="520" height="520" ></img></div>


    </div>
  )
}

export default Header