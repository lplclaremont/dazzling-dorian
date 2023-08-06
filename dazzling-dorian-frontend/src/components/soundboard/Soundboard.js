import React from 'react'
import Soundbite from '../soundbite/Soundbite'
import mouth from "../../assets/mouth.m4a"
import flamboyant from "../../assets/flamboyant.m4a"
import smash from "../../assets/smash.m4a"

function Soundboard() {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block', // or 'block' depending on your layout needs
  };

  return (
    <div className="soundboard-container" style={containerStyle}>
      <Soundbite soundClip={ mouth } left={435} top={230} />
      <Soundbite soundClip={ flamboyant } left={345} top={180} />
      <Soundbite soundClip={ smash } left={430} top={60} />
      <img src="flamboyant.png" height="500" />
    </div>
  )
}

export default Soundboard
