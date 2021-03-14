import React from 'react'
import classes from '../styles/Intro.module.css'
import StupaNepal from '../assets/stupa-nepal.jpg'
import { Link } from 'react-router-dom'

function AboutStupas() {
  return (
    <div className={classes.container}>
      <p className={classes.titleText}>ABOUT STUPAS</p>
      <div className={classes.headImage}>
        <img
          src={StupaNepal}
          className={classes.titleImg}
          width="100%"
          alt="Stupa in Nepal"
        />
      </div>
      <div className={classes.introTextContainer}>
        <p>
          Stupas in the West mean the strengthened transmission of Asian
          Buddhism coming to the West and that the Dharma can grow here. Their
          symbolism is multifaceted: a stupa represents the mind of the Buddha,
          it also refers to the community of practitioners, the Sangha.
          Generally, it is said that the spiritual influence of stupas is so
          great that those who revere them, help during its construction, or
          those who live in the vicinity, experience its positive effect as a
          source of peace, happiness, and prosperity.{' '}
          <Link to="/stupas" className={classes.readMore}>
            Read more about stupas
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AboutStupas
