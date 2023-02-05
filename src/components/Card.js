import React from 'react'

const Card = (props) => {
  return (
    <div className='card-body'>

        <h1>{props.title}</h1>
        <img src={props.image} alt="features"/>
    
    </div>
  )
}

export default Card