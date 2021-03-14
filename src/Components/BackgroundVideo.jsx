import React from 'react'
import classes from '../styles/BackgroundVideo.module.css'
import NrcLogo from '../assets/stupa-logo.png'

function BackgroundVideo() {
  const videoSource = './nrc_1.mp4'
  return (
    <div>
      <video autoPlay loop muted className={classes.Video} playsInline>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={classes.Content}>
        <img src={NrcLogo} width="120px" alt="NRC logo" />
        <div className={classes.SubContent}>
          <h1>Stupa Of Complete Victory</h1>
          <p>Northeast Retreat Center, USA</p>
        </div>
      </div>
    </div>
  )
}

export default BackgroundVideo
