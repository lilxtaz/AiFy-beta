import React from 'react'
import Card from './Card'
import { motion} from "framer-motion/dist/framer-motion";

const Tutorial = () => {
  return (
    <div>
    <div><h1 className='tutorial-text'>FAQ</h1></div>
    <div className='tutorial-container'>
        
        <motion.div
        
        style={{overflow: "hidden"}}
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:1.35}}
        className="member-container"
        
        ><Card title="Get Started 🚀" content="Learn how to download the application and how to set it up on your device." page="/get-started"/></motion.div>
        <motion.div
        
        style={{overflow: "hidden"}}
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:1.35}}
        className="member-container"
        
        ><Card title="Get API Key 🔑" content="Learn how to setup your own API key in the application." page="/api-key"/></motion.div>
        <motion.div
        
        style={{overflow: "hidden"}}
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{type: 'spring', ease:'linear', duration:1.35}}
        className="member-container"
        
        ><Card title="Team 🤝" content= "Get to know more about us." page="/about"/></motion.div>

    </div>
    </div>
  )
}

export default Tutorial