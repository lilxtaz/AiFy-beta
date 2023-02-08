import React from 'react'

const Steps = (props) => {
  return (
    <div className='step' style={{flexDirection:props.dir, position:props.pos}}>
      <div className='step-text'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <img className='step-img' src={props.image} alt="steps" style={{width:props.w+'%', height:props.h+'%'}}/>

    </div>
  )
}

export default Steps