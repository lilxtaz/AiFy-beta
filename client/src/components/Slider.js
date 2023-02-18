import React, { useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import WhitePlayStore from '../images/play_store.png';
import Typical from 'react-typical';
import { motion} from "framer-motion/dist/framer-motion";

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{

        setCurrent(current===length-1 ? 0: current+1);

    }

    const prevSlide = () =>{

        setCurrent(current===0 ? length-1: current-1);

    }

  return (
    <div className='slider-block' >
        <motion.div 
        
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.8}}
        
        className='slider-block-text'>

            <h1>What people are saying about <Typical loop={Infinity} wrapper="b" steps={['us', 2500, 'AiFy', 2500]} /></h1>
            
        </motion.div>
        <motion.div 
        
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:0.8}}
        
        className='slider'>
        <ChevronLeftIcon fontSize="large" className='slide-left-arrow' onClick={prevSlide} />
        <ChevronRightIcon fontSize="large" className='slide-right-arrow' onClick={nextSlide}/>

        {slides.map((slide, index)=>{

            return(
                <div className={index===current?'slide active': 'slide'} key={index}>
                    {index===current&&(
                        <div className='slide-review'>
                            <h1>ߵ {slide.review} ߴ</h1>
                            <h3>{slide.name}</h3>
                        </div>)}

                        <div className='play'> 
                            <img src={WhitePlayStore} alt="play-store-icon" width="30" height="30" />
                            <p>Google Play Review</p>
                        </div>   
                </div>

            )

        })}
        </motion.div>
        
    </div>
  )
}

export default Slider