import React from 'react'
import Soundbite from '../soundbite/Soundbite'
import mouth from "../../assets/mouth.m4a"

function Soundboard() {
  return (
    <div className="soundboard-container">
      <Soundbite soundClip={ mouth }/>
      <img src="flamboyant.png" height="500" />
    </div>
  )
}

export default Soundboard
