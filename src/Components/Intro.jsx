import React from 'react'
import classes from '../styles/Intro.module.css'
// import stupaImage from '../assets/stupa.png'

function Intro() {
  return (
    <div className={classes.container}>
      <div className={classes.introTextContainer}>
        <p>
          Stupas are Buddhist monuments that contribute to the preservation of
          peace and harmony in the world. These architectural structures
          symbolize Buddhist activity and express in a perfect form the pure
          nature of mind: enlightenment. According to the Buddhist tradition,
          stupas produce positive influence on their surroundings and those who
          encounter them.
        </p>
        <p>
          In September 2019, Lama Ole Nydahl announced the construction of the
          Stupa of Complete Victory at the Northeast Retreat Center: “It will be
          a victory over everything negative, a victory over things that nobody
          likes, mental disturbances, and everything harmful.” This is the first
          Diamond Way Stupa in North America and will be located at the{' '}
          <a href="http://www.diamondway.org/nrc/">NRC</a> in Upstate New York.
          The construction and preparation timescale is planned to take place
          for the next several years. Lama Ole has invited Nedo Rinpoche to
          oversee the construction and inauguration of the stupa.{' '}
        </p>
        <p>
          Wojtek Kossowski, an architect who has built stupas worldwide, will
          execute the design.
        </p>
        <p>
          Please dedicate your{' '}
          <a
            href="https://www.diamondway.org/nrc/mantras/"
            target="_blank"
            rel="noreferrer"
          >
            Karmapa Chenno mantras
          </a>{' '}
          to the project.
        </p>
      </div>
    </div>
  )
}

export default Intro
