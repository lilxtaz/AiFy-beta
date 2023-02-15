import React from 'react'

const Steps = (props) => {
  return (
    <div className='step' style={{flexDirection:props.dir, position:props.pos}}>
      <div className='step-text'>
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
      </div>
      <img className='step-img' src={props.image} alt="steps" style={{width:props.w+'%', height:props.h+'%'}}/>

    </div>
  )
}

export default Steps