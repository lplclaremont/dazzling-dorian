import React from 'react'
import Video from '../video/Video'
import './VideoPlaylist.css'

function VideoPlaylist() {
  const videos = [
    {
      id: 1,
      src: 'https://www.youtube.com/embed/BDb1oTfcmCI',
      description: "Get ready!"
    },
    {
      id: 2,
      src: 'https://www.youtube.com/embed/MDDukLyXY-M',
      description: "It's business time."

    },
    {
      id: 3,
      src: 'https://www.youtube.com/embed/kk4BZ3uOSHI',
      description: "How about a little chic."
    }
  ]

  return (
    <div className="video-playlist">
      <h3 className="playlist-title">The ultimate guide to DE</h3>
      <div className="playlist">
        {videos.map((vid) => {
          return <Video key={vid.id} src={vid.src} description={vid.description} />
        })}
      </div>
    </div>
  )
}

export default VideoPlaylist
