import React, {useRef, useEffect} from 'react'
//import mouth from "../../assets/mouth.m4a"

function Soundbite({ soundClip }) {
  function play() {
    new Audio(soundClip).play()
  }

  return (
    <div>
      <button type="button" onClick={play}>Play the Sound!</button>
    </div>
  )
}

export default Soundbite
