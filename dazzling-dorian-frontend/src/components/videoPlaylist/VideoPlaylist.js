import React from 'react'
import Video from '../video/Video'

function VideoPlaylist() {
  const videos = [
    {
      src: 'https://www.youtube.com/embed/BDb1oTfcmCI',
      description: "Get ready. You are intrigued and possibly a little confused. That's ok"
    }
  ]

  return (
    <div className="video-playlist">
      <h3>The ultimate guide to DE</h3>
      <div className="playlist">
        {videos.map((vid) => {
          return <Video src={vid.src} description={vid.description} />
        })}
      </div>
    </div>
  )
}

export default VideoPlaylist
