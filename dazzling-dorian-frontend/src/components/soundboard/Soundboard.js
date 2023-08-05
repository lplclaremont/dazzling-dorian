import React from 'react'
import Soundbite from '../soundbite/Soundbite'
import mouth from "../../assets/mouth.m4a"

function Soundboard() {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block', // or 'block' depending on your layout needs
  };

  // const buttonStyle = {
  //   position: 'absolute',
  //   left: `250px`,
  //   top: `215px`
  // };

  return (
    <div className="soundboard-container" style={containerStyle}>
      <Soundbite soundClip={ mouth } />
      <img src="flamboyant.png" height="500" />
    </div>
  )
}

export default Soundboard
