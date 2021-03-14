import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Intro.module.css'
import LamaOlePhoto from '../assets/LamaOle_NRC.jpg'

function AboutNRC() {
  return (
    <div className={classes.container}>
      <p className={classes.titleText}>NORTHEAST RETREAT CENTER</p>
      <div className={classes.headImage}>
        <img
          src={LamaOlePhoto}
          width="100%"
          alt="Lama Ole"
          className={classes.titleImg}
        />
      </div>
      <div className={classes.introTextContainer}>
        <p>
          The Northeast Retreat Center is a hub for Diamond Way Buddhist
          practice in the North-Eastern region of North America. It is a place
          for meditation retreats, courses with Diamond Way teachers and Lamas,
          and a place to enjoy and deepen friendships. Resting on a high plateau
          with 270 degree views of inspiring forested hills, it features flat
          open fields at a high altitude that show the freedom of space and
          create the conditions for us to recognize our mind’s full potential
          and richness.{' '}
          <Link to="/nrc" className={classes.readMore}>
            Read more about NRC
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AboutNRC
