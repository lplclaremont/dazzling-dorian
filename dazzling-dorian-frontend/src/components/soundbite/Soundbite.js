import React, {useRef, useEffect} from 'react'

function Soundbite({ soundClip }) {
  function play() {
    new Audio(soundClip).play()
  }

  const buttonStyle = {
    position: 'absolute',
    left: `410px`,
    top: `230px`
  };

  return (
    <div>
      <button
        type="button"
        style={buttonStyle}
        onClick={play}>
          Play the Sound!
      </button>
    </div>
  )
}

export default Soundbite
