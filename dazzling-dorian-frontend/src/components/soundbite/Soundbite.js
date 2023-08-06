import React, {useRef, useEffect} from 'react'
import './Soundbite.css'

function Soundbite({ soundClip, left, top }) {
  function play() {
    new Audio(soundClip).play()
  }

  const buttonStyle = {
    position: 'absolute',
    left: `${left}px`,
    top: `${top}px`
  };

  return (
    <div>
      <button
        type="button"
        style={buttonStyle}
        onClick={play}>
          Sound effect
      </button>
    </div>
  )
}

export default Soundbite
