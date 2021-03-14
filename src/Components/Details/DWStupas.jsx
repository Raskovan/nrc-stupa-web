import React from 'react'
import classes from '../../styles/Details.module.css'
import OleHannahStupa from '../../assets/OleHannahStupa.jpg'
import Kbl from '../../assets/kbl.jpg'

function DWStupas() {
  return (
    <div className={classes.container}>
      <div className={classes.insideContainer}>
        <h1 className={classes.titleText}>DIAMOND WAY STUPAS</h1>
        <div className={classes.imgBigHeroContainer}>
          <img
            src={OleHannahStupa}
            width="100%"
            alt="Ole Hannah Stupa Inauguration"
          />
        </div>
        <p>
          The Enlightenment Stupa at the{' '}
          <a href="http://buddha-lolland.dk/">
            Lolland Buddhist Retreat Center
          </a>{' '}
          was inaugurated in 1982 by Tenga Rinpoche. Since then several stupas
          have been built in connection with Lama Ole and
          <a href="https://www.diamondway-buddhism.org/buddhist-teachers/hannah-nydahl/">
            {' '}
            Hannah Nydahl’s{' '}
          </a>
          activity of spreading Buddhism in the West.{' '}
          <a href="https://www.diamondway-buddhism.org/buddhist-teachers/lopon-tsechu-rinpoche/">
            {' '}
            Lopön Tsechu Rinpoche
          </a>
          , Lama Ole and Hannah Nydahl’s first Buddhist teacher, directed the
          construction of 16 stupas. Since he passed away in 2003,{' '}
          <a href="https://www.diamondway-buddhism.org/buddhist-teachers/sherab-gyaltsen-rinpoche/">
            {' '}
            Sherab Gyaltsen Rinpoche{' '}
          </a>{' '}
          has overseen the construction of several Diamond Way stupas.
          <a href="https://www.copenhagen-stupa.dk">
            {' '}
            Copenhagen Victory Stupa{' '}
          </a>
          is the most recent Stupa inaugurated by him in 2019.
        </p>
        <img
          src={Kbl}
          className={classes.imgFloatRight}
          width="40%"
          alt="Stupa in KBL"
        />
        <p>
          The first stupa in Spain, a Kalachakra Stupa, was built in 1994 at the
          Karma Guen Retreat Centre near Velez-Malaga, under the guidance of
          Lopön Tsechu Rinpoche. The largest stupa in Europe, measuring 108
          feet, is the{' '}
          <a href="http://www.stupabenalmadena.org/en/">
            {' '}
            Enlightenment Stupa in Benalmadena
          </a>
          , also in Spain. It is the last stupa built by Lopön Tsechu Rinpoche,
          and inaugurated in 2003 by the 14th Shamar Rinpoche, four months after
          the passing of Lopön Tsechu Rinpoche.
        </p>
        <p>
          Since then Diamond Way stupas have been built in Bulgaria, Greece,
          Poland, Russia, Switzerland, The Czech Republic, Germany and Austria,
          among other countries.
        </p>
        <p>
          In 2017, all eight non-tantric stupas were built in{' '}
          <a href="https://www.berchenling.org/8-stupas/">Karma Berchen Ling</a>
          .
        </p>
      </div>
    </div>
  )
}

export default DWStupas
