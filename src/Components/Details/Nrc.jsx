import React from 'react'
import classes from '../../styles/Details.module.css'
import Nrc1 from '../../assets/nrc_1.jpg'
import Nrc2 from '../../assets/nrc_2.jpg'

function Nrc() {
  return (
    <div className={classes.container}>
      <h1 className={classes.titleText}>NORTHEAST RETREAT CENTER</h1>
      <div className={classes.imgBigHeroContainer}>
        <img src={Nrc1} width="100%" alt="North East retreat center" />
      </div>
      <div className={classes.insideContainer}>
        <p className={classes.quoteText}>
          The nature of mind is beyond birth and death, coming and going, and
          this is the type of place where you can realize that.
        </p>
        <p className={classes.quoteAuthor}>
          Lama Ole Nydahl during his first visit to the Retreat Center in
          November 2015{' '}
        </p>
      </div>
      <div className={classes.insideContainer}>
        <p>
          The Northeast Retreat Center is a hub for Diamond Way Buddhist
          practice in the North-Eastern region of North America. It is a place
          for meditation retreats, courses with Diamond Way teachers and Lamas,
          and a place to enjoy and deepen friendships. Resting on a high plateau
          with 270 degree views of inspiring forested hills, it features flat
          open fields at a high altitude that show the freedom of space and
          create the conditions for us to recognize our mind’s full potential
          and richness.
        </p>
        <img
          src={Nrc2}
          className={classes.imgFloatRight}
          width="40%"
          alt="Meditation at North East retreat center"
        />
        <p>
          Sustained by the friendship and joyful effort of our regional sangha,
          the retreat center is a living expression of the 1,000 year-old Karma
          Kagyu transmission of Tibetan Buddhism and the activity of our root
          teacher, Lama Ole Nydahl. Lama Ole gave it the Tibetan name Karma
          Dondrub Ling, which means “Place of Accomplishment”.{' '}
        </p>
        <p>
          The Northeast Retreat Center is part of an international non-profit
          network of over 600 lay meditation centers within the Karma Kagyu
          lineage. These centers were founded by Lama Ole Nydahl according to
          the wishes of H.H. 16th Karmapa Rangjung Rigpe Dorje and today are
          under the spiritual authority of H.H. 17th Karmapa Trinley Thaye
          Dorje.{' '}
        </p>
        <p>
          When Lama Ole visited NRC for the second time in 2017, he designated a
          place for the Stupa on the land of the retreat center.
        </p>
      </div>
    </div>
  )
}
export default Nrc
