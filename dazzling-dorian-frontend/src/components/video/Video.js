import React from 'react'
import Iframe from 'react-iframe'
import './Video.css'

function Video({src, description}) {
  return (
    <div className='video'>
      <div className = 'name'>{description}</div>
      <Iframe width="420" height="315"
      src={src}>
      </Iframe>
    </div>
  )
}

export default Video