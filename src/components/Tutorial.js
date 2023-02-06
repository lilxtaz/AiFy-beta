import React from 'react'
import Card from './Card'

const Tutorial = () => {
  return (
    <div>
    <div><h1 className='tutorial-text'>FAQ</h1></div>
    <div className='tutorial-container'>
        
        <Card title="Get Started 🚀" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni cum incidunt exercitationem, ipsam debitis laboriosam dicta nihil iste totam?"/>
        <Card title="Get API Key 🔑" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni cum incidunt exercitationem, ipsam debitis laboriosam dicta nihil iste totam?"/>
        <Card title="Team 🤝" content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni cum incidunt exercitationem, ipsam debitis laboriosam dicta nihil iste totam?"/>

    </div>
    </div>
  )
}

export default Tutorial