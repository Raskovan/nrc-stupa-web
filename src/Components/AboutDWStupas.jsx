import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Intro.module.css'
import classesDW from '../styles/DWStupas.module.css'
import LPR from '../assets/lpr.jpg'
import K17 from '../assets/k17_ole_han.jpg'
import OleHannah from '../assets/OleHannah_KGuen94.jpg'

function DWStupas() {
  return (
    <div
      className={classes.container}
      style={{ paddingLeft: '10vmin', paddingRight: '10vmin' }}
    >
      <p className={classes.titleText} style={{ paddingLeft: 0 }}>
        DIAMOND WAY STUPAS
      </p>
      <div className={classesDW.pics_in_a_row}>
        <div style={{ flex: '0.794' }}>
          <img src={K17} width="100%" alt="17th Karmapa with Ole and Hannah" />
        </div>
        <div style={{ flex: '1.5' }}>
          <img src={OleHannah} width="100%" alt="Ole and Hannah" />
        </div>
        <div style={{ flex: '1.5' }} className={classesDW.imgHide}>
          <img src={LPR} width="100%" alt="Lopön Tsechu Rinpoche" />
        </div>
      </div>
      <div
        style={{ padding: '3vmin 0 0' }}
        className={classes.introTextContainer}
      >
        <p>
          The Enlightenment Stupa at the{' '}
          <a href="https://buddha-lolland.dk/">
            Lolland Buddhist Retreat Center
          </a>{' '}
          was inaugurated in 1982 by Tenga Rinpoche . Since then several stupas
          have been built in connection with Lama Ole and{' '}
          <a href="https://www.diamondway-buddhism.org/buddhist-teachers/hannah-nydahl/">
            Hannah Nydahl’s
          </a>{' '}
          activity of spreading Buddhism in the West.{' '}
          <a href="https://www.diamondway-buddhism.org/buddhist-teachers/lopon-tsechu-rinpoche/">
            Lopön Tsechu Rinpoche
          </a>
          , Lama Ole and Hannah Nydahl’s first Buddhist teacher, directed the
          construction of 16 stupas. Since he passed away in 2003,{' '}
          <a href="https://www.diamondway-buddhism.org/buddhist-teachers/sherab-gyaltsen-rinpoche/">
            Sherab Gyaltsen Rinpoche
          </a>{' '}
          has overseen the construction of several Diamond Way stupas.{' '}
          <a href="https://www.copenhagen-stupa.dk">Copenhagen Victory Stupa</a>{' '}
          is the most recent Stupa inaugurated by him in 2019.{' '}
          <Link to="/dw-stupas" className={classes.readMore}>
            Read more about Diamond Way Stupas
          </Link>
        </p>
      </div>
    </div>
  )
}

export default DWStupas
